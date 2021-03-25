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
import EditPreviewModal from "../../components/profileModal/EditPreviewModal";
import EditablePreviewItem from "../../components/EditSlideFeature/EditablePreviewItem";
import ProfilePreviewsContext from "../../data/profilePreviews-context";

const ProfilePreview: React.FC = () => {
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditingPreview, setIsEditingPreview] = useState(false);
  const [selectedPreview, setSelectedPreview] = useState();

  const profilePreviewsCtx = useContext(ProfilePreviewsContext);

  //Fuction to close sliding items after use.
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const selectedProfileId = useParams<{ profilePreviewId: string }>()
    .profilePreviewId;
  const selectedPreviewIdRef = useRef<string | null>(null);

  const selectedProfile = profilePreviewsCtx.profilePreviews.find(
    (p) => p.id === selectedProfileId
  );

  const startDeletePreviewHandler = (previewId: string) => {
    setToastMessage("");
    setStartedDeleting(true);
    selectedPreviewIdRef.current = previewId;
  };

  const deletePreviewContentHandler = () => {
    setStartedDeleting(false);
    profilePreviewsCtx.deletePreviewContent(
      selectedProfileId,
      selectedPreviewIdRef.current!
    );
    setToastMessage("Deleted Preview!");
  };

  const startEditPreviewContentHandler = (
    previewId: string,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    const preview = selectedProfile?.previews.find((s) => s.id === previewId);
    //closing sliding item
    slidingOptionsRef.current?.closeOpened();
    if (!preview) {
      return;
    }
    setIsEditingPreview(true);
    setSelectedPreview(preview);
  };

  const cancelEditPreviewContentHandler = () => {
    setIsEditingPreview(false);
    setSelectedPreview(null);
  };

  const startAddPreviewContentHandler = () => {
    setIsEditingPreview(true);
    setSelectedPreview(null);
  };

  const savePreviewContentHandler = (
    name: string,
    role: string,
    location: string,
    exp: string,
    status: string
  ) => {
    if (selectedPreview) {
      profilePreviewsCtx.updatePreviewContent(
        selectedProfileId,
        selectedPreview.id,
        name,
        role,
        location,
        exp,
        status
      );
    } else {
      profilePreviewsCtx.addPreviewContent(
        selectedProfileId,
        name,
        role,
        location,
        exp,
        status
      );
    }
    setIsEditingPreview(false);
  };

  return (
    <React.Fragment>
      <EditPreviewModal
        show={isEditingPreview}
        onCancel={cancelEditPreviewContentHandler}
        onSave={savePreviewContentHandler}
        //ignore error
        editedUserPreview={selectedPreview}
      />
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
      />
      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure?"
        message="Do you wish to delete your Preview Card from your profile? If so then click Yes or click No if you do not."
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
            handler: deletePreviewContentHandler,
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
                <IonButton onClick={startAddPreviewContentHandler}>
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
                {selectedProfile.previews.map((Preview) => (
                  <EditablePreviewItem
                    key={Preview.id}
                    slidingRef={slidingOptionsRef}
                    name={Preview.name}
                    role={Preview.role}
                    location={Preview.location}
                    exp={Preview.exp}
                    status={Preview.status}
                    onStartDelete={startDeletePreviewHandler.bind(
                      null,
                      Preview.id
                    )}
                    onStartEdit={startEditPreviewContentHandler.bind(
                      null,
                      Preview.id
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
                onClick={startAddPreviewContentHandler}
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

export default ProfilePreview;
