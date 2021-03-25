import React, { useState, useRef } from "react";
import {
  IonModal,
  IonToolbar,
  IonTitle,
  IonContent,
  IonHeader,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
} from "@ionic/react";

const EditSkillModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (skillItem: string) => void;
  editedUserSkill: {
    id: string;
    item: string;
  } | null;
}> = (props) => {
  const [error, setError] = useState("");

  const itemRef = useRef<HTMLIonInputElement>(null);

  const saveHandler = () => {
    const enteredItem = itemRef.current!.value;

    if (!enteredItem || enteredItem.toString().trim().length === 0) {
      setError("Please enter your skills information correctly as instructed!");
      return;
    }
    setError("");

    props.onSave(enteredItem.toString());
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {props.editedUserSkill ? "Update" : "Create"} Skills
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Skill</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedUserSkill?.item}
                  ref={itemRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          {error && (
            <IonRow className="ion-text-center">
              <IonCol>
                <IonText color="danger">
                  <p>{error}</p>
                </IonText>
              </IonCol>
            </IonRow>
          )}
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton
                shape="round"
                expand="block"
                color="secondary"
                onClick={props.onCancel}
              >
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                shape="round"
                color="primary"
                expand="block"
                onClick={saveHandler}
              >
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default EditSkillModal;
