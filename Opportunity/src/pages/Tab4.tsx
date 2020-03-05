import React from 'react';
import { IonList, IonIcon, IonItem, IonItemOption, IonItemOptions, IonLabel, IonItemSliding, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonButton } from '@ionic/react';

const Tab4Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList>
        <IonListHeader>
          Recent Conversations
        </IonListHeader>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>

    <IonButton shape="round">Submit CV</IonButton>
  </IonContent>
    </IonPage>
  );
};

export default Tab4Page;