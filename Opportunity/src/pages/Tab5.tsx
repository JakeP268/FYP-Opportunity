import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLoading, IonGrid, IonRow, IonCol, IonSlides, IonSlide, IonItem, IonText, IonLabel } from '@ionic/react';
import { logoutUser} from '../firebaseSetup'
import { useHistory } from 'react-router'
import { useState } from 'react';

const Tab5Page: React.FC = () => {
  const [busy, setBusy] = useState(false)
  const history = useHistory()

async function logout() {
  setBusy(true)
  await logoutUser()
  setBusy(false)
  history.replace('/')
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className = "ion-padding">
      <img className="m" src="/assets/microsoftp.png" alt="" />

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
    <h2>South County Business Park,</h2>
    <h2>Carmanhall and Leopardstown,</h2>
    <h2>Dublin</h2>
  </IonLabel>
  </div>
</IonItem>
<br></br>

<IonItem>
  <IonLabel>
    <IonText color="primary">
      <h2>Phone Number</h2>
    </IonText>
    <h2>+1-877-696-7786</h2>
  </IonLabel>
</IonItem>
<br></br>

<IonItem>
  <IonLabel>
    <IonText color="primary">
      <h2>E=mail</h2>
    </IonText>
    <h2>Microsoft@OutLook.com</h2>
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

<IonLoading message="Logging out..." duration={0} isOpen={busy}/>
        <IonButton onClick={logout}>Logout</IonButton>

</IonSlide>

</IonSlides>

</IonCol>
</IonRow>
</IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab5Page;