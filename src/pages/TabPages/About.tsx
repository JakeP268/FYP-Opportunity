import React, { useRef } from "react";
import {
  IonContent,
  IonPage,
  IonSlides,
  IonSlide,
  IonIcon,
  IonCard,
  IonList,
  IonItem,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import {
  logoFirebase,
  logoCapacitor,
  logoIonic,
  logoNodejs,
  logoReact,
  logoJavascript,
} from "ionicons/icons";
import "./About.scss";

const slideOpts = {
  initialSlide: 0,
  speed: 100,
};

export const About: React.FC = () => {
  const slideRef = useRef<HTMLIonSlidesElement>(null);
  return (
    <IonPage id="about-page">
      <IonHeader no-border>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* The IonSlides component is used as a multi-section containor that allows the page to be slidable and can hold any number of IonSlide components inside of it. */}
        <IonSlides pager={true} options={slideOpts}>
          {/* The IonSlide child component is placed inside of the IonSlides component, where in each IonSlide you can put in content that just displays on that IonSlide.  */}
          <IonSlide>
            <IonCard>
              <img src="assets/img/Pink.png" alt="" className="slide-image" />
            </IonCard>
            <h2 className="slide-title">
              <b>Discover</b>
            </h2>
            <p>
              Opportunity is a concept for a new type of hybrid job-seeking
              application, created using the Ionic SDK. <br />
              The main objective of Opportunity is to focus on creating an all
              in one job seeking appliaction that targets all platforms. <br />
              To help try to reduce the current amount of job seeking
              applications out their currently. <br /> The application is to
              make job hunting and creating connections more easier for users
              and hopefully allow them to create new opportunities in the
              process .
            </p>
          </IonSlide>
          <IonSlide>
            <IonCard>
              <img src="assets/img/Pink.png" alt="" className="slide-image" />
            </IonCard>
            <h2 className="slide-title">
              <b>Benefits</b>
            </h2>
            <p>
              Clean UX & UI design for easy navigation weather on Desktop,
              tablet, IOS or Android devices.
              <br />
              Smoother Job & User profile Layouts which follow the same
              structure to help read each job and profile clearly.
              <br />
              Refined Job Search for easier hunting with jobs being categoized
              by area rather then by company.
              <br />
              No extra registration or sign ups to other comapny sites which
              will help reduce spam notifications through your email.
              <br />
              All jobs are applied through Opportunity with no external job
              links.
            </p>
          </IonSlide>
          <IonSlide>
            <IonCard>
              <img src="assets/img/Pink.png" alt="" className="slide-image" />
            </IonCard>
            <h2 className="slide-title">
              <b>Technologies</b>
            </h2>
            <IonCard>
              <IonList lines="full">
                <IonItem lines="full" href="https://ionicframework.com/">
                  <IonIcon slot="start" color="primary" icon={logoIonic} />
                  <IonLabel className="ion-text-wrap">
                    Ionic Software Development Kit
                  </IonLabel>
                </IonItem>
                <IonItem lines="full" href="https://capacitorjs.com/">
                  <IonIcon slot="start" color="primary" icon={logoCapacitor} />
                  <IonLabel className="ion-text-wrap">Ionic Capacitor</IonLabel>
                </IonItem>
                <IonItem lines="full" href="https://reactjs.org/">
                  <IonIcon slot="start" color="primary" icon={logoReact} />
                  <IonLabel className="ion-text-wrap">
                    React Web Framework
                  </IonLabel>
                </IonItem>
                <IonItem lines="full" href="https://www.typescriptlang.org/">
                  <IonIcon slot="start" color="primary" icon={logoJavascript} />
                  <IonLabel className="ion-text-wrap">TypeScript</IonLabel>
                </IonItem>
                <IonItem lines="full" href="https://firebase.google.com/">
                  <IonIcon slot="start" color="warning" icon={logoFirebase} />
                  <IonLabel className="ion-text-wrap">Google Firebase</IonLabel>
                </IonItem>
                <IonItem lines="none" href="https://firebase.google.com/">
                  <IonIcon slot="start" color="success" icon={logoNodejs} />
                  <IonLabel className="ion-text-wrap">
                    Nodejs JavaScript Runtime
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard>
              <img src="assets/img/Pink.png" alt="" className="slide-image" />
            </IonCard>
            <h2 className="slide-title">
              <b>Disclaimer</b>
            </h2>
            <p>
              All jobs and connections created on the Opportunity application
              are only for display and are not real. All Contact information
              displayed within the application are not real and will not work if
              used. All CVs that you upload will be placed within a Cloud
              Storage folder on Googles Firebase if sent. This disclaimer is
              here for you the user to understand that this application is
              purposley used as a means of a concept and is not a real
              job-seeking application service.
            </p>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
export default About;
