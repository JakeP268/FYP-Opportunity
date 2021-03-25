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
  IonTextarea,
} from "@ionic/react";

const EditExperienceModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (
    experienceExTitle: string,
    experienceExPlace: string,
    experienceYear: string,
    experienceDescription: string
  ) => void;
  editedExperience: {
    id: string;
    exTitle: string;
    exPlace: string;
    year: string;
    description: string;
  } | null;
}> = (props) => {
  const [error, setError] = useState("");

  const exTitleRef = useRef<HTMLIonInputElement>(null);
  const exPlaceRef = useRef<HTMLIonInputElement>(null);
  const yearRef = useRef<HTMLIonInputElement>(null);
  const descriptionRef = useRef<HTMLIonTextareaElement>(null);

  const saveHandler = () => {
    const enteredExTitle = exTitleRef.current!.value;
    const enteredExPlace = exPlaceRef.current!.value;
    const enteredYear = yearRef.current!.value;
    const enteredDescription = descriptionRef.current!.value;

    if (
      !enteredExTitle ||
      !enteredExPlace ||
      !enteredYear ||
      !enteredDescription ||
      enteredExTitle.toString().trim().length === 0 ||
      enteredExPlace.toString().trim().length === 0 ||
      enteredYear.toString().trim().length === 0 ||
      enteredDescription.toString().trim().length === 0
    ) {
      setError(
        "Please enter your Experience information correctly as instructed!"
      );
      return;
    }
    setError("");

    props.onSave(
      enteredExTitle.toString(),
      enteredExPlace.toString(),
      enteredYear.toString(),
      enteredDescription.toString()
    );
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {props.editedExperience ? "Update" : "Create"} Experiences
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Title of experience</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedExperience?.exTitle}
                  ref={exTitleRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Description of the experience
                </IonLabel>
                <IonTextarea
                  value={props.editedExperience?.description}
                  ref={descriptionRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Place of experience</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedExperience?.exPlace}
                  ref={exPlaceRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Duration of experience</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedExperience?.year}
                  ref={yearRef}
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

export default EditExperienceModal;
