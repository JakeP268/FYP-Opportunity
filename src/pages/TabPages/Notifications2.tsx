import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import React from "react";
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { heart, bookmark, send } from "ionicons/icons";
import { Link } from "react-router-dom";

const { PushNotifications } = Plugins;
const INITIAL_STATE = {
  pNotifications: [
    {
      id: "id",
      title: "Thank you for applying to the role of...",
      body:
        "We hope to get in touch with you soon about your application to inform you of a possible interview...",
    },
  ],
};

export class Notifications2 extends React.Component {
  state: any = {};
  props: any = {};
  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  push() {
    PushNotifications.register();

    PushNotifications.addListener(
      "registration",
      (token: PushNotificationToken) => {
        alert("Push registration success, token: " + token.value);
      }
    );

    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      (pNotification: PushNotification) => {
        let push = this.state.pNotifications;
        push.push({
          id: pNotification.id,
          title: pNotification.title,
          body: pNotification.body,
        });
        this.setState({
          pNotifications: push,
        });
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (pNotification: PushNotificationActionPerformed) => {
        let push = this.state.pNotifications;
        push.push({
          id: pNotification.notification.data.id,
          title: pNotification.notification.data.title,
          body: pNotification.notification.data.body,
        });
        this.setState({
          pNotifications: push,
        });
      }
    );
  }
  render() {
    const { pNotifications } = this.state;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>Push Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel>
                <h2>You have liked the Lauren Griffens profile...</h2>
                <p>To view the liked profile click on the foolowing link...</p>
                <p>
                  View:{" "}
                  <Link color="primary" to="/register">
                    liked profile
                  </Link>
                </p>
              </IonLabel>
              <IonIcon slot="end" icon={heart} />
            </IonItem>
            <IonItem>
              <IonLabel>
                <h2>You have bookmarked the following job...</h2>
                <p>To view the bookmarked job click on the following link...</p>
                <p>
                  View:{" "}
                  <Link color="primary" to="/register">
                    bookmarked job
                  </Link>
                </p>
              </IonLabel>
              <IonIcon slot="end" icon={bookmark} />
            </IonItem>
          </IonList>
          <IonList>
            {pNotifications &&
              pNotifications.map((push: any) => (
                <IonItem key={push.id}>
                  <IonLabel>
                    <h2>{push.title}</h2>
                    <p>{push.body}</p>
                  </IonLabel>
                  <IonIcon slot="end" icon={send} />
                </IonItem>
              ))}
          </IonList>
        </IonContent>
        <IonText className="ion-text-center">
          <IonButton shape="round" onClick={() => this.push()}>
            Register Push
          </IonButton>
        </IonText>{" "}
        <br />
      </IonPage>
    );
  }
}
export default Notifications2;
