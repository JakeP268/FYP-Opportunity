import React, { useState } from "react";
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
  IonButton,
  IonIcon,
  IonItem,
  IonCardHeader,
  IonToast,
  IonFooter,
  isPlatform,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { useParams } from "react-router-dom";
import { NEWSFEED_DATA2 } from "../TabPages/Newsfeed";
import {
  logoTwitter,
  logoInstagram,
  send,
  cloudUpload,
  logoFacebook,
  phonePortrait,
  mail,
  globeOutline,
} from "ionicons/icons";
import "./font.css";
const NewsfeedList2: React.FC = () => {
  const ListNewsfeed2JobDetailsId = useParams<{ newsfeed2Id: string }>().newsfeed2Id;
  const [showToast1, setShowToast1] = useState(false);
  const ListNewsfeed2JobDetails = NEWSFEED_DATA2.find(
    (job) => job.id === ListNewsfeed2JobDetailsId
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          {!isPlatform("android") && (
            <IonButtons slot="end">
              <div className="upload-btn-wrapper">
                <IonButton>
                  <IonToast
                    isOpen={showToast1}
                    onDidDismiss={() => setShowToast1(false)}
                    message="Application Sent."
                    duration={200}
                  />
                  <IonIcon
                    slot="icon-only"
                    ios={cloudUpload}
                    md={cloudUpload}
                  ></IonIcon>
                </IonButton>
              </div>
            </IonButtons>
          )}
          {!isPlatform("android") && (
            <IonButtons slot="end">
              <IonButton href={"mailto:Dell@mail.com"}>
                <IonIcon slot="icon-only" ios={send} md={send}></IonIcon>
              </IonButton>
            </IonButtons>
          )}
          <IonTitle>{ListNewsfeed2JobDetails?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="auto">
          <IonRow>
            <IonCol size-xs="12" size-md="9" offset-md="1.5">
              {ListNewsfeed2JobDetails?.about.map((about) => (
                <IonCard key={about.id}>
                  <IonCardHeader>
                    <IonCardTitle className="font">{about.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonCardTitle>
                      <h2>Who we are</h2>
                    </IonCardTitle>
                    <div className="ion-text-justify">
                      {about.information1} <br /> {about.information2}
                    </div>
                    <br />
                    <IonCardTitle>
                      <h2>Specialities</h2>
                    </IonCardTitle>
                    <div className="ion-text-justify">{about.list}</div>
                  </IonCardContent>
                  <IonFooter>
                    <IonItem
                      lines="full"
                      href={about.websiteLink}
                      target="_blank"
                    >
                      <IonIcon icon={globeOutline} slot="start" />
                      <IonText>Website</IonText>
                    </IonItem>
                    <IonItem
                      lines="full"
                      href={about.instagramLink}
                      target="_blank"
                    >
                      <IonIcon icon={logoInstagram} slot="start" />
                      <IonText>Instagram</IonText>
                    </IonItem>
                    <IonItem
                      lines="full"
                      href={about.facebookLink}
                      target="_blank"
                    >
                      <IonIcon icon={logoFacebook} slot="start" />
                      <IonText>Facebook</IonText>
                    </IonItem>
                    <IonItem
                      lines="full"
                      href={about.twitterLink}
                      target="_blank"
                    >
                      <IonIcon icon={logoTwitter} slot="start" />
                      <IonText>Twitter</IonText>
                    </IonItem>
                  </IonFooter>
                </IonCard>
              ))}
            </IonCol>

            <IonCol size-xs="12" size-md="9" offset-md="1.5">
              {ListNewsfeed2JobDetails?.overview.map((overview) => (
                <IonCard key={overview.id}>
                  <IonCardHeader>
                    <IonCardTitle className="font">Overview</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonCardTitle>
                      <h2>{overview.jobTitle}</h2>
                    </IonCardTitle>
                    <div className="ion-text-justify">
                      {overview.information1} <br /> {overview.information2}
                    </div>{" "}
                    <br />
                    <IonCardTitle>
                      <h2>Responsibilities</h2>
                    </IonCardTitle>
                    <ul>
                      <li>{overview.list1}</li>
                      <li>{overview.list2}</li>
                      <li>{overview.list3}</li>
                      <li>{overview.list4}</li>
                      <li>{overview.list5}</li>
                      <li>{overview.list6}</li>
                      <li>{overview.list7}</li>
                      <li>{overview.list8}</li>
                    </ul>
                  </IonCardContent>
                </IonCard>
              ))}
            </IonCol>

            <IonCol size-xs="12" size-md="9" offset-md="1.5">
              {ListNewsfeed2JobDetails?.requirements.map((requirements) => (
                <IonCard key={requirements.id}>
                  <IonCardHeader>
                    <IonCardTitle className="font">Requirements</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonCardTitle>
                      <h2>Minimum Qualifications</h2>
                    </IonCardTitle>
                    <ul>
                      <li>{requirements.minList1}</li>
                      <li>{requirements.minList2}</li>
                      <li>{requirements.minList3}</li>
                      <li>{requirements.minList4}</li>
                    </ul>
                    <IonCardTitle>
                      <h2>Preferred Qualifications</h2>
                    </IonCardTitle>
                    <ul>
                      <li>{requirements.preList1}</li>
                      <li>{requirements.preList2}</li>
                      <li>{requirements.preList3}</li>
                      <li>{requirements.preList4}</li>
                    </ul>
                  </IonCardContent>
                </IonCard>
              ))}
            </IonCol>

            <IonCol size-xs="12" size-md="4.5" offset-md="1.5">
              {ListNewsfeed2JobDetails?.skills.map((skills) => (
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
                      <li>{skills.skill7}</li>
                    </ul>
                  </IonCardContent>
                </IonCard>
              ))}
            </IonCol>

            <IonCol size-xs="12" size-md="4.5">
              {ListNewsfeed2JobDetails?.contact.map((contact) => (
                <IonCard key={contact.id} className="c1">
                  <IonCardHeader>
                    <IonCardTitle className="font">Contact</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonCardTitle>
                      <h2>Get in touch</h2>
                    </IonCardTitle>
                    <div className="ion-text-justify">
                      To contact us relating to any queries you may have about
                      the listed job above. You can contact us on the following
                      email address or support contact number that is listed
                      below.
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
        {isPlatform("android") && (
          <IonFab horizontal="end" vertical="bottom" slot="fixed">
            <div className="upload-btn-wrapper">
              <IonFabButton>
                <IonToast
                  isOpen={showToast1}
                  onDidDismiss={() => setShowToast1(false)}
                  message="Application Sent."
                  duration={200}
                />
                <IonIcon icon={cloudUpload} />
              </IonFabButton>
            </div>
            <br />
            <IonFabButton href={"mailto:@mail.com"}>
              <IonIcon icon={send} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};
export default NewsfeedList2;
