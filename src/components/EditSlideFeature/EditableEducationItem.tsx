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

const EditableEducationItem: React.FC<{
  slidingRef: React.Ref<HTMLIonItemSlidingElement>;
  onStartDelete: () => void;
  onStartEdit: (event: React.MouseEvent) => void;
  title: string;
  course: string;
  year: string;
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
              <IonText color="primary">Education/Eduactor</IonText>
            </h2>
            <h3>{props.title}</h3>
            <br />
            <h2>
              <IonText color="primary">Course Name</IonText>
            </h2>
            <h3>{props.course}</h3>
            <br />
            <h2>
              <IonText color="primary">Date of Attendence</IonText>
            </h2>
            <h3>{props.year}</h3>
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

export default EditableEducationItem;
