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
import { CONNECTIONS_DATA } from "../SearchPages/SearchConnections";
import {
  phonePortrait,
  mail,
  readerOutline,
  schoolOutline,
} from "ionicons/icons";
import "./font.css";
const ListConnections: React.FC = () => {
  const listConnectionJobDetailsId = useParams<{ connectionsId: string }>()
    .connectionsId;
  const listConnectionJobDetails = CONNECTIONS_DATA.find(
    (job) => job.id === listConnectionJobDetailsId
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{listConnectionJobDetails?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="auto">
          <IonRow>
            <IonCol size-xs="12" size-md="9" offset-md="1.5">
              {listConnectionJobDetails?.about.map((about) => (
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
              {listConnectionJobDetails?.education.map((education) => (
                <IonCard key={education.id} className="c1">
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
              {listConnectionJobDetails?.skills.map((skills) => (
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
              {listConnectionJobDetails?.experiences.map((experiences) => (
                <IonCard key={experiences.id} className="c1">
                  <IonCardHeader>
                    <IonCardTitle className="font">Experience</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonCardTitle>
                      <h2>{experiences.exTitle1}</h2>
                    </IonCardTitle>
                    {experiences.exDescription1}
                    <IonCardTitle>
                      <h4>
                        {experiences.exCName1}: {experiences.exDuration1}
                      </h4>
                    </IonCardTitle>
                    <br />
                    <IonCardTitle>
                      <h2>{experiences.exTitle2}</h2>
                    </IonCardTitle>
                    {experiences.exDescription2}
                    <IonCardTitle>
                      <h4>
                        {experiences.exCName2}: {experiences.exDuration2}
                      </h4>
                    </IonCardTitle>
                  </IonCardContent>
                </IonCard>
              ))}
            </IonCol>

            <IonCol size-xs="12" size-md="9" offset-md="1.5">
              {listConnectionJobDetails?.contact.map((contact) => (
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
export default ListConnections;
