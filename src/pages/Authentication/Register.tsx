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
  IonIcon,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { toast } from "../../toast";
import { registerUser } from "../../firebaseSetup";
import { mail, lockClosed } from "ionicons/icons";

const Register: React.FC = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [busy, setBusy] = useState<boolean>(false);

  //validating registration for user account
  async function register() {
    setBusy(true);
    //if passwords do not match 
    if (password !== cpassword) {
      return toast("Both passwords you have entered do not match");
    }
    //if emailAddress and password results are not met 
    if (emailAddress.trim() === "" || password.trim() === "") {
      return toast("Email address and password are both required");
    }
    //If credentials are met, registration result will be successful.
    const res = await registerUser(emailAddress, password);
    if (res) {
      toast("You have registered successfully!");
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
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
            <IonLoading
              message="Registration in progress.."
              duration={0}
              isOpen={busy}
            />
            <IonCol size-xs="12" size-md="6" offset-md="3">
              <IonItem>
                <IonIcon color="primary" icon={mail} slot="start" />
                <IonInput
                  placeholder="Add email address"
                  onIonChange={(e: any) => setEmailAddress(e.target.value)}
                />
              </IonItem>
            </IonCol>
            <IonCol size-xs="12" size-md="6" offset-md="3">
              <IonItem>
                <IonIcon color="primary" icon={lockClosed} slot="start" />
                <IonInput
                  type="password"
                  placeholder="Add password"
                  onIonChange={(e: any) => setPassword(e.target.value)}
                />
              </IonItem>
            </IonCol>
            <IonCol size-xs="12" size-md="6" offset-md="3">
              <IonItem>
                <IonIcon color="primary" icon={lockClosed} slot="start" />
                <IonInput
                  type="password"
                  placeholder="Confirm Password"
                  onIonChange={(e: any) => setCPassword(e.target.value)}
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
              <IonButton shape="round" fill="outline" onClick={register}>Register</IonButton>
              <p>
                Already have an account? <Link color="primary" to="/">Login</Link>
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
