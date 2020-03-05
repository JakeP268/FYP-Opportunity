import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonButtons, IonBackButton } from '@ionic/react';

const ConnectionsSector: React.FC = () => {
  return (
<IonPage>
    <IonHeader>
      <IonToolbar>
      <IonButtons slot="start">
          <IonBackButton defaultHref="/tab2" />
        </IonButtons>
        <IonTitle>Connections Feed</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>

    <IonCard className="welcome-card" routerLink="/tab1/googlejob">
        <img src="/assets/google.jpg" alt="" />
        <IonCardContent>
        <IonCardSubtitle>Arthur Morgan</IonCardSubtitle>
        <IonCardTitle>Software Engineer</IonCardTitle>
          <p>
            Now that your app has been created, you'll want to start building out features and
            components. Check out some of the resources below for next steps.
          </p>
        </IonCardContent>
      </IonCard>

    <IonCard className="welcome-card" routerLink="/tab1/microsoftjob">
        <img src="/assets/microsoft.png" alt="" />
        <IonCardContent>
        <IonCardSubtitle>John Marstin</IonCardSubtitle>
        <IonCardTitle>Software Engineer</IonCardTitle>
          <p>
            Now that your app has been created, you'll want to start building out features and
            components. Check out some of the resources below for next steps.
          </p>
        </IonCardContent>
      </IonCard>

      <IonCard className="welcome-card">
        <img src="/assets/discord.png" alt="" />
        <IonCardContent>
        <IonCardSubtitle>Dell</IonCardSubtitle>
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

export default ConnectionsSector;