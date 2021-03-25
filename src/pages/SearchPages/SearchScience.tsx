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

//Array for all "Job Card Lists" & "Job Page details" infromation within the Science section.
export const SCIENCE_DATA = [
  {
    id: "j1",
    image: <img src="/assets/jobcons/fb.png" alt="" />,
    title: "Data Analyst",
    company: "Facebook",
    city: "Cork",
    enrolled: new Date("07/23/2020"),
    description: "",

    contract: "Pernament",
    salary: "75,000 - 80,000",
    about: [
      {
        id: "a1",
        title: "Facebook",
        information1: "Founded in 2004, Facebook’s mission is to give people the power to build community and bring the world closer together. Over 2 billion people use Facebook, Instagram, WhatsApp, or Messenger every month to stay connected with friends and family, to discover what’s going on in the world, and to share and express what matters to them. Facebook is defined by our unique culture – one that rewards impact. We encourage people to be bold and solve the problems they care most about. We work in small teams and move fast to develop new products, constantly iterating. The phrase “this journey is 1% finished” reminds us that we’ve only begun to fulfill our mission.",
        information2: "As we evolve our journey to bring the world closer together, we stay true to the same core values to guide the way we work and the decisions we make every step of the way: be open, be bold, move fast, focus on impact, and build social value.",
        list: "Connectivity, Artificial Intelligence, Virtual Reality, Machine Learning, Social Media, Augmented Reality, Marketing Science, Mobile Connectivity, and Open Compute",
        websiteLink: "https://www.facebook.com/careers",
        instagramLink: "https://www.instagram.com/facebook/?hl=en",
        facebookLink: "https://www.facebook.com/facebook",
        twitterLink: "https://twitter.com/Facebook?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r1",
        jobTitle: "Data Analyst",
        information1: "Facebook is seeking a solutions-oriented, data-savvy self-starter with a passion for helping others, protecting our community and being the voice of our users. We value people who can strategically drive the team using macro-level insights, while still caring for micro-level cases affecting people around the globe. We're targeting an intellectually curious and creative individual who is comfortable operating in ambiguity — a strategic thinker with strong analytical and creative problem-solving skills.",
        information2: "As a Data Analyst @Facebook Trust & Safety you will be directly responsible for ensuring that we effectively identify and remove disruptive content and users as quickly as possible and deeply understand issues that impact our communities globally.",
        list1: "Develop a deep understanding of safety issues and how they affect Facebook, Instagram and our communities",
        list2: "Apply your expertise in quantitative business analysis, technical knowledge, and presentation of data to identify trends and opportunities to improve the performance of our operations",
        list3: "Develop and lead end-to-end project plans and ensure on-time delivery of critical initiatives",
        list4: "Use data and visualization to tell a compelling story to convince internal and external stakeholders to take action",
        list5: "Address sensitive content issues, including but not limited to graphic images, videos and writings, offensive or derogatory language, and other objectionable material",
        list6: "project management skills within an operations background would be desirable although not essential",
        list7: "Partner closely with relevant Stakeholders to collect regular context to metric movements",
        list8: "Identify and advocate for improvements in centralised reporting and monitoring solutions that can be leveraged to monitoring the performance of our Operations.",
      },
    ],
    requirements: [
      {
        id: "req1",
        minList1: "BSc in Computer Science, Statistics, Finance/Commerce, Physics, Applied Economics or similar technical field",
        minList2: "4 yrs + of work experience in an analytics, programming or online operations environment",
        minList3: "Experience with SQL, data analysis & visualization tools and/or programming languages such as Python or Java",
        minList4: "Analytical thinker who can break down problems using data and technology.",
        minList5: "",
        preList1: "MSc in Computer Science, Statistics, Finance/Commerce, Physics, Applied Economics or similar technical field",
        preList2: "Experience managing stakeholders with competing priorities in a dynamic and changing environment",
        preList3: "Capacity to thrive when faced with ambiguous problems and capable of leading complex projects independently.",
        preList4: "Advanced knowledge of securities",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s1",
        skill1: "A high level of mathematical ability.",
        skill2: "Programming languages, such as SQL, Oracle and Python.",
        skill3: "The ability to analyse, model and interpret data.",
        skill4: "Problem-solving skills.",
        skill5: "A methodical and logical approach.",
        skill6: "The ability to plan work and meet deadlines.",
        skill7: "Accuracy and attention to detail.",
      },
    ],
    contact: [
      {
        id: "c1",
        email: "Facebook@mail.com",
        number: "2358-548-943",
      },
    ],
  },
  {
    id: "j2",
    image: <img src="/assets/jobcons/sanofi.jpg" alt="" />,
    title: "Data Scientist",
    company: "Sanofi",
    city: "Waterford",
    enrolled: new Date("07/07/2020"),
    description: "",

    contract: "Fixed",
    salary: "80,000 - 90,000",
    about: [
      {
        id: "a2",
        title: "Sanofi",
        information1: "Sanofi is a global life sciences company committed to improving access to healthcare and supporting the people we serve throughout the continuum of care. From prevention to treatment, Sanofi transforms scientific innovation into healthcare solutions, in human vaccines, rare diseases, multiple sclerosis, oncology, immunology, infectious diseases, diabetes and cardiovascular solutions and consumer healthcare. More than 110,000 people at Sanofi are dedicated to make a difference on patients’ daily life, wherever they live and enable them to enjoy a healthier life.",
        information2: "",
        list: "Public Company, Pharmaceuticals",
        websiteLink: "https://www.sanofi.com/",
        instagramLink: "https://www.instagram.com/sanofi/?hl=en",
        facebookLink: "https://www.facebook.com/sanofi/",
        twitterLink: "https://twitter.com/sanofi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r2",
        jobTitle: "Data Scientist",
        information1: "Advanced Analytics - Data Scientist will execute advanced computational approaches to accelerate and optimize evidence-based pharmaceutical product development. He/She will leverage high-dimensional population health data to support R&D, Medical, HEVA, commercial product development, access and business strategy. The Advanced Analytics Data Scientist roles will generate analytics required by healthcare decision makers to support patient access and use of Sanofi medicines and he/she will contribute to the insights required by Sanofi internal teams to develop and commercialize the most impactful medicines.",
        information2: "",
        list1: "Get to apply a broad array of capabilities spanning machine learning, statistics, text-mining/NLP, and modeling to extract insights to structured and unstructured healthcare data sources, pre-clinical, clinical trial and complementary real world information streams.",
        list2: "Work on a variety of team-based projects providing expertise in analytical and computational approaches.",
        list3: "Work with the latest tools and technologies to impact drug development",
        list4: "Contribute to the Advanced Analytics plans for projects across R&D, Medical Affairs, HEVA and Market Access Strategies and Plans.",
        list5: "Design and implement data models, perform statistical analysis and create predictive analysis models",
        list6: "Leverage analytics involving large datasets to refine and improve data models.",
        list7: "Build and construct prototypes of Advanced Analytic work-flows.",
        list8: "",
      },
    ],
    requirements: [
      {
        id: "req2",
        minList1: "Relevant Masters Degree within Science, with at least 3 years of relevant industry experience",
        minList2: "Experience with open source technologies, ML libraries, and programming languages (R, python)",
        minList3: "An ability to interact with a variety of large-scale data structures e.g. HDFS, SQL, noSQL",
        minList4: "Experience working across multiple compute environments to create workflows and pipelines (e.g. HPC, cloud, linux systems)",
        minList5: "",
        preList1: "PhD or ScD in quantitative field such as Health Services research, Medical Economics, Medical Informatics, Biostatistics, or Computer Science, computer engineering or related field",
        preList2: "Experience with advanced ML techniques (neural networks/deep learning, reinforcement learning, SVM, PCA, etc.).",
        preList3: "Experience with any of the following: biomedical data types/population health data/real world data/novel data streams.",
        preList4: "Experience with reproducible and collaborative technology platforms (e.g. github, containers, jupyter notebooks)",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s2",
        skill1: "Programming Skills",
        skill2: "Statistics",
        skill3: "Machine Learning",
        skill4: "Multivariable Calculus & Linear Algebra",
        skill5: "Data Wrangling",
        skill6: "Data Visualization & Communication",
        skill7: "Data Intuition",
      },
    ],
    contact: [
      {
        id: "c2",
        email: "Sanofi@mail.com",
        number: "7892-324-324",
      },
    ],
  },
  {
    id: "j3",
    image: <img src="/assets/jobcons/teva.png" alt="" />,
    title: "Research Associate",
    company: "teva",
    city: "Dublin",
    enrolled: new Date("07/13/2020"),
    description: "",

    contract: "Fixed",
    salary: "60,000 - 65,000",
    about: [
      {
        id: "a3",
        title: "teva",
        information1: "Teva Pharmaceuticals has been developing and producing medicines to help improve people’s lives for more than a century. We are committed to being a global leader in generic and specialty medicines with a portfolio of 3,500 products in nearly every therapeutic area. Around 200 million people around the world take a Teva medicine every day. They are served by one of the largest and most complex supply chains in the pharmaceutical industry. Along with our established presence in generics, we have significant innovative research and operations supporting our growing portfolio of specialty and biopharmaceutical products. Learn more at www.tevapharm.com.  ",
        information2: "",
        list: "generic medicines, specialty medicines, CNS, active pharmaceutical ingredients, respiratory, biosimilars, biologics, pain care, migraine, and oncology",
        websiteLink: "https://www.tevapharm.com/",
        instagramLink: "https://www.instagram.com/tevapharmaceutical/?hl=en",
        facebookLink: "https://www.facebook.com/TevaEurope/?brand_redir=40078814890",
        twitterLink: "https://twitter.com/TevaUSA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r3",
        jobTitle: "Research Associate",
        information1: "The Research Associate (RA) will work in the department of Upstream Development and Operations at Teva within Biologics CMC. The RA will participate in cell culture process development for early and late stage development projects. They will work in a collaborative setting with other process development staff.They will be expected to independently operate bench scale (3-10L) and pilot scale",
        information2: "The RA will also be expected to independently operate high throughput automation equipment (e.g TECAN, Ambr 250, Ambr15). Additional duties will include record keeping for cell culture and analytics, data analysis, and presentations of technical data to internal teams, detailed documentation and organization of all of the analytical results obtained and develop experimental plan and execute cell culture and/or harvest studies in laboratory either individually or in teams.",
        list1: "Perform routine cell culture maintenance & seed culture expansion to support bioreactor runs.",
        list2: "Perform process development/characterization and scale-up experiments with CHO cells expressing monoclonal antibody in shaker flasks and multiple scale (Ambr15, Ambr 250, 10, 50, 100 and 200L) bioreactors.",
        list3: "Perform equipment set-up, sterilization, daily operation, sampling and in-process analytical testing (cell count, viability, gases, metabolites, titer etc).",
        list4: "Maintain laboratory equipment, coordinate calibration, and manage raw material stocks and supplies. Troubleshoot high throughput automation (TECAN, Ambr 15, Ambr 250) equipment related issues in collaboration with relevant internal groups.",
        list5: "Maintain a compliant laboratory operation in accordance with development protocols, internal procedures and policies. Record experiments in lab notebooks and perform needed data analysis. Document work in technical reports when needed.",
        list6: "Conduct data analysis and present data at internal team meetings on cell culture experiments periodically.",
        list7: "",
        list8: "",
      },
    ],
    requirements: [
      {
        id: "req3",
        minList1: "BSc degree in Biology, Biochemistry, Chemical Engineering or other scientific related field of study",
        minList2: "Minimum 2 years of experience in cell culture process development for antibody or other biologic products",
        minList3: "Minimum 2 years of experience with mammalian cell culture",
        minList4: "Minimum 1 year of experience with bioreactor operation at any scale",
        minList5: "",
        preList1: "5+ years of experience in the biopharmaceutical/biotechnology industry.",
        preList2: "Experience in operation of perfusion systems and/or high throughput Ambr15, 250 system",
        preList3: "Hands-on experience with in-process analytical testing such as cell counters and instruments for metabolite analysis",
        preList4: "Hands-on experience using lab automation (e.g. TECAN) for sample handling/purification etc.",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s3",
        skill1: "Communication.",
        skill2: "Attention to detail.",
        skill3: "Critical thinking.",
        skill4: "Technical skills.",
        skill5: "Statistical and Graphical Analysis of Data.",
        skill6: "Ability to maintain quality, safety and/or infection control standards.",
        skill7: "Planning and scheduling.",
      },
    ],
    contact: [
      {
        id: "c3",
        email: "teva@mail.com",
        number: "9371-825-614",
      },
    ],
  },
  {
    id: "j4",
    image: <img src="/assets/jobcons/stryker.png" alt="" />,
    title: "R&D Engineer",
    company: "Stryker",
    city: "Dublin",
    enrolled: new Date("07/01/2020"),
    description: "",

    contract: "Fixed",
    salary: "60,000 - 65,000",

    //Job Detail Content
    about: [ { id: "a4", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r4", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req4", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s4", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c4", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j5",
    image: <img src="/assets/jobcons/Pfizer.jpg" alt="" />,
    title: "Micro Biologist",
    company: "Pfizer",
    city: "Kildare",
    enrolled: new Date("07/19/2020"),
    description: "",

    contract: "Fixed",
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
    image: <img src="/assets/jobcons/lilly.png" alt="" />,
    title: "Pharmaceutical Scientist",
    company: "Lilly",
    city: "Dublin",
    enrolled: new Date("07/10/2020"),
    description: "",

    contract: "Pernament",
    salary: "55,000 - 60,000",

    //Job Detail Content
    about: [ { id: "a6", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r6", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req6", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s6", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c6", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j7",
    image: <img src="/assets/jobcons/sanofi.jpg" alt="" />,
    title: "Raw Materials Analyst",
    company: "Sanofi",
    city: "Waterford",
    enrolled: new Date("07/15/2020"),
    description: "",

    contract: "Pernament",
    salary: "60,000 - 65,000",

    //Job Detail Content
    about: [ { id: "a7", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r7", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req7", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s7", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c7", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j8",
    image: <img src="/assets/jobcons/teva.png" alt="" />,
    title: "Lab Advisor",
    company: "Teva",
    city: "Dublin",
    enrolled: new Date("07/30/2020"),
    description: "",

    contract: "Fixed",
    salary: "50,000 - 55,000",

    //Job Detail Content
    about: [ { id: "a8", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r8", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req8", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s8", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c8", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j9",
    image: <img src="/assets/jobcons/pfizer.jpg" alt="" />,
    title: "Production Supervisor",
    company: "Pfizer",
    city: "Kildare",
    enrolled: new Date("07/09/2020"),
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
const SearchScience: React.FC = () => {

  //Search Bar implementaion
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState(SCIENCE_DATA);
  useEffect(() => {
    if (searchText === "") {
      setResults(SCIENCE_DATA);
    } else {
      setResults(
        SCIENCE_DATA.filter(
          (item) => item.title.match(searchText) || item.city.match(searchText) || item.company.match(searchText)
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
          <IonTitle>Science</IonTitle>
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
            {results.map((science) => (
              <IonCol key={science.id} size-xs="12" size-md="6" size-lg="4">
                <IonCard>
                  <IonList>
                    <IonItem>
                      <IonThumbnail slot="start">{science.image}</IonThumbnail>
                      <IonButton slot="end" fill="clear" color="primary">
                      <IonIcon icon={bookmarkOutline} slot="icon-only" />
                      </IonButton>
                      <IonLabel className="ion-text-wrap">
                        <IonCardTitle className="font">
                          {science.title}
                        </IonCardTitle>
                        <IonCardSubtitle>
                          {science.company} - {science.city} <br /> Listed on{" "}
                          {science.enrolled.toLocaleDateString("en-US", {
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
                    <IonItem lines="full">Contract: {science.contract}</IonItem>
                    <IonItem lines="none">Salary: {science.salary}</IonItem>
                    <IonFooter className="ion-text-right">
                      <IonButton
                        fill="clear"
                        routerLink={`/search-science/${science.id}`}
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
export default SearchScience;
