import React, { useState, useEffect } from "react";
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

//Array for all "Job Card Lists" & "Job Page details" infromation within the Engineering section.
export const ENGINEERING_DATA = [
  {
    id: "j1",
    image: <img src="/assets/jobcons/apple.png" alt="" />,
    title: "Test Engineer",
    company: "Apple",
    city: "Cork",
    enrolled: new Date("11/28/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "37,000 - 43,000",
    about: [
      {
        id: "a1",
        title: "Apple",
        information1:
          "We’re a diverse collective of thinkers and doers, continually reimagining what’s possible to help us all do what we love in new ways. The people who work here have reinvented entire industries with the Mac, iPhone, iPad, and Apple Watch, as well as with services, including Apple TV, the App Store, Apple Music, and Apple Pay. And the same innovation that goes into our products also applies to our practices — strengthening our commitment to leave the world better than we found it.",
        information2:
          "Every new product we invent, service we create, or store we open is the result of people working together to make each other’s ideas stronger. That happens here because every one of us strives toward a common goal — creating the best customer experiences. So bring your passion, courage, and original thinking and get ready to share it. This is where your work can make a difference in people’s lives. Including your own.",
        list:
          "Innovative Product Development, World-Class Operations, Retail, and Telephone Support",
        websiteLink: "https://www.apple.com/",
        instagramLink: "https://www.instagram.com/apple/?hl=en",
        facebookLink: "https://www.facebook.com/apple/",
        twitterLink: "https://twitter.com/apple?lang=en",
      },
    ],
    overview: [
      {
        id: "r1",
        jobTitle: "Test Engineer",
        information1:
          "We are looking for an extraordinary engineer looking to take the next step in their careers. We are responsible for providing & coordinating manufacturing support, quality improvements, process improvements and cost reductions to all activities performed by Cork, EMEA & manufacturing distribution centre operations. We work with the EMEIA and Global teams to ensure our testing strategy and processes are best in class. You will work with multi-functional teams to implement new test processes and to ensure efficiency across the testing environment.",
        information2:
          "You will become part of a hands-on testing and development engineering team that fosters engineering excellence, creativity and innovation. Ideally, you have a strong testing and/or development experience. However, if you are an Electrical Engineer with some development experience, then you are encouraged to apply. Travel to our international partners will be required, mainly across the EMEIA region.",
        list1:
          "You will build, maintain and improve process across our wider testing framework and work with Worldwide internal partners to ensure global consistency and standard methodology.",
        list2:
          "Strive for continuous process improvement and optimisation, driving key performance metrics (Yield, UPH, Order Cycle Time, Cost, Scrap, DPPM, CPK etc.)",
        list3:
          "Creation, testing & maintenance of factory test software for Apple Mac and iOS products",
        list4:
          "Test process design, development and implementation, including automated product testing",
        list5:
          "Provide direction and support to Regional technical support teams",
        list6: "Data analysis",
        list7: "Compile and maintain documentation creation and release",
        list8: "Participate in new projects for global implementation",
      },
    ],
    requirements: [
      {
        id: "req1",
        minList1:
          "Bachelors degree in Engineering, Electrical or Computer Science",
        minList2:
          "3+ years experience in a Test Engineering and/or development environment or in a high volume manufacturing plant",
        minList3:
          "Being comfortable with working on hardware/software testing technologies",
        minList4: "Software development/programming skills",
        minList5: "",
        preList1: "MSc degree in Engineering, Electrical or Computer Science",
        preList2: "Familiarity with Apple hardware and software technologies",
        preList3: "Background in Acoustics testing",
        preList4: "Being able to work independently and should be dedicated",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s1",
        skill1: "Hardware failure analysis skills",
        skill2: "Strong communication skills",
        skill3: "Strong documentation skills",
        skill4: "Strong Analytical skills",
        skill5: "UNIX shell, Perl or Python",
        skill6: "Project Management",
        skill7: "Problem Solving",
      },
    ],
    contact: [
      {
        id: "c1",
        email: "Apple@mail.com",
        number: "3243-672-391",
      },
    ],
  },
  {
    id: "j2",
    image: <img src="/assets/jobcons/aws.png" alt="" />,
    title: "Mechanical Engineer",
    company: "Amazon",
    city: "Donegal",
    enrolled: new Date("11/25/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "55,000 - 65,000",
    about: [
      {
        id: "a2",
        title: "Amazon",
        information1:
          "Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We are driven by the excitement of building technologies, inventing products, and providing services that change lives. We embrace new ways of doing things, make decisions quickly, and are not afraid to fail. We have the scope and capabilities of a large company, and the spirit and heart of a small one.",
        information2:
          "Together, Amazonians research and develop new technologies from Amazon Web Services to Alexa on behalf of our customers: shoppers, sellers, content creators, and developers around the world. Our mission is to be Earth's most customer-centric company. Our actions, goals, projects, programs, and inventions begin and end with the customer top of mind.",
        list: "e-Commerce, Retail, Operations, and Internet",
        websiteLink: "https://www.amazon.com/",
        instagramLink: "https://www.instagram.com/amazon/?hl=en",
        facebookLink: "https://www.facebook.com/Amazon/",
        twitterLink: "https://twitter.com/amazon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r2",
        jobTitle: "Mechanical Engineer",
        information1:
          "Amazon Web Services is seeking a Mechanical Design Engineer to become part of a global engineering team, responsible for the design and continuous innovation of our rapidly expanding data center foot print. Engineers at Amazon work to design resilient, cost effective mechanical services systems. As engineers at Amazon we are responsible for achieving a world class uptime for our customers. We justify and communicate the technical decisions we make to senior management and work hard to drive continuous advancements and improvements with our designs. As an engineer at Amazon you have the ability to drive change and define/design the systems our customers rely on. Amazon offers a fast paced, fun, and exciting work environment. We continue to grow at exponential rates and are looking for individuals that can support our speed to market, enjoy a challenge, and have a desire for professional growth and continuous learning experiences. Amazons work environment is unique in every aspect and offers an exceptional opportunity for the right candidate.",
        information2:
          "We are looking for engineers with hands on project management and mechanical design experience. If you can design a mechanical system, have an understanding of the critical equipment needs for a data center, and understand the constructability of varying designs you may be a good fit. Engineers will be responsible for leading design consultants for new AWS regions projects by delivering designs from concept to the permit and construction document set. You must be capable of defining critical equipment specifications and approving equipment submittals. Engineers will directly support construction and be a part of the process from site selection review through commissioning and ultimately turnover. You will be relied on as a subject matter expert in your field. At Amazon we support continued learning opportunities and focus on continued employee development.",
        list1:
          "Be a leader within the group as well as within internal and external teams that support our data centers.",
        list2:
          "Work with internal teams to understand user requirements. Participate in site selection reviews",
        list3:
          "Manage design consultancy firms to create, review and release data center designs",
        list4:
          "Manage change, versioning and configuration control, work with local utilities to understand and define site utility requirements.",
        list5:
          "Define and approval of project scopes, request for proposals (RFP) and request for information (RFI).",
        list6:
          "Work with commissioning teams to validate installation, operation, and performance of systems",
        list7:
          "Work with internal teams to trouble shoot problems and conduct Root Cause Analysis (RCA) and Corrective Action (CA) for design related problems",
        list8:
          "Define project scopes and provide technical support for information requests during construction phases.",
      },
    ],
    requirements: [
      {
        id: "req2",
        minList1:
          "Degree in Mechanical Engineering with 4+ years of experience with mission critical air and water cooling HVAC design",
        minList2:
          "Ability to research new designs, technologies, and construction methods of data center equipment and facilities.",
        minList3:
          "Ability to carry new design concepts through exploration, development, and into deployment/construction.",
        minList4:
          "The ability to perform complex business case analysis to justify technical decisions and present the justification to management in a high level review.",
        minList5: "",
        preList1:
          "Chartered Engineer with a Master’s degree in Mechanical Engineering.",
        preList2:
          "Experience directly related to data center or mission critical facility design and understanding of BIM & CFD modelling",
        preList3:
          "Previous consultant negotiation and management skills associated with design, construction and project execution.",
        preList4:
          "Experience with fast track design/build projects and or multiple significant upgrade projects with large scale technical operations or large-scale compute farms.",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s2",
        skill1: "communication skills",
        skill2: "Attention to detail",
        skill3: "Leadership skills",
        skill4: "Problem solving skills",
        skill5: "Outstanding technical knowledge",
        skill6: "High level of IT knowledge",
        skill7: "Project management skills",
      },
    ],
    contact: [
      {
        id: "c2",
        email: "Amazon@mail.com",
        number: "7834-239-832",
      },
    ],
  },
  {
    id: "j3",
    image: <img src="/assets/jobcons/jacobs.png" alt="" />,
    title: "Process Safety Engineer",
    company: "Jacob's",
    city: "Waterford",
    enrolled: new Date("11/22/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "70,000 - 75,000",
    about: [
      {
        id: "a3",
        title: "Jacob's",
        information1: "At Jacobs we deliver impactful global solutions to create a more connected, sustainable world — from intelligence to infrastructure, cybersecurity to space exploration. Our 52,000 employees across 50 countries work every day, challenging the expectations of today to reinvent the way we’ll all live tomorrow.",
        information2: "What drives you drives us as we work to build a better world – together. At Jacobs, every day is an opportunity to make the world better, more connected, more sustainable.  We’re always looking for dynamic and engaged people to join our team. Bring your passion, your ingenuity and your vision. Let’s see the impact we can create, together.",
        list: "Architecture and Interiors, Operations and Maintenance, Construction, Planning and Consulting, Engineering, Procurement, Environmental, Program and Construction Management, Information Technology, Scientific Research & Testing, and Cyber security",
        websiteLink: "https://www.jacobs.com/",
        instagramLink: "https://www.instagram.com/jacobsbiscuits/?hl=en",
        facebookLink: "https://www.facebook.com/JacobsConnects/",
        twitterLink: "https://twitter.com/JacobsConnects?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r3",
        jobTitle: "Process Safety Engineer",
        information1: "The successful candidate will enjoy working on multiple large-scale pharmaceutical, medtech and food projects in the Irish and international markets. The role is both office and site based. Depending on the successful candidates’ preference, this opportunity can be permanent or on a contract basis.",
        information2: "",
        list1:
          "Developing and implementing the Design Health Safety and Environmental Plans for projects in order to ensure compliance with local legislation, Jacobs & client company's standards and industry best practices.",
        list2:
          "Providing guidance and support to relevant stakeholders (clients and Jacobs disciplines) on all aspects for Process Safety & Environmental.",
        list3:
          "Liaising with regulatory authorities (e.g. IED Licences) on behalf of client/project.",
        list4:
          "Chair and document process and equipment hazop assessments (HAZOP, SWIFT & HAZID) and other process safety related risk assessments (e.g. LOPA)",
        list5:
          "Supporting execution of process studies e.g. Hazardous Area Classification, Potent Material Handling, Fire Water Containment studies",
        list6:
          "Development of man hour estimates to facilitate new project bid exercises",
        list7:
          "Preparing Process Safety and Environmental training materials and delivery of training.",
        list8: "Completion of Gas Asphyxiation calculations",
      },
    ],
    requirements: [
      {
        id: "req3",
        minList1: "Bsc degree in Chemical Engineering",
        minList2: "Minimum 3 years of GMP experience with design or operations in pharma, biopharma or gene therapy",
        minList3: "Engineer-In-Training (EIT) desired, but not mandatory",
        minList4: "Knowledge and experience of ATEX/EPD",
        minList5: "",
        preList1: "Msc degree in Chemical Engineering",
        preList2: "Work experience within the Industry",
        preList3: "Experience on supporting multiple activities/projects",
        preList4: "Experience of chairing Process Safety Reviews e.g. HAZOP & LOPA",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s3",
        skill1: "Analytical Thinking.",
        skill2: "Chemistry Knowledge.",
        skill3: "Engineering Principles.",
        skill4: "Environmental Regulations.",
        skill5: "Health, Safety and Environment Practices.",
        skill6: "Mechanical Tools, Equipment, and Systems.",
        skill7: "Safety Regulations and Procedures.",
      },
    ],
    contact: [
      {
        id: "c3",
        email: "Jacobs@mail.com",
        number: "1879-487-074",
      },
    ],
  },
  {
    id: "j4",
    image: <img src="/assets/jobcons/analog.png" alt="" />,
    title: "Design Engineer",
    company: "Analog",
    city: "Cork",
    enrolled: new Date("11/19/2020"),
    description: "",

    contract: "Fixed",
    salary: "55,000 - 60,000",

    //Job Detail Content
    about: [ { id: "a4", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r4", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req4", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s4", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c4", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j5",
    image: <img src="/assets/jobcons/dfl.png" alt="" />,
    title: "Project Architect",
    company: "DFL",
    city: "Waterford",
    enrolled: new Date("11/16/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "40,000 - 45,000",

    //Job Detail Content
    about: [ { id: "a5", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r5", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req5", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s5", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c5", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j6",
    image: <img src="/assets/jobcons/kp.jpg" alt="" />,
    title: "Registered Architect",
    company: "GPC",
    city: "Donegal",
    enrolled: new Date("11/13/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "50,000 - 55,000",

    //Job Detail Content
    about: [ { id: "a6", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r6", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req6", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s6", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c6", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j7",
    image: <img src="/assets/jobcons/aws.png" alt="" />,
    title: "Construction Manager",
    company: "Amazon",
    city: "Donegal",
    enrolled: new Date("11/10/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "70,000 - 80,000",

    //Job Detail Content
    about: [ { id: "a7", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r7", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req7", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s7", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c7", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j8",
    image: <img src="/assets/jobcons/dfl.png" alt="" />,
    title: "Mechanical Engineer",
    company: "DFL",
    city: "Waterford",
    enrolled: new Date("11/07/2020"),
    description: "",

    contract: "Fixed",
    salary: "65,000 - 70,000",

    //Job Detail Content
    about: [ { id: "a8", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r8", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req8", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s8", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c8", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j9",
    image: <img src="/assets/jobcons/aws.png" alt="" />,
    title: "Solutions Architect",
    company: "Amazon",
    city: "Donegal",
    enrolled: new Date("11/03/2020"),
    description: "",

    contract: "Fixed",
    salary: "55,000 - 60,000",

    //Job Detail Content
    about: [ { id: "a9", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r9", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req9", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s9", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c9", email: "@mail.com", number: "0000-000-000", }, ],
  },
];
const SearchEngineering: React.FC = () => {

  //Search Bar implementaion
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState(ENGINEERING_DATA);
  useEffect(() => {
    if (searchText === "") {
      setResults(ENGINEERING_DATA);
    } else {
      setResults(
        ENGINEERING_DATA.filter(
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
          <IonTitle>Engineering</IonTitle>
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
            {results.map((engineering) => (
              <IonCol key={engineering.id} size-xs="12" size-md="6" size-lg="4">
                <IonCard>
                  <IonList>
                    <IonItem>
                      <IonThumbnail slot="start">
                        {engineering.image}
                      </IonThumbnail>
                      <IonButton slot="end" fill="clear" color="primary">
                      <IonIcon icon={bookmarkOutline} slot="icon-only" />
                      </IonButton>
                      <IonLabel className="ion-text-wrap">
                        <IonCardTitle className="font">
                          {engineering.title}
                        </IonCardTitle>
                        <IonCardSubtitle>
                          {engineering.company} - {engineering.city} <br />{" "}
                          Listed on{" "}
                          {engineering.enrolled.toLocaleDateString("en-US", {
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
                      Contract: {engineering.contract}
                    </IonItem>
                    <IonItem lines="none">Salary: {engineering.salary}</IonItem>
                    <IonFooter className="ion-text-right">
                      <IonButton
                        fill="clear"
                        routerLink={`/search-engineering/${engineering.id}`}
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
export default SearchEngineering;
