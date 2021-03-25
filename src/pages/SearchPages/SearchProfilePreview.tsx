import React, { useContext } from "react";
import {
  IonHeader,
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonFooter,
  IonItem,
  IonIcon,
  IonText,
  IonLabel,
} from "@ionic/react";
import ProfileAboutsContext from "../../data/profileAbouts-context";
import ProfileEducationsContext from "../../data/profileEducations-context";
import ProfileExperiencesContext from "../../data/profileExperiences-context";
import ProfileSkillsContext from "../../data/profileSkills-context";
import ProfileContactsContext from "../../data/profileContacts-context";
import {
  readerOutline,
  mail,
  phonePortrait,
  schoolOutline,
} from "ionicons/icons";
export const SearchProfilePreview: React.FC = () => {
  const profileAboutCtx = useContext(ProfileAboutsContext);
  const abouts = profileAboutCtx.profileAbouts
    .filter((profileAbout) => {
      return profileAbout.included;
    })
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
    .filter((profileEducation) => {
      return profileEducation.included;
    })
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
    .filter((profileExperience) => {
      return profileExperience.included;
    })
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
    .filter((profileSkill) => {
      return profileSkill.included;
    })
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
    .filter((profileContact) => {
      return profileContact.included;
    })
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
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {abouts.map((about) => (
              <IonCol size-xs="12" size-md="9" offset-md="1.5">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle className="font">{about.name}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonCardTitle>
                      <h2>{about.rTitle}</h2>
                    </IonCardTitle>
                    <div className="ion-text-justify">{about.bio}</div>
                    <IonCardTitle>
                      <br/>
                      <h2>Area of Interest</h2>
                    </IonCardTitle>
                    <div className="ion-text-justify">{about.interests}</div>
                  </IonCardContent>
                  <IonFooter>
                    <IonItem lines="full" href={about.pr} target="_blank">
                      <IonIcon icon={readerOutline} slot="start" />
                      <IonText>Portfolio Resume</IonText>
                    </IonItem>
                  </IonFooter>
                </IonCard>
              </IonCol>
            ))}
            <IonCol size-xs="12" size-md="4.5" offset-md="1.5">
              <IonCard className="c1">
                <IonCardHeader>
                  <IonCardTitle className="font">Education</IonCardTitle>
                </IonCardHeader>
                {educations.map((education) => (
                  <IonItem key={education.id}>
                    <IonIcon size="large" icon={schoolOutline} slot="start" />
                    <IonLabel className="ion-text-wrap">
                      <IonCardTitle>{education.title}</IonCardTitle>
                      <h3>{education.course}</h3>
                      <p>{education.year}</p>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonCard>
            </IonCol>
            <IonCol size-xs="12" size-md="4.5">
              <IonCard className="c1">
                <IonCardHeader>
                  <IonCardTitle className="font">Skills</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  {skills.map((skill) => (
                    <ul key={skill.id}>
                      <li>{skill.item}</li>
                    </ul>
                  ))}
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size-xs="12" size-md="9" offset-md="1.5">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle className="font">Experience</IonCardTitle>
                </IonCardHeader>
                {experiences.map((experience) => (
                  <IonCardContent key={experience.id}>
                    <IonCardTitle>
                      <h2>{experience.exTitle}</h2>
                    </IonCardTitle>
                    {experience.description}
                    <IonCardTitle>
                      <h4>
                        {experience.exPlace}: {experience.year}
                      </h4>
                    </IonCardTitle>
                  </IonCardContent>
                ))}
              </IonCard>
            </IonCol>
            {contacts.map((contact) => (
              <IonCol size-xs="12" size-md="9" offset-md="1.5">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle className="font">Contact</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonCardTitle><h2>Get in touch</h2></IonCardTitle>
                    {contact.information}
                  </IonCardContent>
                  <IonFooter>
                    <IonItem lines="full" href={`mailto:${contact.email}`}>
                      <IonIcon icon={mail} slot="start" />
                      <IonText className="ion-text-wrap">
                        {contact.email}
                      </IonText>
                    </IonItem>
                    <IonItem lines="full" href={`tel:+${contact.number}`}>
                      <IonIcon icon={phonePortrait} slot="start" />
                      <IonText>{contact.number}</IonText>
                    </IonItem>
                  </IonFooter>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default SearchProfilePreview;
