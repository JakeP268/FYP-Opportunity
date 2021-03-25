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

const EditEducationModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (
    educationTitle: string,
    educationCourse: string,
    educationYear: string
  ) => void;
  editedUserEducation: {
    id: string;
    title: string;
    course: string;
    year: string;
  } | null;
}> = (props) => {
  const [error, setError] = useState("");

  const titleRef = useRef<HTMLIonInputElement>(null);
  const courseRef = useRef<HTMLIonInputElement>(null);
  const yearRef = useRef<HTMLIonInputElement>(null);

  const saveHandler = () => {
    const enteredTitle = titleRef.current!.value;
    const enteredCourse = courseRef.current!.value;
    const enteredYear = yearRef.current!.value;

    if (
      !enteredTitle ||
      !enteredCourse ||
      !enteredYear ||
      enteredTitle.toString().trim().length === 0 ||
      enteredCourse.toString().trim().length === 0 ||
      enteredYear.toString().trim().length === 0
    ) {
      setError(
        "Please enter your education information correctly as instructed!"
      );
      return;
    }
    setError("");

    props.onSave(
      enteredTitle.toString(),
      enteredCourse.toString(),
      enteredYear.toString()
    );
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {props.editedUserEducation ? "Update" : "Create"} Educations
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Name of college/educator
                </IonLabel>
                <IonInput
                  type="text"
                  value={props.editedUserEducation?.title}
                  ref={titleRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Title of course</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedUserEducation?.course}
                  ref={courseRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Duration of course</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedUserEducation?.year}
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

export default EditEducationModal;
