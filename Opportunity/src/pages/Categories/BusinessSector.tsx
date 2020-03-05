import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonButtons, IonBackButton } from '@ionic/react';

const BusinessSector: React.FC = () => {
  return (
<IonPage>
    <IonHeader>
      <IonToolbar>
      <IonButtons slot="start">
          <IonBackButton defaultHref="/tab2" />
        </IonButtons>
        <IonTitle>Business Feed</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard className="welcome-card" routerLink="/tab2/esbjob">
        <img src="/assets/bendunne.jpg" alt="" />
        <IonCardContent>
        <IonCardSubtitle>Ben Dunne</IonCardSubtitle>
        <IonCardTitle>Software Engineer</IonCardTitle>
          <p>
            Now that your app has been created, you'll want to start building out features and
            components. Check out some of the resources below for next steps.
          </p>
        </IonCardContent>
      </IonCard>

      <IonCard className="welcome-card" routerLink="/tab2/mercedesjob">
        <img src="/assets/merc.jpg" alt="" />
        <IonCardContent>
        <IonCardSubtitle>mercedesjob</IonCardSubtitle>
        <IonCardTitle>Software Engineer</IonCardTitle>
          <p>
            Now that your app has been created, you'll want to start building out features and
            components. Check out some of the resources below for next steps.
          </p>
        </IonCardContent>
      </IonCard>

      <IonCard className="welcome-card" routerLink="/tab2/pwcjob">
        <img src="/assets/pwc.jpg" alt="" />
        <IonCardContent>
        <IonCardSubtitle>pwc</IonCardSubtitle>
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

export default BusinessSector;