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

const EducationItem: React.FC<{
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
          Within the Education section you are able to add your
          education/certificates you have acheived and display them to other
          users to show your qualifications. You will be able to enter the name
          of the{" "}
          <IonText color="primary">
            <b>college or educator</b>
          </IonText>{" "}
          depending if you wher completing an online course with a certificate.
          You will be able to then add then name of the{" "}
          <IonText color="primary">
            <b>course</b>
          </IonText>{" "}
          and the{" "}
          <IonText color="primary">
            <b>duration</b>
          </IonText>{" "}
          of the couse.
        </div>
      </IonCardContent>
      <IonFooter className="ion-text-right">
        <IonButton
          fill="clear"
          color="primary"
          routerLink={`/profileE/${props.id}`}
        >
          View
        </IonButton>
      </IonFooter>
    </IonCard>
  );
};

export default EducationItem;
