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
import EditSkillModal from "../../components/profileModal/EditSkillModal";
import EditableSkillItem from "../../components/EditSlideFeature/EditableSkillItem";
import ProfileSkillsContext from "../../data/profileSkills-context";

const ProfileSkill: React.FC = () => {
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditingSkill, setIsEditingSkill] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState();

  const profileSkillsCtx = useContext(ProfileSkillsContext);

  //Fuction to close sliding items after use.
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const selectedProfileId = useParams<{ profileSkillId: string }>()
    .profileSkillId;
  const selectedSkillIdRef = useRef<string | null>(null);

  const selectedProfile = profileSkillsCtx.profileSkills.find(
    (p) => p.id === selectedProfileId
  );

  const startDeleteSkillHandler = (skillId: string) => {
    setToastMessage("");
    setStartedDeleting(true);
    selectedSkillIdRef.current = skillId;
  };

  const deleteSkillContentHandler = () => {
    setStartedDeleting(false);
    profileSkillsCtx.deleteSkillContent(
      selectedProfileId,
      selectedSkillIdRef.current!
    );
    setToastMessage("Deleted Skill!");
  };

  const startEditSkillContentHandler = (
    skillId: string,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    const skill = selectedProfile?.skills.find((s) => s.id === skillId);
    //closing sliding item
    slidingOptionsRef.current?.closeOpened();
    if (!skill) {
      return;
    }
    setIsEditingSkill(true);
    setSelectedSkill(skill);
  };

  const cancelEditSkillContentHandler = () => {
    setIsEditingSkill(false);
    setSelectedSkill(null);
  };

  const startAddSkillContentHandler = () => {
    setIsEditingSkill(true);
    setSelectedSkill(null);
  };

  const saveSkillContentHandler = (item: string) => {
    if (selectedSkill) {
      profileSkillsCtx.updateSkillContent(
        selectedProfileId,
        selectedSkill.id,
        item
      );
    } else {
      profileSkillsCtx.addSkillContent(selectedProfileId, item);
    }
    setIsEditingSkill(false);
  };

  return (
    <React.Fragment>
      <EditSkillModal
        show={isEditingSkill}
        onCancel={cancelEditSkillContentHandler}
        onSave={saveSkillContentHandler}
        //ignore error
        editedUserSkill={selectedSkill}
      />
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
      />
      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure?"
        message="Do you wish to delete this skill? If so then click Yes or click No if you do not."
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
            handler: deleteSkillContentHandler,
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
                <IonButton onClick={startAddSkillContentHandler}>
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
                {selectedProfile.skills.map((Skill) => (
                  <EditableSkillItem
                    key={Skill.id}
                    slidingRef={slidingOptionsRef}
                    item={Skill.item}
                    onStartDelete={startDeleteSkillHandler.bind(null, Skill.id)}
                    onStartEdit={startEditSkillContentHandler.bind(
                      null,
                      Skill.id
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
                onClick={startAddSkillContentHandler}
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

export default ProfileSkill;
