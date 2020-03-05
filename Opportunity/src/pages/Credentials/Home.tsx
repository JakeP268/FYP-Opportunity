import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const HomePage: React.FC = () => {
    const [input, setInput] = useState<string>('')

    useEffect( () => {
        console.log(input)
    }, [input])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Opportunity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonButton routerLink="/login">Login</IonButton>
          <IonButton routerLink="/register">Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;