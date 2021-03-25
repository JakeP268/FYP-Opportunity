import React, { useState } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonInput,
  IonButton,
  IonLoading,
  IonItem,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../../firebaseSetup";
import { toast } from "../../toast";
import { setUserState } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { mail, lockClosed } from "ionicons/icons";
import "./Auth.scss";
const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  //login function with emailAddress and password
  async function login() {
    setBusy(true);
    const res: any = await loginUser(emailAddress, password);
    if (res) {
      console.log(res);
      dispatch(setUserState(res.user.email));
      history.replace("/tabs/about");
      toast("You have logged in!");
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* Loading prompt when login is succesful. */}
      <IonLoading message="Please wait.." duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol
              className="ion-text-center"
              size-xs="12"
              size-md="6"
              offset-md="3"
            >
              <img src="assets/img/Pink3.png" alt=""/>
            </IonCol>
            <IonCol size-xs="12" size-md="6" offset-md="3">
              <IonItem>
                <IonIcon color="primary" icon={mail} slot="start" />
                <IonInput
                  placeholder="Enter email address"
                  onIonChange={(e: any) => setEmailAddress(e.target.value)}
                />
              </IonItem>
            </IonCol>
            <IonCol size-xs="12" size-md="6" offset-md="3">
              <IonItem>
                <IonIcon color="primary" icon={lockClosed} slot="start" />
                <IonInput
                  type="password"
                  placeholder="Enter password"
                  onIonChange={(e: any) => setPassword(e.target.value)}
                />
              </IonItem>{" "}
            </IonCol>
            <IonCol
              className="ion-text-center"
              size-xs="12"
              size-md="6"
              offset-md="3"
            >
              <br />
              <IonButton shape="round" fill="outline" onClick={login}>Login</IonButton>
              <p>
                New to Opportunity? <Link color="primary" to="/register">Register</Link>
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
