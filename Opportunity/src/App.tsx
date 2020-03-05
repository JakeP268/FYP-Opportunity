import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonSpinner } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { apps, contact, search, informationCircleOutline, mailOpen } from 'ionicons/icons';

import Home from './pages/Credentials/Home';
import Register from './pages/Credentials/Register';
import Login from './pages/Credentials/Login';


import Tab1 from './pages/Tab1';
import GoogleJob from './pages/J/GoogleJob';
import MicrosoftJob from './pages/J/MicrosoftJob';
import AppleJob from './pages/J/AppleJob';


import Tab2 from './pages/Tab2';
import ScienceSector from './pages/Categories/ScienceSector';
import PlayStationJob from './pages/J/PlayStationJob'
import AWSJob from './pages/J/AWSJob';

import BusinessSector from './pages/Categories/BusinessSector';
import BenDunneJob from './pages/J/BenDunneJob';
import MercedesJob from './pages/J/MercedesJob';
import PWCJob from './pages/J/PWCJob';

import EngineeringSector from './pages/Categories/EngineeringSector';
import TevaJob from './pages/J/TevaJob';
import EirGenJob from './pages/J/EirGenJob';
import WestJob from './pages/J/WestJob';

import GraduateSector from './pages/Categories/GraduateSector';
import FBJob from './pages/J/FBJob';
import AldiJob from './pages/J/AldiJob';
import JamesonJob from './pages/J/JamesonJob';


import ConnectionsSector from './pages/Categories/ConnectionsSector';

import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { getCurrentUser } from './firebaseSetup'
import { useDispatch } from 'react-redux';
import { setUserState } from './redux/actions';

const RoutingSystem: React.FC = () => {

return (
  
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />


          <Route path="/tab1" component={Tab1} exact={true} />

          <Route path="/tab1/googlejob" component={GoogleJob} />
          <Route path="/tab1/microsoftjob" component={MicrosoftJob} />
          <Route path="/tab1/applejob" component={AppleJob} />
          
          
          
          <Route path="/tab2" component={Tab2} />
          <Route path="/tab2/sciencesector" component={ScienceSector} />
          <Route path="/tab2/playstationjob" component={PlayStationJob} />
          <Route path="/tab2/awsjob" component={AWSJob} />

          <Route path="/tab2/businesssector" component={BusinessSector} />
          <Route path="/tab2/bendunnejob" component={BenDunneJob} />
          <Route path="/tab2/mercedesjob" component={MercedesJob} />
          <Route path="/tab2/pwcjob" component={PWCJob} />

          <Route path="/tab2/connectionssector" component={ConnectionsSector} />
          
          <Route path="/tab2/engineeringsector" component={EngineeringSector} />
          <Route path="/tab2/tevajob" component={TevaJob} />
          <Route path="/tab2/eirgenjob" component={EirGenJob} />
          <Route path="/tab2/westjob" component={WestJob} />

          <Route path="/tab2/graduatesector" component={GraduateSector} />
          <Route path="/tab2/fbjob" component={FBJob} />
          <Route path="/tab2/jamesonjob" component={JamesonJob} />
          <Route path="/tab2/aldijob" component={AldiJob} />



          <Route path="/tab3" component={Tab3} />
          <Route path="/tab4" component={Tab4} />
          <Route path="/tab5" component={Tab5} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={apps} />
            <IonLabel>Tab One</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={search} />
            <IonLabel>Tab Two</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={informationCircleOutline} />
            <IonLabel>Tab Three</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={mailOpen} />
            <IonLabel>Tab Four</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/tab5">
            <IonIcon icon={contact} />
            <IonLabel>Tab Five</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  )
}

const App: React.FC = () => {
  const [busy, setBusy] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
   getCurrentUser().then((user: any) => {
     console.log(user)
     if (user) {

      dispatch(setUserState(user.email))
      window.history.replaceState({},'', '/Tab1')
     } else {
       window.history.replaceState({},'', '/')
     }
     setBusy(false)
    })
  }, [])


  return <IonApp>{busy ? <IonSpinner /> : <RoutingSystem />}</IonApp>
}

export default App