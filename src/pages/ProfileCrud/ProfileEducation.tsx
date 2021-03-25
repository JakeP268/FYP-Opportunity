import React, { useState, useRef, useContext } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonBackButton,
  IonList,
  IonButton,
  IonIcon,
  IonCard,
  IonFab,
  IonFabButton,
  isPlatform,
  IonAlert,
  IonToast,
} from "@ionic/react";
import { useParams } from "react-router-dom";

import { addOutline } from "ionicons/icons";
import EditEducationModal from "../../components/profileModal/EditEducationModal";
import EditableEducationItem from "../../components/EditSlideFeature/EditableEducationItem";
import ProfileEducationsContext from "../../data/profileEducations-context";

const ProfileEducation: React.FC = () => {
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState();

  const profileEducationsCtx = useContext(ProfileEducationsContext);

  //Fuction to close sliding items after use.
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const selectedEducationIdRef = useRef<string | null>(null);

  const selectedProfileId = useParams<{ profileEducationId: string }>()
    .profileEducationId;

  const selectedProfile = profileEducationsCtx.profileEducations.find(
    (p) => p.id === selectedProfileId
  );

  const startDeleteEducationContentHandler = (educationId: string) => {
    setToastMessage("");
    setStartedDeleting(true);
    selectedEducationIdRef.current = educationId;
  };

  const deleteEducationContentHandler = () => {
    setStartedDeleting(false);
    profileEducationsCtx.deleteEducationContent(
      selectedProfileId,
      selectedEducationIdRef.current!
    );
    setToastMessage("Deleted Education!");
  };

  const startEditEducationContentHandler = (
    educationId: string,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    const education = selectedProfile?.educations.find(
      (e) => e.id === educationId
    );
    //closing sliding item
    slidingOptionsRef.current?.closeOpened();
    if (!education) {
      return;
    }
    setIsEditingEducation(true);
    setSelectedEducation(education);
  };

  const cancelEditEducationContentHandler = () => {
    setIsEditingEducation(false);
    setSelectedEducation(null);
  };

  const startAddEducationContentHandler = () => {
    setIsEditingEducation(true);
    setSelectedEducation(null);
  };

  const saveEducationContentHandler = (
    title: string,
    course: string,
    year: string
  ) => {
    if (selectedEducation) {
      profileEducationsCtx.updateEducationContent(
        selectedProfileId,
        selectedEducation.id,
        title,
        course,
        year
      );
    } else {
      profileEducationsCtx.addEducationContent(
        selectedProfileId,
        title,
        course,
        year
      );
    }
    setIsEditingEducation(false);
  };

  return (
    <React.Fragment>
      <EditEducationModal
        show={isEditingEducation}
        onCancel={cancelEditEducationContentHandler}
        onSave={saveEducationContentHandler}
        //ignore error
        editedUserEducation={selectedEducation}
      />
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
      />
      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure?"
        message="Do you wish to delete this piece of your Education? If so then click Yes or click No if you do not."
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => {
              setStartedDeleting(false);
            },
          },
          {
            text: "Yes",
            handler: deleteEducationContentHandler,
          },
        ]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/profile/list" />
            </IonButtons>
            <IonTitle>
              {selectedProfile ? selectedProfile.title : "No course found!"}
            </IonTitle>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddEducationContentHandler}>
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            {selectedProfile && (
              <IonList>
                {selectedProfile.educations.map((Education) => (
                  <EditableEducationItem
                    key={Education.id}
                    slidingRef={slidingOptionsRef}
                    title={Education.title}
                    course={Education.course}
                    year={Education.year}
                    onStartDelete={startDeleteEducationContentHandler.bind(
                      null,
                      Education.id
                    )}
                    onStartEdit={startEditEducationContentHandler.bind(
                      null,
                      Education.id
                    )}
                  />
                ))}
              </IonList>
            )}
          </IonCard>
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton
                color="primary"
                onClick={startAddEducationContentHandler}
              >
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default ProfileEducation;
