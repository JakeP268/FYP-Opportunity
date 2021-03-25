import React, { useState, useEffect, useContext } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonButton,
  IonFooter,
  IonItem,
  IonLabel,
  IonCardTitle,
  IonCardSubtitle,
  IonThumbnail,
  IonList,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonSearchbar,
} from "@ionic/react";
import "./card.css";
import { heartOutline } from "ionicons/icons";
import ProfilePreviewsContext from "../../data/profilePreviews-context";

//Array for all "Job Card Lists" & "Job Page details" infromation within the Connections section.
export const CONNECTIONS_DATA = [
  {
    id: "j1",
    image: <img src="/assets/jobcons/avatarf.png" alt="" />,
    name: "Laura Griffen",
    role: "Microbiologist",
    location: "Galway",
    description: "",
    experience: "Intermediate",
    status: "Searching",
    about: [
      {
        id: "a1",
        name: "Laura Griffen",
        rtitle: "Microbiologist",
        information: "I am a QC Microbiologist at Teva, Galway with a BSc in Microbiology from NUIG. I have a combined year of experience in pharmaceuticals, having worked as an intern in both the QC Microbiology lab and as a member of the Quality Analysis team Teagasc, Limerick. I have also taken part in both internal and regulatory audits. I have been trained in procedures such as bioburden and endotoxin testing, media fill, environmental monitoring and material inspection amongst others.",
        list: "Genetics, Biochemistry, Medical microbiology, Molecular biology and Biotechnology, Environmental microbiology.",
        pr: "",
      },
    ],
    education: [
      {
        id: "e1",
        education1: "National University of Ireland Galway",
        course1: "Bsc in Microbiology",
        duration1: "Sep 2013- May 2017",
        education2: "Maynooth University",
        course2: "Quality Control Certificate",
        duration2: "Feb 2018",
        
      },
    ],
    skills: [
      {
        id: "s1",
        skill1: "Critical Thinking",
        skill2: "Complex Problem Solving ",
        skill3: "Systems Analysis",
        skill4: "Time Management",
        skill5: "Systems Evaluation",
        skill6: "Operation Monitoring",
        skill7: "Quality Control Analysis",
      },
    ],
    experiences: [
      {
        id: "ex1",
        exTitle1: "QC Microbiologist",
        exCName1: "teva",
        exDuration1: "May 2017 - ongoing",
        exDescription1: "I am responsible for assuring quality of the product through all day-to-day operations. I assist the comapny by evaluating raw materials and other supplies. I ensure compliance to common Good Manufacturing Practices. I calibrate and maintain microbiology laboratory equipment; compile and analyze data for documentation; and prepare related reports.",
        exTitle2: "Research assistant",
        exCName2: "Teagasc",
        exDuration2: "Jan 2016 - Jun 2016",
        exDescription2: "During my time at Teagasc I worked on a research project which focused on the growth of bioenergy fuel crops, such as Miscanthus and other periennial grasses, in marginal lands. As the project was in its infant stages I carried out a lot of work on the optimization of experimental methods and field measurements.",
        
      },
    ],
    contact: [
      {
        id: "c1",
        email: "LauraGriffen@mail.com",
        number: "3281-324-894",
      },
    ],
  },
  {
    id: "j2",
    image: <img src="/assets/jobcons/avatarm.jpg" alt="" />,
    name: "Joe Bloggs",
    role: "Web Developer",
    location: "Galway",
    description: "",
    experience: "Advanced",
    status: "Searching",
    about: [
      {
        id: "a2",
        name: "Joe Bloggs",
        rtitle: "Web Developer",
        information: "I am an ambitious and hardworking IT professional, with 10+ years of work experience and results in related areas, with a passion to learn and seek for new information, solutions and technologies, specialized in web development and UX, UI design and implementation. I am currently working on projects for higher education for the EU market, with previous experiences on enterprise projects for world's leading pharmaceutical companies and healthcare. I have references and recommendations which can demonstrate results, creativity, quick response for solving various situations with responsibility for work and satisfaction of clients.",
        list: "Web Development, Research, Network administration and security, Javascript and its frameworks, Html, Css, Data Analytics, MSSQL, NodeJS, Php, MySql, RESTful API-s, Apache, Git, Linux and Windows servers, Microsoft Azure, Amazon Web Services, Web/UI design, UX and business development.",
        pr: "",
      },
    ],
    education: [
      {
        id: "e2",
        education1: "University College Dublin",
        course1: "Bsc in Computer Science",
        duration1: "Sep 2004 - May 2008",
        education2: "University College Cork",
        course2: "MSc in Data Science",
        duration2: "Jan 2009 - Jan 2010",
        
      },
    ],
    skills: [
      {
        id: "s2",
        skill1: "Web Development",
        skill2: "JavaScript",
        skill3: "User Interface Design",
        skill4: "Network Security",
        skill5: "E-Learning",
        skill6: "Software Development",
        skill7: "System Monitoring",
      },
    ],
    experiences: [
      {
        id: "ex2",
        exTitle1: "Web Developer",
        exCName1: "E-magine",
        exDuration1: "Dec 2017 - Jun 2020",
        exDescription1: "Building solutions for enterprise clients in the finance and insurance sectors. I did this by using NodeJS, Microservices architecture, Jest Unit testing, PHP WordPress plugins,  MySQL, PostgreSQL - usage and schema designs, Amazon AWS and designing and planning relational databases and improving/customizing modules based on client needs",
        exTitle2: "Full-stack developer",
        exCName2: "Ubisoft",
        exDuration2: "Jan 2012 - May 2017",
        exDescription2: "I was a full-stack developer on a client site for Ubisoft. Where I did the following enterprise web projects for top branded Pharmaceutical companies on a global scale, SVN and TFS version control with continuous deployment and integration, working simultaneously on various projects with big diverse team and offices in Ireland, Switzerland, USA, France and India and teamwork(20+ people) and cooperating with project management for time estimations, maintaining stable quality projects and deliveries on time.",
        
      },
    ],
    contact: [
      {
        id: "c2",
        email: "JoeBloggs@mail.com",
        number: "8923-832-872",
      },
    ],
  },
  {
    id: "j3",
    image: <img src="/assets/jobcons/avatarf.png" alt="" />,
    name: "Kate Cassidy",
    role: "Mechanical Engineer",
    location: "Dublin",
    description: "",
    experience: "Beginner",
    status: "Graduate",
    about: [
      {
        id: "a3",
        name: "Kate Cassidy",
        rtitle: "Mechanical Engineer",
        information: "I have currently graduated my Masters in Mechanical Engineering in WIT with a First Class Honours. I completed my undergraduate Mechanical Engineering, also in WIT, and graduated in 2018 with a First Class Honours too. My thesis was based on creating an electronic assisted hydraulic braking system. It challenged me to learn new software and ways of thinking around problems. Throughout my time in WIT I have balanced college work with a part time job and my sports schedule. My drive to maintain high standards in all aspects has forced me to develop strong time management and prioritisation skills. As part of my Master's Degree, I completed an 9 month placement in Eirgen's Engineering Department. During the 8 months I gained huge experience and appreciation for the concept of Lean Manufacturing. Some of the software programmes I have become proficient in during my time in WIT are Inventor, Solidworks, MATLAB, Python and more. ",
        list: "Computer-aided engineering, process control, manufacturing engineering, aeronautics, materials engineering and product development",
        pr: "",
      },
    ],
    education: [
      {
        id: "e3",
        education1: "Waterford Institute of Technology",
        course1: "MSc in Mechanical Engineering",
        duration1: "Sept 2018 - Sept 2020",
        education2: "Waterford Institute of Technology",
        course2: "BSc in Mechanical Engineering",
        duration2: "Sept 2014 - May 2018",
      },
    ],
    skills: [
      {
        id: "s3",
        skill1: "Project Management",
        skill2: "Customer Service",
        skill3: "Leadership",
        skill4: "Microsoft Excel",
        skill5: "Microsoft Office",
        skill6: "Strong Communication Skills",
        skill7: "",
      },
    ],
    experiences: [
      {
        id: "ex3",
        exTitle1: "Continuous Improvements Intern",
        exCName1: "EirGen",
        exDuration1: "Apr 2019 - June 2020",
        exDescription1: "I developed new metrics to quantify workflow performance and correlated this with productivity. I used Minitab to statistically analyse, present and diagnose NCMR data. I tracked and presented experimental results while working hand in hand with senior members of staff to investigate the root cause of a major site issue. I displayed strong analytical skills in tracking and normalising productivity data in order to work with manufacturing operators to improve the health of their workflow, resulting in improved productivity.",
        exTitle2: "Manufactoring Associate",
        exCName2: "Alkermes",
        exDuration2: "",
        exDescription2: "I assisted Technicians and Manufacturing Associates on the manufacturing floor. I led in the implementation of new transport machinery to the manufacturing floor and ensured the correct protocol was followed. This involved working with suppliers, consulting with co-workers and collaborating with various departments. I observed and consulted technicians on running of new tableting equipment in order to formulate an SOP for the tasks involved.",
      },
    ],
    contact: [
      {
        id: "c3",
        email: "KateCassidy@mail.com",
        number: "7832-411-687",
      },
    ],
  },
  {
    id: "j4",
    image: <img src="/assets/jobcons/avatarm.jpg" alt="" />,
    name: "Conor Garland",
    role: "Financial Manger",
    location: "Cork",
    description: "May 2017 - Aug 2017",
    experience: "Advanced",
    status: "Employed",
    
    about: [  {id: "a4", name: "", rtitle: "", information: "", list: "", pr: "",}, ],
    education: [ {id: "e4", education1: "", course1: "", duration1: "", education2: "", course2: "", duration2: "",}, ],
    skills: [ {id: "s4", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "",}, ],
    experiences: [ {id: "ex4", exTitle1: "", exCName1: "", exDuration1: "", exDescription1: "", exTitle2: "", exCName2: "",exDuration2: "", exDescription2: "",}, ],
    contact: [ {id: "c4", email: "@mail.com", number: "0000-000-000",}, ],
  },
  {
    id: "j5",
    image: <img src="/assets/jobcons/avatarf.png" alt="" />,
    name: "Sarah Higgins",
    role: "Database Administrator",
    location: "Cork",
    description: "",
    experience: "Beginner",
    status: "Searching",
    
    about: [  {id: "a5", name: "", rtitle: "", information: "", list: "", pr: "",}, ],
    education: [ {id: "e5", education1: "", course1: "", duration1: "", education2: "", course2: "", duration2: "",}, ],
    skills: [ {id: "s5", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "",}, ],
    experiences: [ {id: "ex5", exTitle1: "", exCName1: "", exDuration1: "", exDescription1: "", exTitle2: "", exCName2: "", exDuration2: "", exDescription2: "",}, ],
    contact: [ {id: "c5", email: "@mail.com", number: "0000-000-000",}, ],
  },
  {
    id: "j6",
    image: <img src="/assets/jobcons/avatarm.jpg" alt="" />,
    name: "Daniel Porter",
    role: "Data Anaylyst",
    location: "Dublin",
    description: "",
    experience: "Intermediate",
    status: "Searching",

    about: [  {id: "a6", name: "", rtitle: "", information: "", list: "", pr: "",}, ],
    education: [ {id: "e1", education1: "", course1: "", duration1: "", education2: "", course2: "", duration2: "",}, ],
    skills: [ {id: "s6", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "",}, ],
    experiences: [ {id: "ex6", exTitle1: "", exCName1: "", exDuration1: "", exDescription1: "", exTitle2: "", exCName2: "", exDuration2: "", exDescription2: "",}, ],
    contact: [ {id: "c6", email: "@mail.com", number: "0000-000-000",}, ],
  },
];
const SearchConnections: React.FC = () => {

  //Search Bar implementaion
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState(CONNECTIONS_DATA);
  useEffect(() => {
    if (searchText === "") {
      setResults(CONNECTIONS_DATA);
    } else {
      setResults(
        CONNECTIONS_DATA.filter(
          (item) =>
            item.role.match(searchText) ||
            item.name.match(searchText) ||
            item.location.match(searchText) ||
            item.experience.match(searchText)
        )
      );
    }
  }, [searchText]);
  const profilePreviewsCtx = useContext(ProfilePreviewsContext);
  const previews = profilePreviewsCtx.profilePreviews
    .filter((profilePreview) => {
      return profilePreview.included;
    })
    .map((profilePreview) => {
      return profilePreview.previews.map((preview) => {
        return { ...preview, profilePreviewTitle: profilePreview.title };
      });
    })
    .reduce((previewArr, nestedPreviews) => {
      let updatedPreviewArray = previewArr;
      for (const preview of nestedPreviews) {
        updatedPreviewArray = updatedPreviewArray.concat(preview);
      }
      return updatedPreviewArray;
    }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Connections</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            value={searchText}
            onIonChange={(e) => setSearchText(e.detail.value!)}
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {/* Mapping created crud information into Ionic Components */}
            {previews.map((preview) => (
              <IonCol key={preview.id} size-xs="12" size-md="6" size-lg="4">
                <IonCard>
                  <IonList>
                    <IonItem>
                      <IonThumbnail slot="start">
                        <img src="/assets/jobcons/avatarg.png" alt="" />
                      </IonThumbnail>
                      <IonButton slot="end" fill="clear" color="primary">
                        <IonIcon icon={heartOutline} slot="icon-only" />
                      </IonButton>
                      <IonLabel className="ion-text-wrap">
                        <IonCardTitle className="font">
                          <h1>{preview.name}</h1>
                        </IonCardTitle>
                        <IonCardSubtitle>{preview.role}</IonCardSubtitle>
                        <IonCardSubtitle>{preview.location}</IonCardSubtitle>
                      </IonLabel>
                    </IonItem>
                    <IonCardContent>
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. The standard chunk
                      of Lorem Ipsum used since the 1500s is reproduced below
                      for those interested.
                    </IonCardContent>
                    <IonItem>Experience: {preview.exp}</IonItem>
                    <IonItem>Status: {preview.status}</IonItem>
                    <IonFooter className="ion-text-right">
                      <IonButton
                        fill="clear"
                        routerLink="/search-profilePreview"
                      >
                        View Profile
                      </IonButton>
                    </IonFooter>
                  </IonList>
                </IonCard>
              </IonCol>
            ))}
            {/* Mapping created array information into Ionic Components */}
            {results.map((connections) => (
              <IonCol key={connections.id} size-xs="12" size-md="6" size-lg="4">
                <IonCard>
                  <IonList>
                    <IonItem>
                      <IonThumbnail slot="start">
                        {connections.image}
                      </IonThumbnail>
                      <IonButton slot="end" fill="clear" color="primary">
                        <IonIcon icon={heartOutline} slot="icon-only" />
                      </IonButton>
                      <IonLabel className="ion-text-wrap">
                        <IonCardTitle className="font">
                          {connections.name}
                        </IonCardTitle>
                        <IonCardSubtitle>{connections.role}</IonCardSubtitle>
                        <IonCardSubtitle>{connections.location}</IonCardSubtitle>
                      </IonLabel>
                    </IonItem>
                    <IonCardContent className="ion-text-justify">
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. The standard chunk
                      of Lorem Ipsum used since the 1500s is reproduced below
                      for those interested.
                    </IonCardContent>
                    <IonItem lines="full">
                      Experience: {connections.experience}
                    </IonItem>
                    <IonItem lines="none">
                      Status: {connections.status}
                    </IonItem>
                    <IonFooter className="ion-text-right">
                      <IonButton
                        fill="clear"
                        routerLink={`/search-connections/${connections.id}`}
                      >
                        View Connection
                      </IonButton>
                    </IonFooter>
                  </IonList>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default SearchConnections;
