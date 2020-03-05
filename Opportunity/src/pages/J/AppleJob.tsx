import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonText, IonSlides, IonGrid, IonRow, IonCol, IonSlide, IonItem, IonLabel } from '@ionic/react';
import './Jobs.css';

const AppleJob: React.FC = () => {
  return (
<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Interactive Designer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <img className="m" src="/assets/apple.png" alt="" />

      <IonGrid>
      <IonRow>
      <IonCol>

      <IonSlides>

      <IonSlide>
      <IonItem lines="none"> 
        <div className="ion-text-start">
        <IonText color="primary">
        <h3>About</h3>
        </IonText>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
        </IonItem>

        <IonItem lines="none"> 
        <div className="ion-text-start">
        <IonText color="primary">
        <h4>Benifits</h4>
        </IonText>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </div>
        </IonItem>

        <IonItem lines="none"> 
        <div className="ion-text-start">
        <IonText color="primary">
        <h4>Salary</h4>
        </IonText>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </div>
        </IonItem>
        </IonSlide>

        <IonSlide>
          <IonItem lines="none"> 
        <div className="ion-text-start">
        <IonText color="primary">
        <h3 >Specification</h3>
        </IonText>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </div>
</IonItem>
<IonItem lines="none"> 
<div className="ion-text-start">
<IonText color="primary">
        <h4>Skills</h4>
        </IonText>    
  <ul>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
  </ul>
  </div>
  </IonItem>
</IonSlide>

<IonSlide>
<IonItem>
<div className="ion-text-start">
<IonText color="primary">
        <h3 >Contact</h3>
        </IonText>
      <IonLabel>
          <IonText color="primary">
            <h2>Address</h2>
          </IonText>
          <h2>Hollyhill Ln,</h2>
          <h2>Hollyhill Industrial Estate,</h2>
          <h2>Cork</h2>
        </IonLabel>
        </div>
      </IonItem>
      <br></br>

    <IonItem>
        <IonLabel>
          <IonText color="primary">
            <h2>Phone Number</h2>
          </IonText>
          <h2>1800-804-062</h2>
        </IonLabel>
      </IonItem>
      <br></br>

      <IonItem>
        <IonLabel>
          <IonText color="primary">
            <h2>E=mail</h2>
          </IonText>
          <h2>applet@icloud.com</h2>
        </IonLabel>
      </IonItem>
      <br></br>

      <IonItem>
        <IonLabel>
          <IonText color="primary">
            <h2>Opening Hours</h2>
          </IonText>
          <h2>Mon-Fri: 8AM-8PM</h2>
          <h2>Sat-Sun: 12PM-6PM</h2>
        </IonLabel>
      </IonItem>

</IonSlide>

</IonSlides>

      </IonCol>
      </IonRow>
</IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default AppleJob;