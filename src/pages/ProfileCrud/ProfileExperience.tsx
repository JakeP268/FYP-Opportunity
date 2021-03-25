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
import EditExperienceModal from "../../components/profileModal/EditExperienceModal";
import EditableExperienceItem from "../../components/EditSlideFeature/EditableExperienceItem";
import ProfileExperiencesContext from "../../data/profileExperiences-context";

const ProfileExperience: React.FC = () => {
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState();

  const profileExperiencesCtx = useContext(ProfileExperiencesContext);

  //Fuction to close sliding items after use.
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const selectedExperienceIdRef = useRef<string | null>(null);

  const selectedProfileId = useParams<{ profileExperienceId: string }>()
    .profileExperienceId;

  const selectedProfile = profileExperiencesCtx.profileExperiences.find(
    (p) => p.id === selectedProfileId
  );

  const startDeleteExperienceContentHandler = (experienceId: string) => {
    setToastMessage("");
    setStartedDeleting(true);
    selectedExperienceIdRef.current = experienceId;
  };

  const deleteExperienceContentHandler = () => {
    setStartedDeleting(false);
    profileExperiencesCtx.deleteExperienceContent(
      selectedProfileId,
      selectedExperienceIdRef.current!
    );
    setToastMessage("Deleted Experience!");
  };

  const startEditExperienceContentHandler = (
    experienceId: string,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    const experience = selectedProfile?.experiences.find(
      (ex) => ex.id === experienceId
    );
    //closing sliding item
    slidingOptionsRef.current?.closeOpened();
    if (!experience) {
      return;
    }
    setIsEditingExperience(true);
    setSelectedExperience(experience);
  };

  const cancelEditExperienceContentHandler = () => {
    setIsEditingExperience(false);
    setSelectedExperience(null);
  };

  const startAddExperienceContentHandler = () => {
    setIsEditingExperience(true);
    setSelectedExperience(null);
  };

  const saveExperienceContentHandler = (
    exTitle: string,
    exPlace: string,
    year: string,
    description: string
  ) => {
    if (selectedExperience) {
      profileExperiencesCtx.updateExperienceContent(
        selectedProfileId,
        selectedExperience.id,
        exTitle,
        exPlace,
        year,
        description
      );
    } else {
      profileExperiencesCtx.addExperienceContent(
        selectedProfileId,
        exTitle,
        exPlace,
        year,
        description
      );
    }
    setIsEditingExperience(false);
  };

  return (
    <React.Fragment>
      <EditExperienceModal
        show={isEditingExperience}
        onCancel={cancelEditExperienceContentHandler}
        onSave={saveExperienceContentHandler}
        //ignore error
        editedExperience={selectedExperience}
      />
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
      />
      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure?"
        message="Do you wish to delete this piece of Experince? If so then click Yes or click No if you do not."
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
            handler: deleteExperienceContentHandler,
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
                <IonButton onClick={startAddExperienceContentHandler}>
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
                {selectedProfile.experiences.map((Experience) => (
                  <EditableExperienceItem
                    key={Experience.id}
                    slidingRef={slidingOptionsRef}
                    exTitle={Experience.exTitle}
                    exPlace={Experience.exPlace}
                    year={Experience.year}
                    description={Experience.description}
                    onStartDelete={startDeleteExperienceContentHandler.bind(
                      null,
                      Experience.id
                    )}
                    onStartEdit={startEditExperienceContentHandler.bind(
                      null,
                      Experience.id
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
                onClick={startAddExperienceContentHandler}
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

export default ProfileExperience;
