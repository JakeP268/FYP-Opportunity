import React from "react";
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
import { useState, useRef } from "react";

const EditAboutModal: React.FC<{
  // show prop: This declares if the modal will be shown or not
  show: boolean;
  // onCancel prop: This function returns noting and is triggered if the cancel button is clicked.
  onCancel: () => void;
  //onSave prop: These paramaters should be passed forward to the function on the onSave prop.
  onSave: (
    aboutName: string,
    rTitle: string,
    aboutBio: string,
    aboutInterests: string,
    aboutPr: string
  ) => void;


  /* A new modal will appear if the Modal is Null(empty) which will prompt the Add Modal. 
  If the modal has prior information in it the Edit Modal will appear. */
  editedAbout: {
    id: string;
    name: string;
    rTitle: string;
    bio: string;
    interests: string;
    pr: string;
  } | null;

  // accepting props parameters
}> = (props) => {
  const [error, setError] = useState("");

  //Gathering values out of the inputted information by ref them
  const nameRef = useRef<HTMLIonInputElement>(null);
  const rTitleRef = useRef<HTMLIonInputElement>(null);
  const bioRef = useRef<HTMLIonTextareaElement>(null);
  const interestsRef = useRef<HTMLIonTextareaElement>(null);
  const prRef = useRef<HTMLIonInputElement>(null);

  const saveAboutContentHandler = () => {
    const enteredName = nameRef.current!.value;
    const enteredRTitle = rTitleRef.current!.value;
    const enteredBio = bioRef.current!.value;
    const enteredInterests = interestsRef.current!.value;
    const enteredPr = prRef.current!.value;

    //if content is not added to each of the input fields, then set error will occur until all content is full.
    if (
      !enteredName ||
      !enteredRTitle ||
      !enteredBio ||
      !enteredInterests ||
      !enteredPr ||
      enteredName.toString().trim().length === 0 ||
      enteredBio.toString().trim().length === 0 ||
      enteredInterests.toString().trim().length === 0 ||
      enteredPr.toString().trim().length === 0
    ) {
      //calling setError
      setError("Please enter the about information correctly as instructed!");
      return;
    }
    //clear past errors once appropiate content is filled.
    setError("");

    // calling onSave prop function which contains all inputted parameters 
    // that is then fowarded to the component that uses this modal (ProfileAbout)
    props.onSave(
      enteredName.toString(),
      enteredRTitle.toString(),
      enteredBio.toString(),
      enteredInterests.toString(),
      enteredPr.toString()
    );
  };

  return (
    //Calling the show prop which defines weather the modal is visable.
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {/* If prop is true then Edit will appear if not Add will appear. */}
            {props.editedAbout ? "Update" : "Create"} About Information
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your full name</IonLabel>
                {/* The IonInput component is a HTML input element which, that is used to allow content to be inputted.
                It is more fine tuned then a normal input so that it works for desktop devices and integrates with the keyboard on mobile devices */}
                <IonInput
                //type: holds what type of soft keyboard that will appear when running the application on mobile devices
                  type="text"
                  value={props.editedAbout?.name}
                  //connecting refs
                  ref={nameRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Role</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedAbout?.rTitle}
                  ref={rTitleRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your bio</IonLabel>
                <IonTextarea value={props.editedAbout?.bio} ref={bioRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your area of interests</IonLabel>
                <IonTextarea
                  value={props.editedAbout?.bio}
                  ref={interestsRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Your portfolio resume link
                </IonLabel>
                <IonInput
                  type="url"
                  value={props.editedAbout?.pr}
                  ref={prRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          {/* outputting setError if all content is not filled. */}
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
              {/* Cancel the modal once cancel prop buttton is clicked */}
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
                onClick={saveAboutContentHandler}
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

export default EditAboutModal;
