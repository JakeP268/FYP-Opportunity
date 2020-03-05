import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonButtons, IonBackButton } from '@ionic/react';

const ScienceSector: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>Science Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      <IonCard className="welcome-card" routerLink="/tab2/playstationjob">
          <img src="/assets/psbuttons.jpg" alt="" />
          <IonCardContent>
          <IonCardSubtitle>PlayStation</IonCardSubtitle>
          <IonCardTitle>Cloud Infrastructure Engineer</IonCardTitle>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

      <IonCard className="welcome-card" routerLink="/tab2/awsjob">
          <img src="/assets/aws.jpg" alt="" />
          <IonCardContent>
          <IonCardSubtitle>AWS</IonCardSubtitle>
          <IonCardTitle>Software Engineer</IonCardTitle>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard className="welcome-card" routerLink="/tab2/googlejob">
          <img src="/assets/google.jpg" alt="" />
          <IonCardContent>
          <IonCardSubtitle>Google</IonCardSubtitle>
          <IonCardTitle>Software Engineer</IonCardTitle>
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

export default ScienceSector;