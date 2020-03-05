import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Newsfeed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      <IonCard className="welcome-card" routerLink="/tab1/microsoftjob">
          <img src="/assets/microsoft.jpg" alt="" />
          <IonCardContent>
          <IonCardSubtitle>Microsoft</IonCardSubtitle>
          <IonCardTitle>Software Engineer</IonCardTitle>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

      <IonCard className="welcome-card" routerLink="/tab1/applejob">
          <img src="/assets/apple.png" alt="" />
          <IonCardContent>
          <IonCardSubtitle>apple</IonCardSubtitle>
          <IonCardTitle>Software Engineer</IonCardTitle>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard className="welcome-card" routerLink="/tab1/googlejob">
          <img src="/assets/google.jpg" alt="" />
          <IonCardContent>
          <IonCardSubtitle>Google</IonCardSubtitle>
          <IonCardTitle>Media Planner</IonCardTitle>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
