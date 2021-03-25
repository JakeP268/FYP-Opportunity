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
import { trash, create } from "ionicons/icons";

const EditablePreviewItem: React.FC<{
  slidingRef: React.Ref<HTMLIonItemSlidingElement>;
  onStartDelete: () => void;
  onStartEdit: (event: React.MouseEvent) => void;
  name: string;
  role: string;
  location: string;
  exp: string;
  status: string;
}> = (props) => {
  return (
    <IonItemSliding ref={props.slidingRef}>
      <IonItemOptions side="start">
        <IonItemOption onClick={props.onStartDelete} color="danger">
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
      </IonItemOptions>
      <IonItem lines="full">
        <IonLabel className="ion-text-wrap">
          <IonCardContent>
            <h2>
              <IonText color="primary">Name</IonText>
            </h2>
            <h3>{props.name}</h3>
            <br />
            <h2>
              <IonText color="primary">Role</IonText>
            </h2>
            <h3>{props.role}</h3>
            <br />
            <h2>
              <IonText color="primary">Location</IonText>
            </h2>
            <h3>{props.location}</h3>
            <br />
            <h2>
              <IonText color="primary">Experience</IonText>
            </h2>
            <h3>{props.exp}</h3>
            <br />
            <h2>
              <IonText color="primary">Status</IonText>
            </h2>
            <h3>{props.status}</h3>
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

export default EditablePreviewItem;
