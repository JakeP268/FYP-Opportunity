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

const PreviewItem: React.FC<{
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
          Within the Preview Card section you will be able to create a detailed
          card that will display within the Connections Search page along with
          the other user profiles. You will be able to add your{" "}
          <IonText color="primary">
            <b>Name</b>
          </IonText>
          , your{" "}
          <IonText color="primary">
            <b>Location</b>
          </IonText>{" "}
          of where you are currently, their type of{" "}
          <IonText color="primary">
            <b>Role</b>
          </IonText>
          , their{" "}
          <IonText color="primary">
            <b>Area</b>
          </IonText>{" "}
          for example computing or engineering etc. They can also enter the
          amount of{" "}
          <IonText color="primary">
            <b>Experience</b>
          </IonText>{" "}
          they have along with your current{" "}
          <IonText color="primary">
            <b>Status</b>
          </IonText>{" "}
          for example searching or emplued etc.
        </div>
      </IonCardContent>
      <IonFooter className="ion-text-right">
        <IonButton
          fill="clear"
          color="primary"
          routerLink={`/profileP/${props.id}`}
        >
          View
        </IonButton>
      </IonFooter>
    </IonCard>
  );
};

export default PreviewItem;
