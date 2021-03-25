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
import EditAboutModal from "../../components/profileModal/EditAboutModal";
import EditableAboutItem from "../../components/EditSlideFeature/EditableAboutItem";
import ProfileAboutsContext from "../../data/profileAbouts-context";

const ProfileAbout: React.FC = () => {
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [selectedAbout, setSelectedAbout] = useState();

  const profileAboutsCtx = useContext(ProfileAboutsContext);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const selectedAboutIdRef = useRef<string | null>(null);

  const selectedProfileId = useParams<{ profileAboutId: string }>()
    .profileAboutId;

  const selectedProfile = profileAboutsCtx.profileAbouts.find(
    (p) => p.id === selectedProfileId
  );

  //Function for displaying delete Alert
  const startDeleteAboutContentHandler = (aboutId: string) => {
    setToastMessage("");
    setStartedDeleting(true);
    selectedAboutIdRef.current = aboutId;
  };

  //Function that deletes content if yes is selected along with toast message displayed to confirm deletion.
  const deleteAboutContentHandler = () => {
    setStartedDeleting(false);
    profileAboutsCtx.deleteAboutContent(
      selectedProfileId,
      selectedAboutIdRef.current!
    );
    setToastMessage("Deleted About information!");
  };

  //Function for Edit swipe button and for edititing pre existing content
  const startEditAboutContentHandler = (
    aboutId: string,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    const about = selectedProfile?.abouts.find((a) => a.id === aboutId);
    slidingOptionsRef.current?.closeOpened();
    if (!about) {
      return;
    }
    setIsEditingAbout(true);
    setSelectedAbout(about);
  };

  //Cancel and close Add/Edit function when cancel button is selected inside of the modal
  const cancelEditAboutContentHandler = () => {
    setIsEditingAbout(false);
    setSelectedAbout(null);
  };

  //Add content function which is triggered when clicking the add content button
  const startAddAboutContentHandler = () => {
    setIsEditingAbout(true);
    setSelectedAbout(null);
  };


  //save Add/Edit inputted modal content
  const saveAboutContentHandler = (
    name: string,
    rTitle: string,
    bio: string,
    interests: string,
    pr: string
  ) => {
    if (selectedAbout) {
      profileAboutsCtx.updateAboutContent(
        selectedProfileId,
        selectedAbout.id,
        name,
        rTitle,
        bio,
        interests,
        pr
      );
    } else {
      profileAboutsCtx.addAboutContent(
        selectedProfileId,
        name,
        rTitle,
        bio,
        interests,
        pr
      );
    }
    setIsEditingAbout(false);
  };

  return (
    <React.Fragment>
      {/* Calls profileModal component to allow the user to display the add/edit modal on screen if true. */}
      <EditAboutModal
        show={isEditingAbout}
        onCancel={cancelEditAboutContentHandler}
        onSave={saveAboutContentHandler}
        //ignore error selects edited modal content
        editedAbout={selectedAbout}
      />

      {/* Places a toast message if user selects Yes to delete information */}
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
      />
      {/* Pop up Alert message once delete button is clicked to start Deleting if state is true.
      If user selects No the deletion will cancel if user selects yes content will be deleted. */}
      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure?"
        message="Do you wish to delete your about information? If so then click Yes or click No if you do not."
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
            handler: deleteAboutContentHandler,
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
            {/* Desktop add content button will appear if an Android device is not rendered. */}
            {/* isPlatform function checks if the application is running on a specific platform. */}
            {/* Depending on the platform the user is using a different button will appear. */}
            {!isPlatform("android") && (
              <IonButtons slot="end">
                {/* Calling the startAddAboutContentHandler function, once the onClick listener containg the prop is triggered. */}
                <IonButton onClick={startAddAboutContentHandler}>
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
                {selectedProfile.abouts.map((About) => (
                  <EditableAboutItem
                    key={About.id}
                    slidingRef={slidingOptionsRef}
                    name={About.name}
                    rTitle={About.rTitle}
                    bio={About.bio}
                    interests={About.interests}
                    pr={About.pr}
                    onStartDelete={startDeleteAboutContentHandler.bind(
                      null,
                      About.id
                    )}
                    onStartEdit={startEditAboutContentHandler.bind(
                      null,
                      About.id
                    )}
                  />
                ))}
              </IonList>
            )}
          </IonCard>
          {/* Android add content fab button  */}
          {/* isPlatform function checks if the application is running on a specific platform. */}
          {/* Depending on the platform the user is using a different button will appear. */}
          {isPlatform("android") && (
            // Fixed Fab Button to reprsent android devices
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton
                color="primary"
                onClick={startAddAboutContentHandler}
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

export default ProfileAbout;
