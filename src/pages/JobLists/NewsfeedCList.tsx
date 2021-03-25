import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonRow,
  IonCol,
  IonGrid,
  IonText,
  IonIcon,
  IonItem,
  IonCardHeader,
  IonFooter,
  IonLabel,
} from "@ionic/react";
import { useParams } from "react-router-dom";
import { NEWSFEEDC_DATA } from "../TabPages/Newsfeed";
import {
  phonePortrait,
  mail,
  readerOutline,
  schoolOutline,
} from "ionicons/icons";
import "./font.css";
const NewsfeedCList: React.FC = () => {
  const ListNewsfeedConnectionId = useParams<{ newsfeedcId: string }>()
    .newsfeedcId;
  const ListNewsfeedConnection = NEWSFEEDC_DATA.find(
    (job) => job.id === ListNewsfeedConnectionId
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{ListNewsfeedConnection?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="auto">
          <IonRow>
            <IonCol size-xs="12" size-md="9" offset-md="1.5">
              {ListNewsfeedConnection?.about.map((about) => (
                <IonCard key={about.id}>
                  <IonCardHeader>
                    <IonCardTitle className="font">{about.name}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonCardTitle>
                      <h2>{about.rtitle}</h2>
                    </IonCardTitle>
                    <div className="ion-text-justify">{about.information}</div>
                    <br />
                    <IonCardTitle>
                      <h2>Area of Interests</h2>
                    </IonCardTitle>
                    <div className="ion-text-justify">{about.list}</div>
                  </IonCardContent>
                  <IonFooter>
                    <IonItem lines="full" href={about.pr} target="_blank">
                      <IonIcon icon={readerOutline} slot="start" />
                      <IonText>Portfolio Resume</IonText>
                    </IonItem>
                  </IonFooter>
                </IonCard>
              ))}
            </IonCol>

            <IonCol size-xs="12" size-md="4.5" offset-md="1.5">
              {ListNewsfeedConnection?.education.map((education) => (
                <IonCard key={education.id}>
                  <IonCardHeader>
                    <IonCardTitle className="font">Education</IonCardTitle>
                  </IonCardHeader>
                  <IonItem>
                    <IonIcon size="large" icon={schoolOutline} slot="start" />
                    <IonLabel className="ion-text-wrap">
                      <IonCardTitle>
                        <h2>{education.education1}</h2>
                      </IonCardTitle>
                      <h3>{education.course1}</h3> <p>{education.duration1}</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonIcon size="large" icon={schoolOutline} slot="start" />
                    <IonLabel className="ion-text-wrap">
                      <IonCardTitle>
                        <h2>{education.education2}</h2>
                      </IonCardTitle>
                      <h3>{education.course2}</h3> <p>{education.duration2}</p>
                    </IonLabel>
                  </IonItem>
                </IonCard>
              ))}
            </IonCol>

            <IonCol size-xs="12" size-md="4.5">
              {ListNewsfeedConnection?.skills.map((skills) => (
                <IonCard key={skills.id} className="c1">
                  <IonCardHeader>
                    <IonCardTitle className="font">Skills</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <ul>
                      <li>{skills.skill1}</li>
                      <li>{skills.skill2}</li>
                      <li>{skills.skill3}</li>
                      <li>{skills.skill4}</li>
                      <li>{skills.skill5}</li>
                      <li>{skills.skill6}</li>
                    </ul>
                  </IonCardContent>
                </IonCard>
              ))}
            </IonCol>

            <IonCol size-xs="12" size-md="9" offset-md="1.5">
              {ListNewsfeedConnection?.experiences.map((experiences) => (
                <IonCard key={experiences.id} className="c1">
                  <IonCardHeader>
                    <IonCardTitle className="font">Experience</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonCardTitle>{experiences.exTitle1}</IonCardTitle>
                    <IonCardTitle>{experiences.exCName1}</IonCardTitle>
                    <p>{experiences.exDuration1}</p>
                    {experiences.exDescription1}
                    <IonCardTitle>{experiences.exTitle2}</IonCardTitle>
                    <IonCardTitle>{experiences.exCName2}</IonCardTitle>
                    <p>{experiences.exDuration2}</p>
                    {experiences.exDescription2}
                  </IonCardContent>
                </IonCard>
              ))}
            </IonCol>

            <IonCol size-xs="12" size-md="9" offset-md="1.5">
              {ListNewsfeedConnection?.contact.map((contact) => (
                <IonCard key={contact.id} className="c1">
                  <IonCardHeader>
                    <IonCardTitle className="font">Contact</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonCardTitle>
                      <h2>Get in touch</h2>
                    </IonCardTitle>
                    <div className="ion-text-justify">
                      To contact me relating to any queries you may have about
                      my profile or possible opportunities. You can contact me
                      on the following email address or contact number that is
                      listed below.
                    </div>
                  </IonCardContent>
                  <IonFooter>
                    <IonItem lines="full" href={`mailto:${contact.email}`}>
                      <IonIcon icon={mail} slot="start" />
                      <IonText className="ion-text-wrap">
                        {contact.email}
                      </IonText>
                    </IonItem>
                    <IonItem lines="none" href={`tel:+${contact.number}`}>
                      <IonIcon icon={phonePortrait} slot="start" />
                      <IonText>{contact.number}</IonText>
                    </IonItem>
                  </IonFooter>
                </IonCard>
              ))}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default NewsfeedCList;
