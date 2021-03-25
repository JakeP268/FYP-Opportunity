import React, { useContext } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonText,
} from "@ionic/react";

import ProfileAboutsContext from "../../data/profileAbouts-context";
import ProfileContactsContext from "../../data/profileContacts-context";
import ProfileEducationsContext from "../../data/profileEducations-context";
import ProfileExperiencesContext from "../../data/profileExperiences-context";
import ProfileSkillsContext from "../../data/profileSkills-context";
import {
  send,
  heart,
  bookmark,
  personAdd,
} from "ionicons/icons";
import { Link } from "react-router-dom";

const Notifications: React.FC = () => {
  const profileAboutCtx = useContext(ProfileAboutsContext);

  const abouts = profileAboutCtx.profileAbouts
    .map((profileAbout) => {
      return profileAbout.abouts.map((about) => {
        return { ...about, profileAboutTitle: profileAbout.title };
      });
    })
    .reduce((aboutArr, nestedAbouts) => {
      let updatedAboutArray = aboutArr;
      for (const about of nestedAbouts) {
        updatedAboutArray = updatedAboutArray.concat(about);
      }
      return updatedAboutArray;
    }, []);

  const profileEducationsCtx = useContext(ProfileEducationsContext);

  const educations = profileEducationsCtx.profileEducations
    .map((profileEducation) => {
      return profileEducation.educations.map((education) => {
        return { ...education, profileEducationTitle: profileEducation.title };
      });
    })
    .reduce((educationArr, nestedEducations) => {
      let updatedEducationArray = educationArr;
      for (const education of nestedEducations) {
        updatedEducationArray = updatedEducationArray.concat(education);
      }
      return updatedEducationArray;
    }, []);

  const profileExperiencesCtx = useContext(ProfileExperiencesContext);

  const experiences = profileExperiencesCtx.profileExperiences
    .map((profileExperience) => {
      return profileExperience.experiences.map((experience) => {
        return {
          ...experience,
          profileExperienceTitle: profileExperience.title,
        };
      });
    })
    .reduce((experienceArr, nestedExperiences) => {
      let updatedExperienceArray = experienceArr;
      for (const experience of nestedExperiences) {
        updatedExperienceArray = updatedExperienceArray.concat(experience);
      }
      return updatedExperienceArray;
    }, []);

  const profileSkillsCtx = useContext(ProfileSkillsContext);

  const skills = profileSkillsCtx.profileSkills
    .map((profileSkill) => {
      return profileSkill.skills.map((skill) => {
        return { ...skill, profileSkillTitle: profileSkill.title };
      });
    })
    .reduce((skillArr, nestedSkills) => {
      let updatedSkillArray = skillArr;
      for (const skill of nestedSkills) {
        updatedSkillArray = updatedSkillArray.concat(skill);
      }
      return updatedSkillArray;
    }, []);

  const profileContactsCtx = useContext(ProfileContactsContext);

  const contacts = profileContactsCtx.profileContacts
    .map((profileContact) => {
      return profileContact.contacts.map((contact) => {
        return { ...contact, profileContactTitle: profileContact.title };
      });
    })
    .reduce((contactArr, nestedContacts) => {
      let updatedContactArray = contactArr;
      for (const contact of nestedContacts) {
        updatedContactArray = updatedContactArray.concat(contact);
      }
      return updatedContactArray;
    }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>
              <h2>Thank you for applying to the role of...</h2>
              <p>
                We hope to get in touch with you soon about your application to
                inform you of a possible interview...
              </p>
            </IonLabel>
            <IonIcon slot="end" icon={send} color="primary" />
          </IonItem>
          <IonItem>
            <IonLabel>
              <h2>You have liked the Lauren Griffens profile...</h2>
              <p>To view the liked profile click on the foolowing link...</p>
              <p>
                View:{" "}
                <Link color="primary" to="/register">
                  liked profile
                </Link>
              </p>
            </IonLabel>
            <IonIcon slot="end" icon={heart} color="primary" />
          </IonItem>
          <IonItem>
            <IonLabel>
              <h2>You have bookmarked the following job...</h2>
              <p>To view the bookmarked job click on the following link...</p>
              <p>
                View:{" "}
                <Link color="primary" to="/register">
                  bookmarked job
                </Link>
              </p>
            </IonLabel>
            <IonIcon slot="end" icon={bookmark} color="primary" />
          </IonItem>
          {abouts.map((about) => (
            <IonItem key={about.id}>
              <IonLabel>
                <h2>Updated information</h2>
                <p>In {about.profileAboutTitle} page</p>
              </IonLabel>
              <IonIcon slot="end" icon={personAdd} color="primary" />
            </IonItem>
          ))}
          {educations.map((education) => (
            <IonItem key={education.id}>
              <IonLabel>
                <h2>Updated information</h2>
                <p>In {education.profileEducationTitle} page</p>
              </IonLabel>
              <IonIcon slot="end" icon={personAdd} color="primary" />
            </IonItem>
          ))}
          {experiences.map((experience) => (
            <IonItem key={experience.id}>
              <IonLabel>
                <h2>Updated information</h2>
                <p>In {experience.profileExperienceTitle} page</p>
              </IonLabel>
              <IonIcon slot="end" icon={personAdd} color="primary" />
            </IonItem>
          ))}
          {skills.map((skill) => (
            <IonItem key={skill.id}>
              <IonLabel>
                <h2>Updated information</h2>
                <p>In {skill.profileSkillTitle} page</p>
              </IonLabel>
              <IonIcon slot="end" icon={personAdd} color="primary" />
            </IonItem>
          ))}
          {contacts.map((contact) => (
            <IonItem key={contact.id}>
              <IonLabel>
                <h2>Updated information</h2>
                <p>In {contact.profileContactTitle} page</p>
              </IonLabel>
              <IonIcon slot="end" icon={personAdd} color="primary" />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <IonText className="ion-text-center">
        <IonButton shape="round" routerLink="/tabs/notifications2">
          Push Notifications page
        </IonButton>
      </IonText>{" "}
      <br />
    </IonPage>
  );
};

export default Notifications;
