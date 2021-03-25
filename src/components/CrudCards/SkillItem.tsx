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

const SkillItem: React.FC<{
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
          Within the Skills section you will be able to add and display{" "}
          <IonText color="primary">
            <b>skills</b>
          </IonText>{" "}
          that you believe will help make you stand out from others. You can add
          skills ranging from character and technical depending on what you
          believe is more important to display on your profile for others to
          see.
        </div>
      </IonCardContent>
      <IonFooter className="ion-text-right">
        <IonButton
          fill="clear"
          color="primary"
          routerLink={`/profileS/${props.id}`}
        >
          View
        </IonButton>
      </IonFooter>
    </IonCard>
  );
};

export default SkillItem;
