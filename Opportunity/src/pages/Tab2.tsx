import React from 'react';
import { IonSlides, IonSlide, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonTextarea, IonText, IonButton } from '@ionic/react';
import './Tab2.css'

const Tab2Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className = "ion-padding">

      <IonGrid>
      <IonRow>
      <IonCol>
      
      <IonSlides className="t2" pager={true}>
      
      <IonSlide className="t2">
      <div className="ion-text-start">
      <div className="a">Science</div>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Sed ac vehicula lorem.<br/>
        <IonButton shape="round" fill="outline" routerLink="/tab2/sciencesector">Search</IonButton>
      </div>
      </IonSlide>

      <IonSlide className="t2">
      <div className="ion-text-start">
      <div className="a">Engineering</div>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Sed ac vehicula lorem.<br/>
        <IonButton shape="round" fill="outline" routerLink="/tab2/engineeringsector">Search</IonButton>
      </div>
      </IonSlide>

      <IonSlide className="t2">
      <div className="ion-text-start">
      <div className="a">Business</div>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Sed ac vehicula lorem.<br/>
        <IonButton shape="round" fill="outline" routerLink="/tab2/businesssector">Search</IonButton>
      </div>
      </IonSlide>

      <IonSlide className="t2">
      <div className="ion-text-start">
      <div className="a">Graduate</div>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Sed ac vehicula lorem.<br/>
        <IonButton shape="round" fill="outline" routerLink="/tab2/graduatesector">Search</IonButton>
      </div>
  </IonSlide>

  <IonSlide className="t2">
      <div className="ion-text-start">
      <div className="a">Connections</div>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Sed ac vehicula lorem.<br/>
        <IonButton shape="round" fill="outline" routerLink="/tab2/connectionssector">Search</IonButton>
      </div>
  </IonSlide>

    </IonSlides>
    
    </IonCol>
      </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2Page;