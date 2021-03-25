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

const EditContactModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (
    contactTitle: string,
    contactEmail: string,
    contactNumber: string
  ) => void;
  editedContact: {
    id: string;
    information: string;
    email: string;
    number: string;
  } | null;
}> = (props) => {
  const [error, setError] = useState("");

  const informationRef = useRef<HTMLIonTextareaElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const numberRef = useRef<HTMLIonInputElement>(null);

  const saveContactContentHandler = () => {
    const enteredInformation = informationRef.current!.value;
    const enteredEmail = emailRef.current!.value;
    const enteredNumber = numberRef.current!.value;

    if (
      !enteredInformation ||
      !enteredEmail ||
      !enteredNumber ||
      enteredInformation.toString().trim().length === 0 ||
      enteredEmail.toString().trim().length === 0 ||
      enteredNumber.toString().trim().length === 0
    ) {
      setError(
        "Please enter your Contact information correctly as instructed!"
      );
      return;
    }
    setError("");

    props.onSave(
      enteredInformation.toString(),
      enteredEmail.toString(),
      enteredNumber.toString()
    );
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {props.editedContact ? "Update" : "Create"} Contact Information
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Contact information</IonLabel>
                <IonTextarea
                  value={props.editedContact?.information}
                  ref={informationRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Email adresss</IonLabel>
                <IonInput
                  type="email"
                  value={props.editedContact?.email}
                  ref={emailRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Contact number</IonLabel>
                <IonInput
                  type="tel"
                  value={props.editedContact?.number}
                  ref={numberRef}
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
                onClick={saveContactContentHandler}
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

export default EditContactModal;
