import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonButtons, IonBackButton } from '@ionic/react';

const EngineeringSector: React.FC = () => {
  return (
<IonPage>
    <IonHeader>
      <IonToolbar>
      <IonButtons slot="start">
          <IonBackButton defaultHref="/tab2" />
        </IonButtons>
        <IonTitle>Engineering Feed</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>

    <IonCard className="welcome-card" routerLink="/tab2/tevajob">
        <img src="/assets/teva.jpg" alt="" />
        <IonCardContent>
        <IonCardSubtitle>Teva</IonCardSubtitle>
        <IonCardTitle>Software Engineer</IonCardTitle>
          <p>
            Now that your app has been created, you'll want to start building out features and
            components. Check out some of the resources below for next steps.
          </p>
        </IonCardContent>
      </IonCard>

    <IonCard className="welcome-card" routerLink="/tab2/eirgenjob">
        <img src="/assets/eirgen.jpg" alt="" />
        <IonCardContent>
        <IonCardSubtitle>Eir-Gen</IonCardSubtitle>
        <IonCardTitle>Software Engineer</IonCardTitle>
          <p>
            Now that your app has been created, you'll want to start building out features and
            components. Check out some of the resources below for next steps.
          </p>
        </IonCardContent>
      </IonCard>

      <IonCard className="welcome-card" routerLink="/tab2/westjob">
        <img src="/assets/West.jpg" alt="" />
        <IonCardContent>
        <IonCardSubtitle>West</IonCardSubtitle>
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

export default EngineeringSector;