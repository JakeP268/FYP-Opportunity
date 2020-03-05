import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonButtons, IonBackButton } from '@ionic/react';

const GraduateSector: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
      <IonButtons slot="start">
          <IonBackButton defaultHref="/tab2" />
        </IonButtons>
        <IonTitle>Graduate Feed</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>

    <IonCard className="welcome-card" routerLink="/tab2/fbjob">
        <img src="/assets/fb.png" alt="" />
        <IonCardContent>
        <IonCardSubtitle>FaceBookl</IonCardSubtitle>
        <IonCardTitle>Software Engineer</IonCardTitle>
          <p>
            Now that your app has been created, you'll want to start building out features and
            components. Check out some of the resources below for next steps.
          </p>
        </IonCardContent>
      </IonCard>

      <IonCard className="welcome-card" routerLink="/tab2/jamesonjob">
        <img src="/assets/jameson.jpg" alt="" />
        <IonCardContent>
        <IonCardSubtitle>Jameson</IonCardSubtitle>
        <IonCardTitle>Software Engineer</IonCardTitle>
          <p>
            Now that your app has been created, you'll want to start building out features and
            components. Check out some of the resources below for next steps.
          </p>
        </IonCardContent>
      </IonCard>

      <IonCard className="welcome-card" routerLink="/tab2/aldijob">
        <img src="/assets/aldi.jpg" alt="" />
        <IonCardContent>
        <IonCardSubtitle>Aldi</IonCardSubtitle>
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

export default GraduateSector;