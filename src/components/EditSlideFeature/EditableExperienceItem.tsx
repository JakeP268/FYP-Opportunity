import React from "react";
import {
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonItem,
  IonIcon,
  IonLabel,
  IonText,
  IonCardContent,
} from "@ionic/react";
import { trash, create } from "ionicons/icons";

const EditableExperienceItem: React.FC<{
  slidingRef: React.Ref<HTMLIonItemSlidingElement>;
  onStartDelete: () => void;
  onStartEdit: (event: React.MouseEvent) => void;
  exTitle: string;
  exPlace: string;
  year: string;
  description: string;
}> = (props) => {
  return (
    //IonItemSliding is the wrapper that allows the items to slide left and right.
    //Ref represents the closing of sliding item after being clicked
    <IonItemSliding ref={props.slidingRef}>
      {/*IonItemOptions places Delete and Edit button to the left and right hand side of the swipable item */}
      <IonItemOptions side="start">
        {/* The IonItemOption holds the contents of each button delete/edit.  */}
        <IonItemOption onClick={props.onStartDelete} color="danger">
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
      </IonItemOptions>
      <IonItem lines="full">
        <IonLabel className="ion-text-wrap">
          <IonCardContent>
            <h2>
              <IonText color="primary">Title of Experience</IonText>
            </h2>
            <h3>{props.exTitle}</h3>
            <br />
            <h2>
              <IonText color="primary">Description of Experience</IonText>
            </h2>
            <h3>{props.description}</h3>
            <br/>
            <h2>
              <IonText color="primary">Place of Experience & Duration</IonText>
            </h2>
            <h3>{props.exPlace}: {props.year}</h3>
          </IonCardContent>
        </IonLabel>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={props.onStartEdit}>
          <IonIcon slot="icon-only" icon={create} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default EditableExperienceItem;
