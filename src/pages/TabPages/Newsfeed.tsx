import React from "react";
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
  IonButtons,
  IonMenuButton,
  IonFooter,
  IonItem,
  IonLabel,
  IonCardTitle,
  IonCardSubtitle,
  IonThumbnail,
  IonList,
  IonIcon,
} from "@ionic/react";
import "./extra.css";
import { heartOutline, bookmarkOutline } from "ionicons/icons";
export const NEWSFEED_DATA = [
  {
    id: "j1",
    image: <img src="/assets/jobcons/google.png" alt="" />,
    title: "Software Engineer",
    company: "Google",
    city: "Dublin",
    enrolled: new Date("08/23/2020"),
    description: "",
    contract: "Pernamnet",
    salary: "45,000 - 50,000",
    about: [
      {
        id: "a1",
        title: "Google",
        information1:
          "Google’s mission is to organize the world‘s information and make it universally accessible and useful.",
        information2:
          "In 1998, we started with two computer science students in a university dorm room and now have thousands of employees in offices around the world. A lot has changed since the first Google search engine appeared. But some things haven’t changed: our dedication to our users and our belief in the possibilities of the Internet itself.",
        list:
          "Search, mobile, android, apps, machine learning, virtual reality, cloud, hardware, artificial intelligence, youtube, and software",
        websiteLink: "https://careers.google.com/",
        instagramLink: "https://www.instagram.com/google/?hl=en",
        facebookLink: "https://www.facebook.com/Google/",
        twitterLink:
          "https://twitter.com/Google?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r1",
        jobTitle: "Software Engineer",
        information1:
          "Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We are looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day.",
        information2:
          "As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.",
        list1:
          "Research, conceive, and develop web applications to extend and improve on Google's product offering. Launch, iterate, and make a difference. Help to make Google products better for our users.",
        list2:
          "Utilize your expertise to engage in and enhance the whole lifecycle of services - to design, develop, test, deploy, maintain, and improve software.",
        list3:
          "Collaborate on scalability issues involving massive amounts of data and information.",
        list4:
          "Manage individual project priorities, deadlines and deliverables.",
        list5:
          "Develop information systems by designing, developing, and installing software solutions.",
        list6:
          "Determine operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.",
        list7:
          "Document and  solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code.",
        list8:
          "Provides information by collecting, analyzing, and summarizing development and service issues.",
      },
    ],
    requirements: [
      {
        id: "req1",
        minList1:
          "BS degree in Computer Science, similar technical field of study or equivalent practical experience.",
        minList2:
          "Software development experience in one or more general purpose programming languages.",
        minList3:
          "Experience working with two or more from the following: web application development, Unix/Linux environments, mobile application development, information retrieval, natural language processing, and/or security software development.",
        minList4:
          "Working proficiency and communication skills in verbal and written English.",
        minList5: "",
        preList1:
          "Master’s, PhD degree, further education or experience in engineering, computer science or other related technical field.",
        preList2:
          "4 years of relevant work experience in software development.",
        preList3:
          "Experience with one or more general purpose programming languages including but not limited to: Java, C/C++, C#, Objective C, Python, JavaScript, or Go, as needed.",
        preList4:
          "Interest and ability to learn other coding languages as needed.",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s1",
        skill1: "Software Development",
        skill2: "Mobile Application Development",
        skill3: "Speech Recognition",
        skill4: "Computer Science",
        skill5: "Diversity",
        skill6: "Artificial Intelligence",
        skill7: "Programming",
      },
    ],
    contact: [
      {
        id: "c1",
        email: "Google@Gmail.com",
        number: "1850-664-656",
      },
    ],
  },
  {
    id: "j2",
    image: <img src="/assets/jobcons/xiaomi.png" alt="" />,
    title: "Graphic Designer",
    company: "Xiaomi",
    city: "Cork",
    enrolled: new Date("08/21/2020"),
    description: "",
    contract: "Fixed",
    salary: "30,000 - 35,000",
    about: [
      {
        id: "a2",
        title: "Xiaomi",
        information1:
          "Xiaomi was founded in 2010 by serial entrepreneur Lei Jun, who believes that high-quality technology doesn't need to cost a fortune. We create remarkable hardware, software, and Internet services for and with the help of our users. Our marketing strategy is not conventional—we believe in being the coolest company in the hearts of our users, and for us, marketing strategy needs to be out-of-the-box and ambitious, but also highly focused on driving results.",
        information2:
          "Xiaomi LATAM’s Marketing Team is a highly agile and creative group of enthusiastic marketers and tech lovers. We are seeking an experienced professional with a sense of fun to join our team to as the Designer for Xiaomi Colombia, a fast-growing, new market for Xiaomi LATAM.",
        list:
          "Mobile, development, telecommunications, product design, engineering, tech, software development, electronics",
        websiteLink: "http://www.mi.com",
        instagramLink: "https://www.instagram.com/xiaomi.global/?hl=en",
        facebookLink: "https://www.facebook.com/XiaomiGlobal/",
        twitterLink:
          "https://twitter.com/Xiaomi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r2",
        jobTitle: "Graphic Designer",
        information1:
          "As a core member of the Xiaomi Global team based in Bogotá, the Designer will be primarily responsible for supporting the marketing team with design conceptualization, creation, and localization.",
        information2:
          "They will need to be responsible for on-time execution of design requests, and also contribute creative ideas and concept to support the goals of the marketing team. Their goal is to help Xiaomi have high-quality, localized, and creative designs for traditional marketing as well as content marketing.",
        list1:
          "Cooperate with relevant departments to complete product promotions and operations",
        list2:
          "Responsible for maintaining and updating Xiaomi’s branding guidelines",
        list3: "Provide design support based on various departments’ needs",
        list4:
          "From an advertiser’s perspective, create shareable content for Xiaomi’s",
        list5:
          "social media, community, and e-commerce platforms in video, photo, and other formats",
        list6:
          "Drawing skills/Illustration or video editing will be an added bonus.",
        list7:
          "Creation of aesthetic & effective visual designs for campaigns and other internal design",
        list8:
          " Needs to be able to maintain consistency and neatness in all design outputs Has to have a strong sense of Design quality and pixel perfection",
      },
    ],
    requirements: [
      {
        id: "req2",
        minList1: "Bachelors Degree in Graphic Design",
        minList2:
          "+5 years of experience working as an in-house designer or for a creative agency",
        minList3: "Good English communication ability",
        minList4:
          "Proficiency in various modes of design expression to convey information accurately",
        minList5: "Good eye for aesthetics, keen visual sense",
        preList1: "Msc in Digital Design",
        preList2:
          "Experience in creative advertising preferred. Must have ability to suggest innovative, suitable creative ideas from a brief, in both static and dynamic formats",
        preList3:
          "Strong ability to work in a team. Ability to cooperate with design teams at headquarters and in different regions to complete projects",
        preList4:
          "Mastery of Photoshop Illustrator and other software; some level of hand illustration ability",
        preList5:
          "Strong artistic foundations; strong comprehension and creative skills",
      },
    ],
    skills: [
      {
        id: "s2",
        skill4: "Excellent accuracy and attention to detail",
        skill5: "Exceptional creativity and innovation",
        skill6: "Time management",
        skill2: "Communication",
        skill7: "Multitasking",
        skill1: "Adobe Suite",
        skill3: "Autodesk",
      },
    ],
    contact: [
      {
        id: "c2",
        email: "Xiaomi@mail.com",
        number: "7341-372-897",
      },
    ],
  },
  {
    id: "j3",
    image: <img src="/assets/jobcons/hdr.png" alt="" />,
    title: "Quality Manager",
    company: "HDR",
    city: "Dublin",
    enrolled: new Date("08/19/2020"),
    description: "",
    contract: "Pernament",
    salary: "65,000 - 75,000",
    about: [
      {
        id: "a3",
        title: "HDR",
        information1:
          "HDR is an employee-owned design firm specializing in engineering, architecture, environmental and construction services. We’re ranked No. 6 among the world’s design firms and we’re the largest healthcare design firm. We’re also proud to be ranked No. 35 on Forbes magazine’s list of America’s Best Large Employers for 2019. Led by the strength of our values and a culture shaped by employee ownership, we network with each other, build on each other’s contributions, and collaborate together to make great things possible.",
        information2:
          "When you join HDR, we give you license to do the same. We help you take charge of your career, giving you multiple growth opportunities along the way. So, what are you waiting for? Come grow with us.",
        list:
          "engineering, consulting, architecture, planning, mechanical, drinking water, healthcare, oil and gas, power, energy, science & technology, transportation, waste management, wastewater and reuse, resource mgmt, water resources & fisheries, interior design, and military design",
        websiteLink: "https://www.hdrinc.com/",
        instagramLink: "https://www.instagram.com/hdr_inc/?hl=en",
        facebookLink: "https://www.facebook.com/hdrinc/",
        twitterLink:
          "https://twitter.com/HDR_Inc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r3",
        jobTitle: "Quality Manager",
        information1:
          "We are currently seeking a Quality Manager to join our team in London, UK. HDR focuses on a variety of building types ranging from healthcare, science, technology, workplace and civic facilities.",
        information2:
          "We are after a natural leader with top-notch communication skills. A technical expert in mechanical and electrical system, having a keen eye for details and a desire to produce quality work, to enjoy managing the entire commissioning process from inception to completion. You must be passionate about working with clients to ensure all mechanical and electrical systems follow a rigorous QA process to be in compliance with government and regulatory standards. If you are looking for an opportunity where you can lead a team on commissioning practices- we are looking for you!",
        list1:
          "Delivering project quality requirement in full accordance with our appointment to include technical compliance to project specification.",
        list2: "Managing and reporting project change to QA/QC requirements.",
        list3:
          "Accountability for the quality of service, delivery, and management of client expectations for all aspects of QA/QC.",
        list4:
          "Full compliance with project related safety as long as it relates to our work.",
        list5:
          "Providing positive and effective management and setting an appropriate example to other members of the team.",
        list6:
          "Working diligently, efficiently, and professionally at all times.",
        list7:
          "Fully adopting and complying with the company's project, internal management, and quality systems.",
        list8:
          "Issuing regular reports (weekly/monthly) on quality inspections, issues identified, and overall progress.",
      },
    ],
    requirements: [
      {
        id: "req3",
        minList1: "5-10+ years of industry experience working with QA/QC Management",
        minList2: "Minimum 2 years experience in a supervisory role.",
        minList3: "Excellent verbal and written communication skills",
        minList4: "",
        minList5: "",
        preList1: "Certified QA/QC professional by an accredited agency",
        preList2: "LEED, or LEED AP certified",
        preList3: "Engineering degree or equivalent qualification.",
        preList4: "",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s3",
        skill1: "Organizational",
        skill2: "Time management",
        skill3: "Problem solving",
        skill4: "Communication",
        skill5: "Interpersonal",
        skill6: "Leadership",
        skill7: "Networking",
      },
    ],
    contact: [
      {
        id: "c3",
        email: "HDR@mail.com",
        number: "4630-851-876",
      },
    ],
  },
];
export const NEWSFEED_DATA2 = [
  {
    id: "j4",
    image: <img src="/assets/jobcons/fb.png" alt="" />,
    title: "Policy Director",
    company: "Facebook",
    city: "Cork",
    enrolled: new Date("08/17/2020"),
    description: "",
    contract: "Fixed",
    salary: "95,000 - 100,000",

    //Job Detail Content
    about: [ { id: "a4", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r4", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req4", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s4", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c4", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j5",
    image: <img src="/assets/jobcons/teva.png" alt="" />,
    title: "Biological Researcher",
    company: "teva",
    city: "Waterford",
    enrolled: new Date("08/15/2020"),
    description: "",
    contract: "Pernament",
    salary: "45,00 -50,000",

    //Job Detail Content
    about: [ { id: "a5", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r5", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req5", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s5", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c5", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j6",
    image: <img src="/assets/jobcons/adobe.jpg" alt="" />,
    title: "Experience Designer",
    company: "Adobe",
    city: "Cork",
    enrolled: new Date("08/13/2020"),
    description: "",
    contract: "Fixed",
    salary: "35,000 - 40,000",

    //Job Detail Content
    about: [ { id: "a6", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r6", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req6", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s6", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c6", email: "@mail.com", number: "0000-000-000", }, ],
  },
];
export const NEWSFEEDC_DATA = [
  {
    id: "j1",
    image: <img src="/assets/jobcons/avatarf.png" alt="" />,
    name: "Bronagh O'Herlihy",
    role: "Accountant",
    location: "Galway",
    description: "",
    experience: "Intermediate",

    status: "Graduate",

    about: [  {id: "a1", name: "", rtitle: "", information: "", list: "", pr: "",}, ],
    education: [ {id: "e1", education1: "", course1: "", duration1: "", education2: "", course2: "", duration2: "",}, ],
    skills: [ {id: "s1", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "",}, ],
    experiences: [ {id: "ex1", exTitle1: "", exCName1: "", exDuration1: "", exDescription1: "", exTitle2: "", exCName2: "", exDuration2: "", exDescription2: "",}, ],
    contact: [ {id: "c1", email: "@mail.com", number: "0000-000-000",}, ],
  },
  {
    id: "j2",
    image: <img src="/assets/jobcons/avatarm.jpg" alt="" />,
    name: "Sheldon Power",
    role: "Digital Media Creator",
    location: "Galway",
    description: "",
    experience: "Advanced",

    status: "Searching",

    about: [  {id: "a2", name: "", rtitle: "", information: "", list: "", pr: "",}, ],
    education: [ {id: "e2", education1: "", course1: "", duration1: "", education2: "", course2: "", duration2: "",}, ],
    skills: [ {id: "s2", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "",}, ],
    experiences: [ {id: "ex2", exTitle1: "", exCName1: "", exDuration1: "", exDescription1: "", exTitle2: "", exCName2: "", exDuration2: "", exDescription2: "",}, ],
    contact: [ {id: "c2", email: "@mail.com", number: "0000-000-000",}, ],
  },
  {
    id: "j3",
    image: <img src="/assets/jobcons/avatarf.png" alt="" />,
    name: "Ciara Dowling",
    role: "Database Administrator",
    location: "Galway",
    description: "",
    experience: "Intermediate",

    status: "Searching",

    about: [  {id: "a3", name: "", rtitle: "", information: "", list: "", pr: "",}, ],
    education: [ {id: "e3", education1: "", course1: "", duration1: "", education2: "", course2: "", duration2: "",}, ],
    skills: [ {id: "s3", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "",}, ],
    experiences: [ {id: "ex3", exTitle1: "", exCName1: "", exDuration1: "", exDescription1: "", exTitle2: "", exCName2: "", exDuration2: "", exDescription2: "",}, ],
    contact: [ {id: "c3", email: "@mail.com", number: "0000-000-000",}, ],
  },
];
const Newsfeed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Newsfeed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {NEWSFEED_DATA.map((newsfeed1) => (
              <IonCol key={newsfeed1.id} size-xs="12" size-md="6" size-lg="4">
                <IonCard>
                  <IonList>
                    <IonItem>
                      <IonThumbnail slot="start">{newsfeed1.image}</IonThumbnail>
                      <IonButton slot="end" fill="clear" color="primary">
                      <IonIcon icon={bookmarkOutline} slot="icon-only" />
                      </IonButton>
                      <IonLabel className="ion-text-wrap">
                        <IonCardTitle className="font">
                          {newsfeed1.title}
                        </IonCardTitle>
                        <IonCardSubtitle>
                          {newsfeed1.company} - {newsfeed1.city} <br /> Listed on{" "}
                          {newsfeed1.enrolled.toLocaleDateString("en-US", {
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
                      Contract: {newsfeed1.contract}
                    </IonItem>
                    <IonItem lines="none">Salary: {newsfeed1.salary}</IonItem>
                    <IonFooter className="ion-text-right">
                      <IonButton
                        fill="clear"
                        routerLink={`/newsfeed/${newsfeed1.id}`}
                      >
                        View Job
                      </IonButton>
                    </IonFooter>
                  </IonList>
                </IonCard>
              </IonCol>
            ))}
            {NEWSFEEDC_DATA.map((connections) => (
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
                        routerLink={`/newsfeedC/${connections.id}`}
                      >
                        View Connection
                      </IonButton>
                    </IonFooter>
                  </IonList>
                </IonCard>
              </IonCol>
            ))}
            {NEWSFEED_DATA2.map((newsfeed2) => (
              <IonCol key={newsfeed2.id} size-xs="12" size-md="6" size-lg="4">
                <IonCard>
                  <IonList>
                    <IonItem>
                      <IonThumbnail slot="start">
                        {newsfeed2.image}
                      </IonThumbnail>
                      <IonButton slot="end" fill="clear" color="primary">
                      <IonIcon icon={bookmarkOutline} slot="icon-only" />
                      </IonButton>
                      <IonLabel className="ion-text-wrap">
                        <IonCardTitle className="font">
                          {newsfeed2.title}
                        </IonCardTitle>
                        <IonCardSubtitle>
                          {newsfeed2.company} - {newsfeed2.city} <br /> Listed
                          on{" "}
                          {newsfeed2.enrolled.toLocaleDateString("en-US", {
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
                      Contract: {newsfeed2.contract}
                    </IonItem>
                    <IonItem lines="none">Salary: {newsfeed2.salary}</IonItem>
                    <IonFooter className="ion-text-right">
                      <IonButton
                        fill="clear"
                        routerLink={`/newsfeed2/${newsfeed2.id}`}
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
export default Newsfeed;
