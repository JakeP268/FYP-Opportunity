import React, { useState, useContext } from "react";
import {
  IonLoading,
  IonIcon,
  IonButtons,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import { logoutUser } from "../../firebaseSetup";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { logOutOutline } from "ionicons/icons";
import CardEducationItem from "../../components/CrudCards/EducationItem";
import ExperienceItem from "../../components/CrudCards/ExperienceItem";
import ContactItem from "../../components/CrudCards/ContactItem";
import PreviewItem from "../../components/CrudCards/PreviewItem";
import SkillItem from "../../components/CrudCards/SkillItem";
import AboutItem from "../../components/CrudCards/AboutItem";
import ProfileAboutsContext from "../../data/profileAbouts-context";
import ProfileContactsContext from "../../data/profileContacts-context";
import ProfileEducationsContext from "../../data/profileEducations-context";
import ProfileExperiencesContext from "../../data/profileExperiences-context";
import ProfilePreviewsContext from "../../data/profilePreviews-context";
import ProfileSkillsContext from "../../data/profileSkills-context";

const Profile: React.FC = () => {
  const emailAddress = useSelector((state: any) => state.user.username);

  const [busy, setBusy] = useState(false);
  const history = useHistory();

  async function logout() {
    setBusy(true);
    await logoutUser();
    setBusy(false);
    history.replace("/");
  }

  //Grants access to the object managed inside of each of the created contexts, with their latest update.
  const profileAboutsCtx = useContext(ProfileAboutsContext);

  const profileContactsCtx = useContext(ProfileContactsContext);

  const profileEducationsCtx = useContext(ProfileEducationsContext);

  const profileExperiencesCtx = useContext(ProfileExperiencesContext);

  const profileSkillsCtx = useContext(ProfileSkillsContext);

  const profilePreviewsCtx = useContext(ProfilePreviewsContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{emailAddress}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={logout}>
              <IonIcon
                slot="icon-only"
                ios={logOutOutline}
                md={logOutOutline}
              ></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {profilePreviewsCtx.profilePreviews.map((preview) => (
              <IonCol key={preview.id} size-xs="12" size-md="6" offset-md="3">
                <PreviewItem title={preview.title} id={preview.id} />
              </IonCol>
            ))}
            {profileAboutsCtx.profileAbouts.map((about) => (
              <IonCol key={about.id} size-xs="12" size-md="6" offset-md="3">
                <AboutItem title={about.title} id={about.id} />
              </IonCol>
            ))}
            {profileEducationsCtx.profileEducations.map((education) => (
              <IonCol key={education.id} size-xs="12" size-md="6" offset-md="3">
                <CardEducationItem title={education.title} id={education.id} />
              </IonCol>
            ))}
            {profileSkillsCtx.profileSkills.map((skill) => (
              <IonCol key={skill.id} size-xs="12" size-md="6" offset-md="3">
                <SkillItem title={skill.title} id={skill.id} />
              </IonCol>
            ))}
            {profileExperiencesCtx.profileExperiences.map((experience) => (
              <IonCol
                key={experience.id}
                size-xs="12"
                size-md="6"
                offset-md="3"
              >
                <ExperienceItem title={experience.title} id={experience.id} />
              </IonCol>
            ))}
            {profileContactsCtx.profileContacts.map((contact) => (
              <IonCol key={contact.id} size-xs="12" size-md="6" offset-md="3">
                <ContactItem title={contact.title} id={contact.id} />
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton shape="round" routerLink="/search-profilePreview">
                View Profile
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonLoading message="Logging out.." duration={3000} isOpen={busy} />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
