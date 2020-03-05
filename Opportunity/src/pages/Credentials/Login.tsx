import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonLoading } from '@ionic/react';
import { loginUser } from '../../firebaseSetup'
import { toast } from '../../toast';
import { Link, useHistory } from 'react-router-dom';
import { setUserState } from '../../redux/actions';
import { useDispatch } from 'react-redux'

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)
  const history = useHistory()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

   async function login() {
     setBusy(true)
        const res: any = await loginUser(username, password)
        if (res) {
          dispatch(setUserState(res.user.email))
          history.replace('/Tab1')
          toast('You have logged in Sucesfully!')
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
      <IonLoading message='Please Wait..' duration={0} isOpen={busy}/>
      <IonContent className="ion-padding">
          <IonInput 
          placeholder="Username?" 
          onIonChange={(e: any) => setUsername(e.target.value)}
          />

          <IonInput 
          type="password"
          placeholder="Password?" 
          onIonChange={(e: any) => setPassword(e.target.value)}
          />

          <IonButton onClick={login}>Login</IonButton>

          <p>
            New here? <Link to="/register">Register</Link>
          </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;