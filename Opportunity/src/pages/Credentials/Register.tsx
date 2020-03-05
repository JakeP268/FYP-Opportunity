import React, { useState, useEffect } from 'react';
import { IonContent, IonLoading, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/react';
import { Link } from 'react-router-dom';
import { toast } from '../../toast';
import { registerUser } from '../../firebaseSetup'

const Register: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')


    async function register() {
      setBusy(true)
        if(password !== cpassword) {
          return toast('Please match the above password credentilas you have entered')
        }
        if(username.trim() === '' || password.trim() === '') {
          return toast('You must enter a username and password!')
        }

        const res = await registerUser(username, password)
        if(res) {
          toast('Registration is Successful')
        }
        setBusy(false)
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Opportunity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLoading message='Registration in progress' duration={0} isOpen={busy}/>
          <IonInput 
          placeholder="Username?" 
          onIonChange={(e: any)=> setUsername(e.target.value)}
          />

          <IonInput
          type="password"
          placeholder="Password?" 
          onIonChange={(e: any)=> setPassword(e.target.value)}
          />

          <IonInput
          type="password"
          placeholder="Confirm Password?" 
          onIonChange={(e: any)=> setCPassword(e.target.value)}
          />

          <IonButton onClick={register}>Register</IonButton>

          <p>Already have an account? <Link to="/login">Login</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;