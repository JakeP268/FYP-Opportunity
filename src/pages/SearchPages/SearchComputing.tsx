import React, { useEffect, useState } from "react";
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
import { bookmarkOutline } from "ionicons/icons";

//Array for all "Job Card Lists" & "Job Page details" infromation within the Computing section.
export const COMPUTING_DATA = [
  {
    id: "j1",
    image: <img src="/assets/jobcons/microsoft.png" alt="" />,
    title: "UX/UI Designer",
    company: "Microsoft",
    city: "Dublin",
    enrolled: new Date("06/29/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "40,000, 45,000",
    about: [
      {
        id: "a1",
        title: "Microsoft",
        information1: "At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Our mission is grounded in both the world in which we live and the future we strive to create. Today, we live in a mobile-first, cloud-first world, and the transformation we are driving across our businesses is designed to enable Microsoft and our customers to thrive in this world. ",
        information2: "We do business in 170 countries and are made up of 144,000 passionate employees dedicated to fulfilling our mission of helping you and your organization achieve more.",
        list: "Business Software, Developer Tools, Home & Educational Software, Tablets, Search, Advertising, Servers, Windows Operating System, Windows Applications & Platforms, Smartphones, Cloud Computing, Quantum Computing, Future of Work, Productivity, AI, Artificial Intelligence, Machine Learning, Laptops, Mixed Reality, Virtual Reality, Gaming, Developers, and IT Professional",
        websiteLink: "https://careers.microsoft.com/us/en",
        instagramLink: "https://www.instagram.com/microsoft/?hl=en",
        facebookLink: "https://www.facebook.com/MicrosoftIreland/?brand_redir=20528438720",
        twitterLink: "https://twitter.com/Microsoft?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r1",
        jobTitle: "UX/UI Designer",
        information1: "We are looking for a UX/UI Designer who will be responsible for helping us design and implement Microsoft’s next generation learning experiences. In this role, you will utilize a mixed toolkit of design and creative coding, combining traditional tools of user-centered design with the passion to learn about responsible use of emerging technologies. You will partner closely with stakeholders in design, research, PM, engineering, data science, policy, and legal to influence the AI-powered learning experiences of the future. You will be expected to think beyond current conventions and be eager to learn more about the latest technology advances pertaining to artificial intelligence, mixed reality, edge computing, and more.",
        information2: "Your responsibilities will include the development of UX designs that are shipped as part of the studio’s products, and actively contribute to the front-end development. You will play a key role in representing the voice of the user. The experiences you would own will provide engaging, streamlined and modern approaches for learners as they build their skills and careers. You will work in sprints with data scientists, designers, and engineers to deliver learning technology solutions to market.",
        list1: "Develop and execute proof of concepts (sketches and mockups) and A/B tests that allow us to deliver the most impactful product experiences.",
        list2: "Contribute to the front-end development using React/Redux and other front-end coding frameworks",
        list3: "Actively lead our work on prototyping, information architecture, and work closely with the product managers.",
        list4: "Design user flows and experiences that are incredibly simple, elegant, and humanistic",
        list5: "Provide subject matter expertise to our team and the broader organization on the latest/greatest approaches and tools for UX/UI design",
        list6: "Work collaboratively in cross-functional team design sprints with members inside WWL and across Microsoft.",
        list7: "Communicate progress and opportunities through weekly, monthly, and quarterly business reviews.",
        list8: "Advocate for your design solutions by putting them in context of business and user goals.",
      },
    ],
    requirements: [
      {
        id: "req1",
        minList1: "3+ year(s) of experience in a design, UX/UI focused role using tools such as Invision and Sketch",
        minList2: "3+ year(s) experience with React/Redux, front-end code using HTML/CSS/JS",
        minList3: "3+ year(s) of experience with user experience research methodologies",
        minList4: "Experience with UX design tools with strong experience dealing with React/Redux and other coding frameworks for UX and UI design",
        minList5: "",
        preList1: "Strong background in user experience design and research methodologies",
        preList2: "Ability to find solutions and a path forward even in ambiguous situations",
        preList3: "Excellent oral, written and interpersonal communication skills",
        preList4: "Passion to work under tight deadlines and successfully manage multiple work streams",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s1",
        skill1: "IA and visual design skills",
        skill2: "Wireframing and UI prototyping",
        skill3: "Visual communication",
        skill4: "Interaction design",
        skill5: "HTML5, CSS JavaScript",
        skill6: "Information architecture",
        skill7: "Empathy",
      },
    ],
    contact: [
      {
        id: "c1",
        email: "Microsoft@mail.com",
        number: "3428-392-567",
      },
    ],
  },
  {
    id: "j2",
    image: <img src="/assets/jobcons/ubisoft.png" alt="" />,
    title: "Back-End Programmer",
    company: "Ubisoft",
    city: "Belfast",
    enrolled: new Date("06/25/2020"),
    description: "",

    contract: "Pernament",
    salary: "55,000 - 60,000",
    about: [
      {
        id: "a2",
        title: "Ubisoft",
        information1: "With the largest in-house game development staff in the world, Ubisoft gathers more than 14,000 team members in more than 40 studios around the world. Ubisoft attracts the best and brightest from all continents with talent, creativity & innovation at its core.",
        information2: "Present on 5 continents with more than 40 development studios. An international network with more than 95 nationalities and 55 spoken languages. The biggest in-house creative force in the industry with more than 80% of our teams dedicated to creation.",
        list: "Video Games, Video Game Development, Video Game Production, Video Game Marketing, Video Game Design, Level Design, Programming, Online Programming, Transmedia, Art, Audio, IT, Marketing, Community Management, Production, and Creativity",
        websiteLink: "https://www.ubisoft.com/en-gb/",
        instagramLink: "https://www.instagram.com/ubisoft/?hl=en",
        facebookLink: "https://www.facebook.com/ubisoft/",
        twitterLink: "https://twitter.com/Ubisoft?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r2",
        jobTitle: "Back-End Developer",
        information1: "The back-end developer will be responsible for developing, designing, implementing, testing, deploying and supporting the server-side of web applications, API and services that help improve the effectiveness of the IT team. He will be accountable for the technological choices and performances of systems.",
        information2: "",
        list1: "Actively participate in the design process to create, improve and optimize our solutions, tools and services.",
        list2: "Program in a clear and structured manner that is in keeping with performance, maintenance, modularity, scalability and compatibility requirements.",
        list3: "Document the work to ensure knowledge transfer and proper maintainability of the applications.",
        list4: "Diagnose and resolve technical problems in applications.",
        list5: "Assess performance of technical solutions on a regular basis and optimize systems whenever necessary;",
        list6: "Collaborate with the Front-End developers to facilitate the integration of the front-end items",
        list7: "Collaborate with other units within GNS and across Ubisoft to ensure the efficiency of the systems that are used by other teams",
        list8: "Assimilate business changes and incorporate them in the IT systems and the daily activities;",
      },
    ],
    requirements: [
      {
        id: "req2",
        minList1: "BSc degree in computer science or computer engineering or equivalent.",
        minList2: "Minimum 2-5 years of relevant work experience as Python (preferred) developer for web applications stacks.",
        minList3: "As Python developer: excellent programming knowledge of Python with experience of one Python framework, i.e.: Flask, Django and ORM such as SQLAlchemy",
        minList4: "A basic understanding of Front-End technologies",
        minList5: "",
        preList1: "MSc degree in computer science or computer engineering or equivalent.",
        preList2: "Good knowledge of database design and usage.",
        preList3: "Knowledge of Linux administration and willing to expand his role to support our Online game infrastructure: provisioning, automation scripting",
        preList4: "Knowledge of design patterns and how to efficiently use them.",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s2",
        skill1: "Develop and deliver clean and reusable code",
        skill2: "Ability to solve problems",
        skill3: "Analytical and synthesis skills",
        skill4: "Good interpersonal and communication skills",
        skill5: "Attention to detail",
        skill6: "Results driven",
        skill7: "Ability to adapt to change",
      },
    ],
    contact: [
      {
        id: "c2",
        email: "Ubisoft@mail.com",
        number: "4760-745-098",
      },
    ],
  },
  {
    id: "j3",
    image: <img src="/assets/jobcons/apple.png" alt="" />,
    title: "Product Designer",
    company: "Apple",
    city: "Cork",
    enrolled: new Date("06/23/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "30,000 - 35,000",
    about: [
      {
        id: "a3",
        title: "Apple",
        information1: "We’re a diverse collective of thinkers and doers, continually reimagining what’s possible to help us all do what we love in new ways. The people who work here have reinvented entire industries with the Mac, iPhone, iPad, and Apple Watch, as well as with services, including Apple TV, the App Store, Apple Music, and Apple Pay. And the same innovation that goes into our products also applies to our practices — strengthening our commitment to leave the world better than we found it.",
        information2: "Every new product we invent, service we create, or store we open is the result of people working together to make each other’s ideas stronger. That happens here because every one of us strives toward a common goal — creating the best customer experiences. So bring your passion, courage, and original thinking and get ready to share it. This is where your work can make a difference in people’s lives. Including your own.",
        list: "Innovative Product Development, World-Class Operations, Retail, and Telephone Support",
        websiteLink: "https://www.apple.com/",
        instagramLink: "https://www.instagram.com/apple/?hl=en",
        facebookLink: "https://www.facebook.com/apple/",
        twitterLink: "https://twitter.com/apple?lang=en",
      },
    ],
    overview: [
      {
        id: "r3",
        jobTitle: "Product Designer",
        information1: "Apple’s Applications Group is seeking a Product Designer to work on consumer software applications for the Mac and iOS. You are a brilliant problem solver, quick study, self starter, and excellent communicator with a passion for great design and the ability to achieve it. You possess a rare blend of interaction design, visual design, and prototyping skills. We’ll provide you with unparalleled levels of opportunity and resources, with the goal of creating experiences that influence the industry, as well as people’s lives. By constantly focusing on the consumer, you’ll create products that are not only amazing to look at, but also intuitive and useful to billions of people worldwide. Join this team if you’re committed to making each human interaction — visual, audial, and haptic — amazing for our customers.",
        information2: "",
        list1: "From brainstorming through implementation, the Product Designer will work with members of the Applications design team, as well as our engineering, marketing, and QA groups.",
        list2: "The ability to quickly grasp and distill highly complex matters into clean, understandable solutions",
        list3: "Effective diplomat with strong communication and organizational skills who is willing to prove themselves within a company of talented individuals.",
        list4: "Take part in specialist or multidisciplinary team meetings.",
        list5: "Meet with clients to establish the design brief, including concept, performance and production criteria.",
        list6: "Make samples or working models by hand or using computerised prototyping equipment",
        list7: "Work on ideas as part of a team or developing design concepts using computer-aided design (CAD), being mindful of the client's budget",
        list8: "research materials, processes or market requirements",
      },
    ],
    requirements: [
      {
        id: "req3",
        minList1: "Bsc in human interaction sociology, psychology, interaction design, visual design, or equivalent",
        minList2: "4+ years experience designing desktop applications",
        minList3: "Demonstrable fluency with Photoshop, Illustrator, or other design tools",
        minList4: "Capable of working in a loosely structured organization",
        minList5: "",
        preList1: "Msc in human interaction sociology, psychology, interaction design, visual design, or equivalent",
        preList2: "Expert knowledge of user-centered design principles",
        preList3: "Extraordinary written and verbal communication skills",
        preList4: "Highly professional, with the ability to deliver solid work on tight schedule",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s3",
        skill1: "visual and spatial awareness",
        skill2: "commercial awareness",
        skill3: "communication and customer service skills",
        skill4: "the ability to cope with the pressure of deadlines",
        skill5: "Adobe Suite",
        skill6: "UX/UI skills",
        skill7: "Time Management",
      },
    ],
    contact: [
      {
        id: "c3",
        email: "Apple@mail.com",
        number: "8623-324-765",
      },
    ],
  },
  {
    id: "j4",
    image: <img src="/assets/jobcons/dell.png" alt="" />,
    title: "System Engineer",
    company: "DELL",
    city: "Dublin",
    enrolled: new Date("06/21/2020"),
    description: "",

    contract: "Fixed",
    salary: "35,000 - 40,000",

    //Job Detail Content
    about: [ { id: "a4", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r4", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req4", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s4", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c4", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j5",
    image: <img src="/assets/jobcons/google.png" alt="" />,
    title: "Visual Designer",
    company: "Google",
    city: "Dublin",
    enrolled: new Date("06/17/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "45,000 - 50,000",

    //Job Detail Content
    about: [ { id: "a5", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r5", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req5", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s5", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c5", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j6",
    image: <img src="/assets/jobcons/redhat.png" alt="" />,
    title: "System Administrator",
    company: "Redhat",
    city: "Waterford",
    enrolled: new Date("06/30/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "65,000 - 70,000",

    //Job Detail Content
    about: [ { id: "a6", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r6", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req6", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s6", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c6", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j7",
    image: <img src="/assets/jobcons/pepsi.png" alt="" />,
    title: "IT Associate",
    company: "Pepsi",
    city: "Belfast",
    enrolled: new Date("06/26/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "55,000 - 60,000",

    //Job Detail Content
    about: [ { id: "a7", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r7", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req7", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s7", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c7", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j8",
    image: <img src="/assets/jobcons/microsoft.png" alt="" />,
    title: "Cloud Architect",
    company: "Microsoft",
    city: "Dublin",
    enrolled: new Date("06/03/2020"),
    description: "",

    contract: "Fixed",
    salary: "45,000 - 55,000",

    //Job Detail Content
    about: [ { id: "a8", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r8", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req8", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s8", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c8", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j9",
    image: <img src="/assets/jobcons/redhat.png" alt="" />,
    title: "Service Desk Specialist",
    company: "Red Hat",
    city: "Waterford",
    enrolled: new Date("06/11/2020"),
    description: "",

    contract: "Fixed",
    salary: "60,000 - 65,000",

    //Job Detail Content
    about: [ { id: "a9", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r9", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req9", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s9", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c9", email: "@mail.com", number: "0000-000-000", }, ],
  },
];
const SearchComputing: React.FC = () => {

  //Search Bar implementaion
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState(COMPUTING_DATA);
  useEffect(() => {
    if (searchText === "") {
      setResults(COMPUTING_DATA);
    } else {
      setResults(
        COMPUTING_DATA.filter(
          (item) =>
            item.title.match(searchText) ||
            item.city.match(searchText) ||
            item.company.match(searchText)
        )
      );
    }
  }, [searchText]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Computing</IonTitle>
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
            {/* Mapping created array information into Ionic Components */}
            {results.map((computing) => (
              <IonCol key={computing.id} size-xs="12" size-md="6" size-lg="4">
                <IonCard>
                  <IonList>
                    <IonItem>
                      <IonThumbnail slot="start">
                        {computing.image}
                      </IonThumbnail>
                      <IonButton slot="end" fill="clear" color="primary">
                      <IonIcon icon={bookmarkOutline} slot="icon-only" />
                      </IonButton>
                      <IonLabel className="ion-text-wrap">
                        <IonCardTitle className="font">
                          {computing.title}
                        </IonCardTitle>
                        <IonCardSubtitle>
                          {computing.company} - {computing.city} <br /> Listed
                          on{" "}
                          {computing.enrolled.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })}
                        </IonCardSubtitle>
                      </IonLabel>
                    </IonItem>
                    <IonCardContent className="ion-text-justify">
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. The standard chunk
                      of Lorem Ipsum used since the 1500s is reproduced below
                      for those interested.
                    </IonCardContent>
                    <IonItem lines="full">
                      Contract: {computing.contract}
                    </IonItem>
                    <IonItem lines="none">Salary: {computing.salary}</IonItem>
                    <IonFooter className="ion-text-right">
                      <IonButton
                        fill="clear"
                        routerLink={`/search-computing/${computing.id}`}
                      >
                        View Job
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
export default SearchComputing;
