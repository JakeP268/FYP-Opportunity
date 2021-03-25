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

const EditPreviewModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (
    previewName: string,
    previewRole: string,
    previewLocation: string,
    previewExp: string,
    previewStatus: string
  ) => void;
  editedUserPreview: {
    id: string;
    name: string;
    role: string;
    location: string;
    exp: string;
    status: string;
  } | null;
}> = (props) => {
  const [error, setError] = useState("");

  const nameRef = useRef<HTMLIonInputElement>(null);
  const roleRef = useRef<HTMLIonInputElement>(null);
  const locationRef = useRef<HTMLIonInputElement>(null);
  const expRef = useRef<HTMLIonInputElement>(null);
  const statusRef = useRef<HTMLIonInputElement>(null);

  const saveHandler = () => {
    const enteredName = nameRef.current!.value;
    const enteredRole = roleRef.current!.value;
    const enteredLocation = locationRef.current!.value;
    const enteredExp = expRef.current!.value;
    const enteredStatus = statusRef.current!.value;

    if (
      !enteredName ||
      !enteredRole ||
      !enteredLocation ||
      !enteredExp ||
      !enteredStatus ||
      enteredName.toString().trim().length === 0 ||
      enteredRole.toString().trim().length === 0 ||
      enteredLocation.toString().trim().length === 0 ||
      enteredExp.toString().trim().length === 0 ||
      enteredStatus.toString().trim().length === 0
    ) {
      setError(
        "Please enter your preview information correctly as instructed!"
      );
      return;
    }
    setError("");

    props.onSave(
      enteredName.toString(),
      enteredRole.toString(),
      enteredLocation.toString(),
      enteredExp.toString(),
      enteredStatus.toString()
    );
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {props.editedUserPreview ? "Update" : "Create"} Card Preview
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your name</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedUserPreview?.name}
                  ref={nameRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your role</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedUserPreview?.role}
                  ref={roleRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your location</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedUserPreview?.location}
                  ref={locationRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your experience</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedUserPreview?.exp}
                  ref={expRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your status</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedUserPreview?.status}
                  ref={statusRef}
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

export default EditPreviewModal;
