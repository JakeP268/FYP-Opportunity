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
import { trash, create, readerOutline } from "ionicons/icons";

const EditableAboutItem: React.FC<{
  slidingRef: React.Ref<HTMLIonItemSlidingElement>;
  onStartDelete: () => void;
  onStartEdit: (event: React.MouseEvent) => void;
  name: string;
  rTitle: string;
  bio: string;
  interests: string;
  pr: string;
}> = (props) => {
  return (
    //IonItemSliding is the wrapper that allows the items to slide left and right.
    //Ref represents the closing of sliding item after being clicked
    <IonItemSliding ref={props.slidingRef}>
      {/*IonItemOptions places Delete and Edit button to the left(Delete) and right(Edit) hand side of the swipable item */}
      <IonItemOptions side="start">
        {/* The IonItemOption is the onClick button which holds the contents of the delete/edit.  */}
        <IonItemOption onClick={props.onStartDelete} color="danger">
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
      </IonItemOptions>
      <IonItem lines="none">
        <IonLabel className="ion-text-wrap">
          <IonCardContent>
            <h2>
              <IonText color="primary">Name</IonText>
            </h2>
            <h3>{props.name}</h3>
              <br />
              <h2>
              <IonText color="primary">Job Role</IonText>
            </h2>
            <h3>{props.rTitle}</h3>
              <br />
            <h2>
              <IonText color="primary">Bio</IonText>
            </h2>
            <h3> {props.bio}</h3>
              <br />
            <h2>
              <IonText color="primary">Area of interests</IonText>
            </h2>
            <h3>{props.interests}</h3>
          </IonCardContent>
          <IonItem slot="start" lines="none" href={props.pr} target="_blank">
            <IonIcon color="primary" icon={readerOutline} slot="start" />
            Portfolio Resume Link
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

export default EditableAboutItem;
