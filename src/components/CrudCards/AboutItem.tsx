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

const AboutItem: React.FC<{
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
          Within the About section of your profile you will add the following
          features to your profile which are as follows your full{" "}
          <IonText color="primary">
            <b>Name</b>
          </IonText>{" "}
          so that it is displayed front and center in the profile. A{" "}
          <IonText color="primary">
            <b>Bio</b>
          </IonText>{" "}
          about you as an indivudal which will help give insight to you as a
          person. Then an{" "}
          <IonText color="primary">
            <b>Area of Interests</b>
          </IonText>{" "}
          section where you will describe your particular interests and finally
          a{" "}
          <IonText color="primary">
            <b>Portfolio Resume Link</b>
          </IonText>
          , which can be a pdf link or a link to your online portfolio.{" "}
        </div>
      </IonCardContent>
      <IonFooter className="ion-text-right">
        <IonButton
          fill="clear"
          color="primary"
          routerLink={`/profileA/${props.id}`}
        >
          View
        </IonButton>
      </IonFooter>
    </IonCard>
  );
};

export default AboutItem;
