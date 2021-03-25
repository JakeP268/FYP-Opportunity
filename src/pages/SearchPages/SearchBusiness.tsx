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

//Array for all "Job Card Lists" & "Job Page details" infromation within the Business section.
export const BUSINESS_DATA = [
  {
    id: "j1",
    image: <img src="/assets/jobcons/esb.jpg" alt="" />,
    title: "Project Manager",
    company: "ESB",
    city: "Dublin",
    enrolled: new Date("03/11/2020"),
    description: "",

    contract: "Pernament",
    salary: "55,000 - 65,000",
    about: [
      {
        id: "a1",
        title: "ESB",
        information1:
          "At ESB, we believe in a Brighter Future. We believe that electricity is an enabler of societal and economic well-being and that every citizen should have access to secure, sustainable and affordable electricity supplies. Since our establishment in 1927, we have worked to bring light and energy to the people of Ireland, allowing individuals and communities to fulfil their potential in whatever walk of life they are in. Today, we continue to drive progress and change, constantly innovating and evolving to stay relevant and reliable for the many people who depend on us. For us, it's not about short term gains. We are driven by a desire to put in place solutions today that will leave a positive legacy for generations to come. ",
        information2:
          "We are harnessing all our resources for a brighter future, investing in our people and working collaboratively with partners to enhance the lives of our customers, drive economic progress and bring about a more sustainable future. We strive to be a safety leader in our industry, a world-class operator, a good corporate citizen and an employer of a smart, committed and healthy workforce. We strive to be a safety leader in our industry, a world-class operator, a good corporate citizen and an employer of a smart, committed and healthy workforce. ",
        list:
          "energy, renewables, power generation, customer supply, global engineering, wind energy, solar energy, utilities, renewables, innovation, electricity, smart energy technologies, sustainable energy solutions, energy provider, energy services, electricity, and natural gas",
        websiteLink: "https://www.esb.ie/",
        instagramLink: "https://www.instagram.com/esbnetworks/?hl=en",
        facebookLink: "https://www.facebook.com/ESBInternational/",
        twitterLink:
          "https://twitter.com/ESBNetworks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r1",
        jobTitle: "Project Manager",
        information1:
          "We are seeking a Project Manager to join our team, they will be work on the delivery of energy efficiency projects and energy centres in conjunction with the Service Delivery Team from concept to completion and handover both on behalf of ESB and external customers. They will be responsible for delivering the best technical and commercial solution to meet their needs. They will also be required to engage with our internal teams and also customers to advise on the design, installation and maintenance of cost-effective and energy efficient systems for building services. The type of projects will include mechanical & electrical installations such as heat pumps, CHP's, boilers, chillers heat recovery etc, building management systems, pumping & water systems, generation and storage (battery) solutions, lighting, etc.",
        information2:
          "The successful candidate will be expected to deliver a strong safety culture and demonstrate technical knowledge in the area of building services, energy efficiency and project with an eye for detail and good design solutions. This is an excellent opportunity for an individual to join a team working in the growing business of energy efficiency and carbon reduction.",
        list1:
          "Planning and delivering aspects of customer propositions from proposal acceptance to completion and handover in cooperation with the customer and contractors",
        list2:
          "Having an overview of multiple projects and supporting project teams",
        list3:
          "Reinforcing principles of Project Management and reporting on progress",
        list4:
          "Coordinating contractors who are delivering small and medium to large scale projects which may be located over several client sites",
        list5:
          "Monitoring progress and quality in general and reporting on same",
        list6:
          "Engaging with client representatives, project partners & contractors",
        list7:
          "Ensuring all work is recorded and handed over to client in a timely manner",
        list8:
          "Carrying out audits (safety, environmental and quality) on the works",
      },
    ],
    requirements: [
      {
        id: "req1",
        minList1:
          "Degree level qualification in Energy Management or equivalent work experience",
        minList2:
          "5 years' experience in project delivery and energy efficiency and/or building services",
        minList3:
          "A proven ability to develop and manage the implementation of technical installations",
        minList4:
          "An ability to manage and deliver projects to public and private sector customers",
        minList5: "",
        preList1:
          "Experience of facility and/or asset management, Operation and Maintenance",
        preList2:
          "Project Management & Delivery including contractor management",
        preList3: "Experience of energy efficiency design and installation",
        preList4:
          "ISO 50001 implementation and SI 426 or Investment Grade Auditing experience",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s1",
        skill1: "Interpersonal",
        skill2: "Leadership",
        skill3: "Communications",
        skill4: "Time management",
        skill5: "Problem Solving",
        skill6: "Teamwork",
        skill7: "Networking",
      },
    ],
    contact: [
      {
        id: "c1",
        email: "ESB@mail.com",
        number: "1352-324-789",
      },
    ],
  },
  {
    id: "j2",
    image: <img src="/assets/jobcons/axa.png" alt="" />,
    title: "Entry Financial Advisor",
    company: "AXA",
    city: "Clonmel",
    enrolled: new Date("03/19/2020"),
    description: "",
    experience: "Entry",
    contract: "Fixed",
    salary: "25,000 - 35,000",
    about: [
      {
        id: "a2",
        title: "AXA",
        information1:
          "Advice from a trusted financial professional can help people make better financial decisions, achieve goals and prepare for life’s changes. Whether you choose an AXA Advisors financial professional or one from another firm, they should have the facts, research, insights and strategies to help you work toward your goals. Should you choose to work with an AXA Advisors financial professional, they’ll work with you however you feel most comfortable, and break down financial concepts and decisions into small, manageable steps. Are you interested in becoming an AXA Advisors financial professional? For years, our financial professionals have taken the human approach​ to helping their clients safeguard their families’ finances and provide retirement advice. Making a meaningful contribution to your community and to the world is something that we are all called to do. Choosing a company to help you as you build your success is a big decision.",
        information2:
          "We are a growing network of more than 5,000 financial professionals throughout America who connect consumers and businesses in their communities with investment products and other financial products and services to help them address the futures they build for themselves and their families.",
        list:
          "Retirement, Investing, Life Insurance, Annuities, College Savings, and Financial Professional",
        websiteLink: "https://equitable.com/",
        instagramLink: "https://www.instagram.com/axa/?hl=en",
        facebookLink: "https://www.facebook.com/axa/",
        twitterLink:
          "https://twitter.com/AXA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r2",
        jobTitle: "Entry Financial Advisor",
        information1:
          "The Financial Professional is an independent position that provides entry level professionals the opportunity to build their own business and financial success potential by helping individuals and families make strong financial decisions to impact their future positively. The amount of support we provide for our Financial Professionals is unparalleled in the industry. We make the route to success very easy if you have the drive and motivation to make it happen. While other companies may throw their new employees into the fire and hope that a handful succeed, we believe in the people that we hire and will work with them constantly until they are ready to take the reins of their business and go full speed ahead.",
        information2:
          "As a Financial Professional, you will be primarily focused on growing your own financial services practice with the support and strength of one of the nation’s leading financial services firms. The work environment is fast paced, energetic and enthusiastic and is ideal for likeminded individuals. At our AXA Advisors Southwest Branch, we have fun while working hard. We strongly believe in fostering a creative atmosphere and want employees to enjoy their time at the office. ",
        list1:
          "Building and maintaining a client base, keeping current client strategies up-to-date and acquiring new clients on an ongoing basis.",
        list2:
          "Meeting with prospective clients to determine their current income, expenses, insurance coverage, tax status, financial objectives, risk tolerance, and other information needed to develop a customized financial strategy.",
        list3: "Providing knowledgeable, objective financial guidance",
        list4:
          "Analyzing financial information obtained from clients to determine strategies, products, and services to help them meet their financial objectives.",
        list5:
          "Guiding clients in the gathering of information such as bank account records, income tax returns, life and disability insurance records, pension plan information, and trust documents.",
        list6:
          "Referring clients to other professionals who can assist them with plan implementation.",
        list7:
          "Contacting clients periodically to determine if there have been changes in their financial status.",
        list8:
          "Provide information/education to clients about the purpose and details of financial products, services and strategies.",
      },
    ],
    requirements: [
      {
        id: "req2",
        minList1:
          "Results-driven, highly motivated, self-starter who possesses integrity, a strong work ethic and the desire to help others plan for and protect their financial futures.",
        minList2: "Individual who possesses integrity and a strong work ethic",
        minList3:
          "Team player who possesses excellent interpersonal skills and communication abilities, with a high degree of self-confidence",
        minList4:
          "Ability to draw upon past/present experiences and acquaintances to develop markets and build upon them to sustain long-term relationships.",
        minList5: "",
        preList1: "-",
        preList2: "-",
        preList3: "-",
        preList4: "-",
        preList5: "-",
      },
    ],
    skills: [
      {
        id: "s2",
        skill1: "Excellent research & analytical skills.",
        skill2: "Strong communication, listening and interpersonal skills.",
        skill3: "The capacity to work as part of a team.",
        skill4: "Organisation skills & self-motivation ability.",
        skill5: "An ability to work well when faced with targets.",
        skill6: "An ethical attitude to work.",
        skill7: "Excellent IT and numeracy skills.",
      },
    ],
    contact: [
      {
        id: "c2",
        email: "AXA@mail.com",
        number: "1800-563-675",
      },
    ],
  },
  {
    id: "j3",
    image: <img src="/assets/jobcons/playstation.png" alt="" />,
    title: "Senior Program Manager",
    company: "Playstation",
    city: "Galway",
    enrolled: new Date("03/17/2020"),
    description: "",

    contract: "Pernament",
    salary: "85,000 - 100,000",
    about: [
      {
        id: "a3",
        title: "PlayStation",
        information1:
          "PlayStation has been at the forefront of interactive and digital entertainment since the debut of our first console in 1994. Our products delight millions across the world through incredible games, cutting edge experiences and access to many types of media. This commitment to amazing our fans is at the core of who we are and one we share with Sony Corporation, internationally known as a leader in music, movies and consumer electronics. ",
        information2:
          "We can only achieve this goal by welcoming talented people and empowering them to do their best work. From game developers to data scientists, software engineers to cybersecurity experts, marketing to accounting and finance professionals, we’re always looking for talented people who share a passion for creating and our commitment to delivering amazement.",
        list:
          "PSN Original Programming & PSN Home, Digital multimedia content distribution, Hardware, Game Development, Develops global cloud services, and Game Developer Support",
        websiteLink: "https://www.playstation.com/en-us/",
        instagramLink: "https://www.instagram.com/playstation/feed/?hl=en",
        facebookLink: "https://www.facebook.com/playstation/",
        twitterLink:
          "https://twitter.com/PlayStation?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r3",
        jobTitle: "enior Program Manager",
        information1:
          "SIE seeks a highly-qualified candidate for the position of Senior Program Manager. This role will be responsible for driving projects from inception through deployment over a worldwide scale. The candidate is expected to partner with the worldwide Sony Engineering and Product organization to lead, manage, and drive forward software projects. The responsibilities listed are not all inclusive and additional duties may be assigned",
        information2:
          "You will be responsible for driving projects from inception through deployment over a worldwide scale. You are expected to partner with the worldwide Sony Engineering and Product organization to lead, run, and drive forward software projects. The responsibilities listed are not all-inclusive and additional duties may be assigned",
        list1:
          "Own and drive end-to-end delivery of multiple large cross-regional, cross-functional initiatives with multi-level dependencies.",
        list2:
          "Coordinate and collaborate with both internal and external partners to estimate efforts, define milestones, execute and deliver with high standards.",
        list3:
          "Track progress, identify and resolve dependencies, mitigate risks and communicate status to upper management and stakeholders.",
        list4:
          "Establish/improve a standard methodology and metrics for the organization with best practices and continuous improvement.",
        list5:
          "Proactively remove obstacles to drive momentum and progress. Identify communication gaps, handle issues and provide support to teams balancing opposing priorities. Drive results proactively.",
        list6:
          "Applying knowledge for improvement of existing program management processes",
        list7: "Portfolio management experience at enterprise level",
        list8:
          "Collaborating with staff and management of multiple worldwide business units and outside 3rd parties to clearly identify, explain, and communicate their project involvement, project goals, expectations, tasks, and timelines.",
      },
    ],
    requirements: [
      {
        id: "req3",
        minList1:
          "7+ years of Program Management experience driving software development",
        minList2:
          "Solid understanding of agile principles and release processes",
        minList3:
          "Proven technical aptitude and an ability to understand technical designs, challenges and risks",
        minList4:
          "Experience in multiple large cross-regional, cross-team initiatives",
        minList5: "",
        preList1:
          "Experience in a high transaction network based services, gaming industry, social media.",
        preList2:
          "Solid understanding of programming languages and software lifecycle and release processes.",
        preList3:
          "Familiarity with digital media software and networking technologies, especially those related to Sony’s Consumer Electronics devices especially PlayStation.",
        preList4:
          "High proficiency with collaborating, process management and reporting tools",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s3",
        skill1: "Leadership",
        skill2: "Change management",
        skill3: "Commercial acumen",
        skill4: "Communication",
        skill5: "Strategic thinking",
        skill6: "Decision making",
        skill7: "Time Management",
      },
    ],
    contact: [
      {
        id: "c3",
        email: "PlayStation@mail.com",
        number: "3473-327-988",
      },
    ],
  },
  {
    id: "j4",
    image: <img src="/assets/jobcons/3.png" alt="" />,
    title: "Accountant",
    company: "3",
    city: "Clonmel",
    enrolled: new Date("03/23/2020"),
    description: "",

    contract: "Fixed",
    salary: "",

    //Job Detail Content
    about: [ { id: "a4", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r4", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req4", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s4", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c4", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j5",
    image: <img src="/assets/jobcons/sky.jpg" alt="" />,
    title: "Sales Associate",
    company: "Sky",
    city: "Clonmel",
    enrolled: new Date("03/07/2020"),
    description: "",

    contract: "Fixed",
    salary: "",

    //Job Detail Content
    about: [ { id: "a5", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r5", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req5", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s5", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c5", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j6",
    image: <img src="/assets/jobcons/bmw.png" alt="" />,
    title: "Sales advisor",
    company: "BMW",
    city: "Kildare",
    enrolled: new Date("03/05/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "",

    //Job Detail Content
    about: [ { id: "a6", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r6", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req6", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s6", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c6", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j7",
    image: <img src="/assets/jobcons/samsung.png" alt="" />,
    title: "Business Operations",
    company: "Samsung",
    city: "Galway",
    enrolled: new Date("03/05/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "80,000 - 85,000",

    //Job Detail Content
    about: [ { id: "a7", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r7", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req7", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s7", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c7", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j8",
    image: <img src="/assets/jobcons/merc.jpg" alt="" />,
    title: "HR Businness Partner",
    company: "Mercedes",
    city: "Kildare",
    enrolled: new Date("03/03/2020"),
    description: "",

    contract: "Pernament",
    salary: "80,000 - 85,000",

    //Job Detail Content
    about: [ { id: "a8", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r8", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req8", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s8", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c8", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j9",
    image: <img src="/assets/jobcons/lidl.png" alt="" />,
    title: "Operations Manager",
    company: "Lidl",
    city: "Galway",
    enrolled: new Date("03/01/2020"),
    description: "",

    contract: "Fixed",
    salary: "45,000 - 55,000",

    //Job Detail Content
    about: [ { id: "a9", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r9", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req9", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s9", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c9", email: "@mail.com", number: "0000-000-000", }, ],
  },
];
const SearchBusiness: React.FC = () => {

  //Search Bar implementaion
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState(BUSINESS_DATA);
  useEffect(() => {
    if (searchText === "") {
      setResults(BUSINESS_DATA);
    } else {
      setResults(
        BUSINESS_DATA.filter(
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
          <IonTitle>Business</IonTitle>
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
            {results.map((business) => (
              <IonCol key={business.id} size-xs="12" size-md="6" size-lg="4">
                <IonCard>
                  <IonList>
                    <IonItem>
                      <IonThumbnail slot="start">{business.image}</IonThumbnail>
                      <IonButton slot="end" fill="clear" color="primary">
                      <IonIcon icon={bookmarkOutline} slot="icon-only" />
                      </IonButton>
                      <IonLabel className="ion-text-wrap">
                        <IonCardTitle className="font">
                          {business.title}
                        </IonCardTitle>
                        <IonCardSubtitle>
                          {business.company} - {business.city} <br /> Listed on{" "}
                          {business.enrolled.toLocaleDateString("en-US", {
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
                      Contract: {business.contract}
                    </IonItem>
                    <IonItem lines="none">Salary: {business.salary}</IonItem>
                    <IonFooter className="ion-text-right">
                      <IonButton
                        fill="clear"
                        routerLink={`/search-business/${business.id}`}
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
export default SearchBusiness;
