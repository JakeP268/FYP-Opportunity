import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide } from '@ionic/react';
import './Tab3.css';

const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Opportunity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className = "ion-padding">
      <IonSlides className="t3" pager={true}>
      <IonSlide className = "t3">
          <img className = "info" src="/assets/icon/icon.png" alt="" />
          <h2><b>Discover</b></h2>
          <p>The
          is a practical preview of the ionic framework in action, 
          and a demonstration of proper code use.</p>
      </IonSlide>
      <IonSlide className = "t3">
      <img className = "info" src="/assets/icon/icon.png" alt="" />
          <h2><b>Benifits</b></h2>
          <p>The
          is a practical preview of the ionic framework in action, 
          and a demonstration of proper code use.</p>
      </IonSlide>
      <IonSlide className = "t3">
      <img className = "info" src="/assets/icon/icon.png" alt="" />
          <h2>Welcome to <b>Opportunity</b></h2>
          <p>The
          is a practical preview of the ionic framework in action, 
          and a demonstration of proper code use.</p>
      </IonSlide>
    </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
