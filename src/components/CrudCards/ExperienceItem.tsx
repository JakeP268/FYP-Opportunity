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

const ExperienceItem: React.FC<{
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
          Within the Experience section you can display your prior work
          experience or projects you have done or been apart off to show off
          your capabilities. You will be able to add a{" "}
          <IonText color="primary">
            <b>title</b>
          </IonText>{" "}
          of the work/projects, the{" "}
          <IonText color="primary">
            <b>year(s)</b>
          </IonText>{" "}
          you where there or when you did the project and then a{" "}
          <IonText color="primary">
            <b>descpription</b>
          </IonText>{" "}
          of what you did in said work or project.
        </div>
      </IonCardContent>
      <IonFooter className="ion-text-right">
        <IonButton
          fill="clear"
          color="primary"
          routerLink={`/profileEX/${props.id}`}
        >
          View
        </IonButton>
      </IonFooter>
    </IonCard>
  );
};

export default ExperienceItem;
