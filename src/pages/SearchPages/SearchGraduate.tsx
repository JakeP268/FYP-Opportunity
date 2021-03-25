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

//Array for all "Job Card Lists" & "Job Page details" infromation within the Graduation section.
export const GRADUATE_DATA = [
  {
    id: "j1",
    image: <img src="/assets/jobcons/twitter.png" alt="" />,
    title: "Product Designer",
    company: "Twitter",
    city: "Dublin",
    enrolled: new Date("09/30/2020"),
    description: "",

    contract: "Fixed",
    salary: "35,000 - 45,000",
    about: [
      {
        id: "a1",
        title: "Twitter",
        information1: "Twitter serves the public conversation because conversation is a force for good in the world. The opportunity to help the world connect, debate, learn, and solve problems is what draws us to careers at Twitter, and it’s what keeps us here. ",
        information2: "Small but mighty teams who serve the public conversation in ways people feel across the world, every day; a flat, non-hierarchical org structure; the freedom to design your own path; space to innovate and make big contributions to Twitter’s future; respect and support of your identity and background, whatever it is; actual work-life balance, including growing opportunities for remote work and flex schedules (depending on the role). ",
        list: "Real-time information",
        websiteLink: "https://careers.twitter.com/",
        instagramLink: "https://twitter.com/instagram?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        facebookLink: "https://www.facebook.com/TwitterInc/",
        twitterLink: "https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r1",
        jobTitle: "Product Designer",
        information1: "Twitter is committed to serving the public conversation by helping customers stay informed, inform others and discuss what matters. The Conversations Design Team is looking for a Product Designer to join us and work on Twitter’s Direct Messages experience. The DM team is a highly collaborative cross-functional team working together to make Twitter’s private messaging experience best in class.",
        information2: "Do you have a passion for problem solving and user-centered design? Love using Twitter? Come help us make Twitter awesome for the millions of people that rely on our service everyday. As a member of the Twitter Design team, you’ll work closely with other Designers, Researchers, and our Product and Engineering teams to bring consistency, simplicity, and ease-of-use to the Twitter experience.",
        list1: "As a member of our team, you’ll bring a mix of strong product design experience, “Design-Thinking” methodologies, design-system knowledge, talent, expertise, and innovative product insights to the role.",
        list2: "You’ll balance a rigorous user-centric perspective with the ability to make bold decisions and move the product forward in a fast-paced development environment.",
        list3: "You’ll foster collaboration and consistency across teams and products by working closely with product managers and engineers to build great experiences.",
        list4: "You’ll partner with our Research team to find opportunities and integrate user insights into product strategy and design.",
        list5: "You will always champion user experience, product consistency, and design excellence.",
        list6: "",
        list7: "",
        list8: "",
      },
    ],
    requirements: [
      {
        id: "req1",
        minList1: "Bsc Degree within Product Design, UI/UX Development or any front-end Computer Science equivalant.",
        minList2: "Bold vision and passion for great design across mobile and web platforms.",
        minList3: "Experience identifying user needs, sketching solutions, creating prototypes, testing ideas with a user research team, refining designs with data and user feedback and providing guidance and feedback to engineers during the build phase.",
        minList4: "Experience using common tools for design and prototyping (Sketch, Invision, Figma, Framer, Illustrator etc).",
        minList5: "",
      },
    ],
    skills: [
      {
        id: "s1",
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
        id: "c1",
        email: "Twitter@mail.com",
        number: "8634-241-764",
      },
    ],
  },
  {
    id: "j2",
    image: <img src="/assets/jobcons/sanofi.jpg" alt="" />,
    title: "Micro Biologist",
    company: "Sanofi",
    city: "Waterford",
    enrolled: new Date("09/26/2020"),
    description: "",

    contract: "Fixed",
    salary: "35,000 - 40,000",
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
        jobTitle: "Micro-Biologist",
        information1: "Perform all required testing for routine testing and product release testing including water testing, environmental monitoring, endotoxin testing, BI processing and particulate testing. Support other laboratory functions as needed.",
        information2: "",
        list1: "Perform routine testing to support the plant functions including but not limited to environmental monitoring, water testing etc. Perform product release testing including, but not limited to, bacterial endotoxin, bioburden, testing, etc.",
        list2: "Perform particulate testing in an ISO 5 lab on finished product.",
        list3: "Perform incoming testing for materials, including growth promotion testing in culture media and incoming test for Biological indicators.",
        list4: "Prepare and update Control forms, SOIs, and general lab documentation",
        list5: "Prepare trends and technical reports based on data with guidance from lab management",
        list6: "Participate in lab projects such as Method Transfers, Verifications, Validations and Equipment Qualifications",
        list7: "Isolate and maintain cultures of bacteria or other microorganisms for future study.",
        list8: "Support the Lab Supervisor and Lab Manager in internal, corporate and customer audits.",
      },
    ],
    requirements: [
      {
        id: "req2",
        minList1: "Graduate degree in Microbiology, particulate testing, biology or science related discipline",
        minList2: "Good knowledge and understanding of principles of microbiological techniques",
        minList3: "Experience in a cGMP environment.",
        minList4: "Strong competence in IT",
        minList5: "",
      },
    ],
    skills: [
      {
        id: "s2",
        skill1: "Good verbal and written communication skills",
        skill2: "Teamworking skills.",
        skill3: "Analytical skills.",
        skill4: "Numerical skills.",
        skill5: "Excellent IT skills.",
        skill6: "Decisiveness.",
        skill7: "Attention to detail.",
      },
    ],
    contact: [
      {
        id: "c2",
        email: "Sanofi@mail.com",
        number: "1793-287-965",
      },
    ],
  },
  {
    id: "j3",
    image: <img src="/assets/jobcons/instagram.png" alt="" />,
    title: "UX Researcher",
    company: "Instagram",
    city: "Limerick",
    enrolled: new Date("09/22/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "55,000 - 60,000",
    about: [
      {
        id: "a3",
        title: "Instagram",
        information1: "More than one billion people around the world use Instagram, and we’re proud to be bringing them closer to the people and things they love. Instagram inspires people to see the world differently, discover new interests, and express themselves.",
        information2: "Since launching in 2010, our community has grown at a rapid pace. Our teams are growing fast, too, and we’re looking for talent across engineering, product management, design, research, analytics, technical program management, operations, and more. In addition to our headquarters in Menlo Park, we have thriving offices in New York City and San Francisco where teams are doing impactful work every day.",
        list: "Public Company",
        websiteLink: "https://about.instagram.com/",
        instagramLink: "https://www.instagram.com/instagram/",
        facebookLink: "https://www.facebook.com/instagram/",
        twitterLink: "https://twitter.com/instagram?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r3",
        jobTitle: "UX Researcher",
        information1: "For this position, we are looking for individuals with strong quantitative methodological training and experience, including methods for causal inference with observable data and design and analysis of surveys, with an understanding of how to integrate diverse sources of insights. The right candidates will have done rigorous, creative, impactful primary research, and will be excellent communicators, passionate about empowering people with online social platforms, comfortable in a flat, fast-moving organization, and excited to collaborate with cross functional partners.",
        information2: "",
        list1: "Work closely with product teams, as well as other qualitative and quantitative researchers, to identify important research questions",
        list2: "Act as a thought leader in research, while advocating for people who use our products",
        list3: "Design and execute studies that address both user behavior and attitudes, using the right methodology for the right questions",
        list4: "Generate insights that shape how product teams think about medium and long-term product strategy",
        list5: "Mentor other researchers, and uphold our team's high standard of work",
        list6: "Work closely with cross-functional partners (product management, data science, analytics, business, design, engineering) to identify and prioritize knowledge gaps in our understanding the ways in which Instagram users experience the social world, and design research that uniquely contributes to solving for those knowledge gaps",
        list7: "Design and execute end-to-end custom primary research using a wide variety of quantitative methods, and interpret analysis through the lens of business impact, UX, HCI, and social science",
        list8: "Adapt methods to the research question at hand using a range of methods, weave together qualitative and quantitative insights for data-informed understanding",
      },
    ],
    requirements: [
      {
        id: "req3",
        minList1: "BSc, Human Behavior related field (HCI, Psychology, Social Science, Information Science)",
        minList2: "Experience with applied statistics",
        minList3: "Experience with qualitative and user-centered design methods (individual and group interviews, diary studies, direct observation, think-aloud usability testing, etc.)",
        minList4: "Experience with quantitative research (survey design, response effects, sampling, crosstabs, and statistical concepts, etc.)",
        minList5: "Knowledge of quantitative, behavioral analysis and statistical concepts",
      },
    ],
    skills: [
      {
        id: "s3",
        skill1: "Communication skills",
        skill2: "Analytical mindset and a knowledge of statistics",
        skill3: "Domain competence",
        skill4: "Cognitive and behavioral psychology awareness",
        skill5: "A common understanding of the software development process",
        skill6: "UX design techniques understanding",
        skill7: "UX research tools knowledge",
      },
    ],
    contact: [
      {
        id: "c3",
        email: "Instagram@mail.com",
        number: "8723-259-971",
      },
    ],
  },
  {
    id: "j4",
    image: <img src="/assets/jobcons/aldi.png" alt="" />,
    title: "Area Manager",
    company: "Aldi",
    city: "Dublin",
    enrolled: new Date("09/18/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "45,000 - 50,000",

    //Job Detail Content
    about: [ { id: "a4", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r4", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req4", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "", }, ],
    skills: [ { id: "s4", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c4", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j5",
    image: <img src="/assets/jobcons/tesla.png" alt="" />,
    title: "Technician",
    company: "Tesla",
    city: "Kildare",
    enrolled: new Date("09/14/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "35,000 - 40,000",

    //Job Detail Content
    about: [ { id: "a5", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r5", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req5", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "", }, ],
    skills: [ { id: "s5", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c5", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j6",
    image: <img src="/assets/jobcons/mongo.png" alt="" />,
    title: "Data Engineer",
    company: "MongoDB",
    city: "Cork",
    enrolled: new Date("09/10/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "65,000 - 70,000",

    //Job Detail Content
    about: [ { id: "a6", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r6", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req6", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "", }, ],
    skills: [ { id: "s6", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c6", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j7",
    image: <img src="/assets/jobcons/Tesla.png" alt="" />,
    title: "Design Engineer",
    company: "Tesla",
    city: "Kildare",
    enrolled: new Date("09/06/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "65,000 - 70,000",

    //Job Detail Content
    about: [ { id: "a7", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r7", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req7", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "", }, ],
    skills: [ { id: "s7", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c7", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j8",
    image: <img src="/assets/jobcons/meaghers.png" alt="" />,
    title: "Pharmacist",
    company: "Meaghers",
    city: "Cork",
    enrolled: new Date("09/04/2020"),
    description: "",

    contract: "Fixed",
    salary: "55,000 - 60,000",

    //Job Detail Content
    about: [ { id: "a8", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r8", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req8", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "", }, ],
    skills: [ { id: "s8", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c8", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j9",
    image: <img src="/assets/jobcons/twitter.png" alt="" />,
    title: "Cloud Architect",
    company: "Instagram",
    city: "Dublin",
    enrolled: new Date("09/01/2020"),
    description: "",

    contract: "Fixed",
    salary: "45,000 - 50,000",

    //Job Detail Content
    about: [ { id: "a9", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r9", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req9", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "", }, ],
    skills: [ { id: "s9", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c9", email: "@mail.com", number: "0000-000-000", }, ],
  },
];
const SearchGraduate: React.FC = () => {

  //Search Bar implementaion
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState(GRADUATE_DATA);
  useEffect(() => {
    if (searchText === "") {
      setResults(GRADUATE_DATA);
    } else {
      setResults(
        GRADUATE_DATA.filter(
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
          <IonTitle>Graduate</IonTitle>
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
            {results.map((graduate) => (
              <IonCol key={graduate.id} size-xs="12" size-md="6" size-lg="4">
                <IonCard>
                  <IonList>
                    <IonItem>
                      <IonThumbnail slot="start">{graduate.image}</IonThumbnail>
                      <IonButton slot="end" fill="clear" color="primary">
                      <IonIcon icon={bookmarkOutline} slot="icon-only" />
                      </IonButton>
                      <IonLabel className="ion-text-wrap">
                        <IonCardTitle className="font">
                          {graduate.title}
                        </IonCardTitle>
                        <IonCardSubtitle>
                          {graduate.company} - {graduate.city} <br /> Listed on{" "}
                          {graduate.enrolled.toLocaleDateString("en-US", {
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
                      Contract: {graduate.contract}
                    </IonItem>
                    <IonItem lines="none">Salary: {graduate.salary}</IonItem>
                    <IonFooter className="ion-text-right">
                      <IonButton
                        fill="clear"
                        routerLink={`/search-graduate/${graduate.id}`}
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
export default SearchGraduate;
