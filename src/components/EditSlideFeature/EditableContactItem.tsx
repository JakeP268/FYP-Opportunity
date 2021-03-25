import React from "react";
import {
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonItem,
  IonIcon,
  IonLabel,
  IonCardContent,
  IonText,
} from "@ionic/react";
import { trash, create, mail, phonePortrait } from "ionicons/icons";

const EditableContactItem: React.FC<{
  slidingRef: React.Ref<HTMLIonItemSlidingElement>;
  onStartDelete: () => void;
  onStartEdit: (event: React.MouseEvent) => void;
  information: string;
  email: string;
  number: string;
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
              <IonText color="primary">Contact Information</IonText>
            </h2>
            <h3>{props.information}</h3>
          </IonCardContent>
          <IonItem slot="start" lines="full" href={`mailto:${props.email}`}>
            <IonIcon icon={mail} slot="start" />
            {props.email}
          </IonItem>
          <IonItem slot="start" lines="full" href={`tel:+${props.number}`}>
            <IonIcon icon={phonePortrait} slot="start" />
            {props.number}
          </IonItem>
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

export default EditableContactItem;
