import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonFooter,
  IonText,
} from "@ionic/react";
import "./font.css";

const ContactItem: React.FC<{
  title: string;
  id: string;
}> = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle className="font">{props.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="ion-text-justify">
          Within the Contact section of your profile you will be able to give a
          breif{" "}
          <IonText color="primary">
            <b>Description</b>
          </IonText>{" "}
          on how other users/empoyers may be able to contact you. Below this
          then you will add such contact information in the form of your{" "}
          <IonText color="primary">
            <b>Email</b>
          </IonText>{" "}
          and{" "}
          <IonText color="primary">
            <b>Contact Number</b>
          </IonText>
          .
        </div>
      </IonCardContent>
      <IonFooter className="ion-text-right">
        <IonButton
          fill="clear"
          color="primary"
          routerLink={`/profileC/${props.id}`}
        >
          View
        </IonButton>
      </IonFooter>
    </IonCard>
  );
};

export default ContactItem;
