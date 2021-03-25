import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle,
} from "@ionic/react";
import { moon, logoGithub } from "ionicons/icons";

const SideMenu: React.FC = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Opportunity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonIcon slot="start" icon={moon} />
          <IonLabel>Dark Mode</IonLabel>
          {/* Dark mode toggle on/off */}
          <IonToggle
            color="primary"
            slot="end"
            name="darkMode"
            onIonChange={toggleDarkModeHandler}
          />
        </IonItem>
        <IonItem
          button
          href="https://github.com/JakeP268/Opportunity"
          routerDirection="none"
        >
          <IonIcon slot="start" icon={logoGithub} />
          <IonLabel>Github Repo</IonLabel>
        </IonItem>
      </IonContent>
    </IonMenu>
  );
};

//Dark mode method (function)
const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};

export default SideMenu;
