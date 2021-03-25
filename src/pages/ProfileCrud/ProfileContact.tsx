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
import EditContactModal from "../../components/profileModal/EditContactModal";
import EditableContactItem from "../../components/EditSlideFeature/EditableContactItem";
import ProfileContactsContext from "../../data/profileContacts-context";

const ProfileContact: React.FC = () => {
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState();

  const profileContactsCtx = useContext(ProfileContactsContext);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const selectedContactIdRef = useRef<string | null>(null);

  const selectedProfileId = useParams<{ profileContactId: string }>()
    .profileContactId;

  const selectedProfile = profileContactsCtx.profileContacts.find(
    (p) => p.id === selectedProfileId
  );

  //Function for popping up delete Alert
  const startDeleteContactContentHandler = (contactId: string) => {
    setToastMessage("");
    setStartedDeleting(true);
    selectedContactIdRef.current = contactId;
  };

  //Function that deletes information
  const deleteContactContentHandler = () => {
    setStartedDeleting(false);
    profileContactsCtx.deleteContactContent(
      selectedProfileId,
      selectedContactIdRef.current!
    );
    setToastMessage("Deleted Contact information!");
  };

  //Function for Edit swipe button
  const startEditContactContentHandler = (
    contactId: string,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    const contact = selectedProfile?.contacts.find((c) => c.id === contactId);
    slidingOptionsRef.current?.closeOpened();
    if (!contact) {
      return;
    }
    setIsEditingContact(true);
    setSelectedContact(contact);
  };

  //Cancel Add/Edit
  const cancelEditContactContentHandler = () => {
    setIsEditingContact(false);
    setSelectedContact(null);
  };

  //Add information Button
  const startAddContactContentHandler = () => {
    setIsEditingContact(true);
    setSelectedContact(null);
  };

  const saveContactContentHandler = (information: string, email: string, number: string) => {
    if (selectedContact) {
      profileContactsCtx.updateContactContent(
        selectedProfileId,
        selectedContact.id,
        information, email, number
      );
    } else {
      profileContactsCtx.addContactContent(selectedProfileId, information, email, number);
    }
    setIsEditingContact(false);
  };

  return (
    <React.Fragment>
      {/* Calls component to allow the user to display the add/edit modal on screen. */}
      <EditContactModal
        show={isEditingContact}
        onCancel={cancelEditContactContentHandler}
        onSave={saveContactContentHandler}
        //ignore error
        editedContact={selectedContact}
      />

      {/* Places a toast message if user selects Yes to delete information */}
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
      />
      {/* Pop up Alert message once delete button is clicked to startDeleting. */}
      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure?"
        message="Do you wish to delete your Contact Information? If so then click Yes or click No if you do not."
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
            handler: deleteContactContentHandler,
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
            {/* IOS Add Button  */}
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddContactContentHandler}>
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
                  {selectedProfile.contacts.map((Contact) => (
                    <EditableContactItem
                      key={Contact.id}
                      slidingRef={slidingOptionsRef}
                      information={Contact.information}
                      email={Contact.email}
                      number={Contact.number}
                      onStartDelete={startDeleteContactContentHandler.bind(
                        null,
                        Contact.id
                      )}
                      onStartEdit={startEditContactContentHandler.bind(
                        null,
                        Contact.id
                      )}
                    />
                  ))}
                </IonList>
              )}
          </IonCard>
          {/* Android Add Fab Button  */}
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton
                color="primary"
                onClick={startAddContactContentHandler}
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

export default ProfileContact;
