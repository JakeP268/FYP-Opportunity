import React, { useEffect, useState } from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonSpinner,
  IonSplitPane,
} from "@ionic/react";
import { Route, Redirect } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import TabsMenu from "./pages/TabsMenu";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/theme.css";
import { getCurrentUser } from "./firebaseSetup";
import { useDispatch } from "react-redux";
import { setUserState } from "./redux/actions";
import SideMenu from "./components/SideMenu";
import ProfileContactsContextProvider from "./data/profileContactsContextProvider";
import ProfileAboutsContextProvider from "./data/profileAboutsContextProvider";
import ProfileEducationsContextProvider from "./data/profileEducationsContextProvider";
import ProfileExperiencesContextProvider from "./data/profileExperiencesContextProvider";
import ProfileSkillsContextProvider from "./data/profileSkillsContextProvider";
import ProfilePreviewsContextProvider from "./data/profilePreviewsContextProvider";

const RoutingSystem: React.FC = () => {
  return (
    // IonReactRouter is used for the routing of all components within the application
    <IonReactRouter>
      <IonSplitPane className="n" contentId="main">
        {/* Calls SideMenu.tsx component */}
        <SideMenu />
        <ProfileAboutsContextProvider>
          <ProfileContactsContextProvider>
            <ProfileEducationsContextProvider>
              <ProfileExperiencesContextProvider>
                <ProfilePreviewsContextProvider>
                  <ProfileSkillsContextProvider>
                    <IonRouterOutlet id="main">
                      <Route path="/" component={Login} exact />
                      <Route path="/register" component={Register} exact />
                      {/* Calls TabsMenu.tsx component */}
                      <Route path="/tabs" exact>
                        <TabsMenu />
                      </Route>
                      {/* Redirects unhandled requests back to the tabs component */}
                      <Redirect to="/tabs" />
                    </IonRouterOutlet>
                  </ProfileSkillsContextProvider>
                </ProfilePreviewsContextProvider>
              </ProfileExperiencesContextProvider>
            </ProfileEducationsContextProvider>
          </ProfileContactsContextProvider>
        </ProfileAboutsContextProvider>
      </IonSplitPane>
    </IonReactRouter>
  );
};

const App: React.FC = () => {
  const [busy, setBusy] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then((user: any) => {
      console.log(user);
      if (user) {
        dispatch(setUserState(user.email));
        window.history.replaceState({}, "/", "/tabs/newsfeed");
      } else {
        window.history.replaceState({}, "", "/");
      }
      setBusy(false);
    });
  }, []);

  return (
    <IonApp>
      {busy ? (
        <IonSpinner className="spinnerCenter" name="bubbles" color="primary" />
      ) : (
        <RoutingSystem />
      )}
    </IonApp>
  );
};

export default App;
