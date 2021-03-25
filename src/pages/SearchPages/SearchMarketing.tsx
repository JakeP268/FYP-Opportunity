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

//Array for all "Job Card Lists" & "Job Page details" infromation within the Marketing section.
export const MARKETING_DATA = [
  {
    id: "j1",
    image: <img src="/assets/jobcons/mmc.png" alt="" />,
    title: "Brand Marketing Manager",
    company: "Morgan McKinley",
    city: "Waterford",
    enrolled: new Date("06/03/2020"),
    description: "",

    contract: "Pernament",
    salary: "55,000 - 60,000",
    about: [
      {
        id: "a1",
        title: "Morgan McKinley",
        information1: "Morgan McKinley has been successfully connecting talented candidates with career opportunities for over 30 years. It’s in our DNA to Go Beyond – above and beyond in fact – in doing what we do best. You’ll find us at the heart of established financial centres around the world, with offices based in Ireland, UK, Paris, Toronto, Hong Kong, Tokyo, and Sydney. We also have offices in bustling markets and industrial hubs like Mahe in India, Shanghai, and Singapore too.",
        information2: "Our story began in Ireland, and our offices in Dublin and Cork still keep the home fires burning. Wherever we do business, we always put down local roots and engage with the community through CSR projects and charitable work. We have a multinational and multicultural team of over 850 amazing people, and as a result, you will find a vibrant and welcoming atmosphere in any of our offices. The original plan was simple. Find the market, and if there isn't one, create it. Go further and try harder than anyone else to serve our clients and our candidates, and enjoy the journey. For sure, we’ve got bigger… but our focus remains on being a career ally for our candidates and going beyond for our clients.",
        list: "Financial Services Recruitment, Professional Services Recruitment, Commerce & Industry Recruitment, Recruitment Consultancy, Banking Recruitment, IT Recruitment, Accountancy Recruitment, and Finance Recruitment",
        websiteLink: "https://www.morganmckinley.com/ie",
        instagramLink: "https://www.instagram.com/morganmckinleycareers/?hl=en",
        facebookLink: "https://www.facebook.com/MorganMcKinleyRecruitment/",
        twitterLink: "https://twitter.com/morganmckinley?lang=en",
      },
    ],
    overview: [
      {
        id: "r1",
        jobTitle: "Brand Marketing Manager",
        information1: "This role will primarily work across two high profile beauty brands as well as other retail offerings which sell to over 800+ pharmacies and retailers. We are looking for a creative individual who can 'think outside the box' regarding future brand and marketing initiatives.",
        information2: "",
        list1: "Establish positioning, identify target audiences, and develop marketing plans with specific objectives across different channels and segments",
        list2: "Lead the execution of marketing programs from start to finish, leveraging internal support and driving collaboration",
        list3: "Analyse customer insights, consumer trends, market analysis, and marketing best practices to build successful strategies",
        list4: "Create, maintain, and conduct analytics reporting across multiple platforms and extract key insights for future campaign development and go-to-market strategies",
        list5: "Work in partnership with the digital content team, develop creative briefs and guide creative direction to meet objectives for all advertising and public-­facing communications, including print, digital, and video assets",
        list6: "Manage content and updates for customer and internal touch points, establishing budget guidelines and participating in events",
        list7: "Gather customer and market insights to inform outreach strategies and increase customer conversions",
        list8: "Identify effectiveness and impact of current marketing initiatives with tracking and analysis, and optimise accordingly",
      },
    ],
    requirements: [
      {
        id: "req1",
        minList1: "Bachelor's degree in marketing",
        minList2: "5+ years’ experience with a proven track record of demonstrating marketing leadership",
        minList3: "Work independently in order to lead the marketing strategy, both online and offline",
        minList4: "Experience of managing direct report(s)",
        minList5: "",
        preList1: "2-3 years marketing and commercial experience",
        preList2: "Experience in managing Social Media channels; Facebook, Twitter, Instagram, YouTube etc.",
        preList3: "Proven experience and success in development and implementation of digital marketing strategies and content.",
        preList4: "Demonstrated Marketing Leadership experience",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s1",
        skill1: "Analytical skills and attention to detail",
        skill2: "Understanding of trends and ability to respond to customers’ wishes",
        skill3: "Creativity and an ability to produce innovative and original ideas",
        skill4: "Team working skills",
        skill5: "The ability to manage and allocate budgets",
        skill6: "Written and verbal communication skills",
        skill7: "Experience with and an understanding of market research",
      },
    ],
    contact: [
      {
        id: "c1",
        email: "MorganMcKinley@mail.com",
        number: "8634-349-835",
      },
    ],
  },
  {
    id: "j2",
    image: <img src="/assets/jobcons/ap.jpg" alt="" />,
    title: "Marketing Analyst",
    company: "Analytic Partners",
    city: "Kildare",
    enrolled: new Date("06/13/2020"),
    description: "",

    contract: "Fixed",
    salary: "50,000 - 55,000",
    about: [
      {
        id: "a2",
        title: "Analytic Partners",
        information1: "Analytic Partners is a proven global leader in measurement and optimization. Our adaptive solutions integrate proprietary technology powered by the latest data science delivered through our platform and high-touch consulting. We enable deeper business understanding to support better, faster decisions.",
        information2: "",
        list: "Marketing Mix Modeling, Marketing Analytics, Customer Segmentation, Return on Marketing Investment, Marketing Consulting, Software and Dashboards, Unified Measurement, Multi-touch Attribution, Commercial Mix Modeling, and Brand Impact",
        websiteLink: "https://analyticpartners.com/",
        instagramLink: "https://www.instagram.com/analyticpartners/?hl=en",
        facebookLink: "https://www.facebook.com/analyticpartners/",
        twitterLink: "https://twitter.com/AnalyticGlobal?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r2",
        jobTitle: "Marketing Analyst",
        information1: "You will work as part of a team, spending a portion of your day collaborating with colleagues and clients and part of your day working independently. AP is committed to providing training through our immersive, onboarding Bootcamp which provides the technical and conceptual framework for applying these skills. Ongoing training from the latest methodologies to career development allows employees to grow and thrive at Analytic Partners.",
        information2: "The Marketing Analyst role covers a range of responsibilities in which you will lead elements of the project, including processing data for analysis, building models, and helping to shape presentations that communicate impactful insights and recommendations to our clients.",
        list1: "Develop new concepts and ideas to drive client campaign performance",
        list2: "Research, source, and manage new creative marketing assets in various client verticals",
        list3: "Work horizontally with team members to identify campaign objectives, define KPIs, and execute key campaign optimizations",
        list4: "Conduct analysis that results in actionable insights and data-driven recommendations",
        list5: "Develop charts, reports and client presentations",
        list6: "Ensure statistical models and all deliverables are of high quality and meet the internal quality control guidelines",
        list7: "Ensure AP meets or exceeds client expectations on both deliverable milestones and quality",
        list8: "Collaborate with the Technology Engineering Team (R&D) to help develop new tools and capabilities",
      },
    ],
    requirements: [
      {
        id: "req2",
        minList1: "BSc degree required (Marketing, Economics, Statistics, Mathematics encouraged)",
        minList2: "Experience in a collaborative team environment",
        minList3: "Extremely creative with an ability to think outside the box",
        minList4: "Excellent oral and written communication skills",
        minList5: "",
        preList1: "Experience with the ideation, creation, execution and support of paid search campaigns, including but not limited to account setup, strategy development, organization, and management.",
        preList2: "Know how of search campaign set-up: keyword development, ad copy creation & testing, account set-up and restricting, bid and budget management.",
        preList3: "Experience with Marin or Kenshoo",
        preList4: "1+ year of experience in reporting, analytics, and trend tools within Google, Bing & Yahoo.",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s2",
        skill1: "Statistical knowledge and experience.",
        skill2: "Attention to detail.",
        skill3: "Marketing training and strategy.",
        skill4: "The ability to interpret information effectively.",
        skill5: "Knowledge of software such as Excel or SPSS.",
        skill6: "Strong written and oral communication skills.",
        skill7: "Strong IT Skills",
      },
    ],
    contact: [
      {
        id: "c2",
        email: "AnalyticPartners@mail.com",
        number: "7932-352-834",
      },
    ],
  },
  {
    id: "j3",
    image: <img src="/assets/jobcons/cpl.jpg" alt="" />,
    title: "Digital Marketing Executive",
    company: "CPL",
    city: "Limerick",
    enrolled: new Date("06/13/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "80,000 - 90,000",
    about: [
      {
        id: "a3",
        title: "CPL",
        information1: "Cpl is a global provider of talent solutions to startup companies, multinationals and SMEs in every sector from Pharmaceuticals to Fund Accounting. Founded in 1989, the Cpl Group now comprises 23 brands spanning more than 41 offices in 11 countries. Matching the right talent to the right organisation is the core guiding principle in everything we do.",
        information2: "",
        list: "Recruitment, Out Sourcing, Managed Services, Payroll, HR, Consultancy, Consulting, Temporary, Permanent, Contract, Solutions, and Future Skills",
        websiteLink: "https://cpl.com/",
        instagramLink: "https://www.instagram.com/cpljobs/?hl=en",
        facebookLink: "https://www.facebook.com/cpljobsireland/",
        twitterLink: "https://twitter.com/cpljobs?lang=en",
      },
    ],
    overview: [
      {
        id: "r3",
        jobTitle: "Digital Marketing Executive",
        information1: "The ideal candidate would have relevant marketing/ digital marketing degree or qualification. Some experience of working in a healthcare environment, with appropriate digital marketing exposure desirable or agency experience. Knowledge of the pharma sector from a commercial perspective would be desirable.",
        information2: "",
        list1: "Maintaining a highly organised and efficient digital marketing implementation process.",
        list2: "Contributing to the overall Digital Marketing Strategy as a key member of the Digital Marketing Team.",
        list3: "Drive consumer engagement through social platforms and Digital Initiatives",
        list4: "Perform research on current benchmark trends and audience preferences",
        list5: "Generate, edit, publish and share engaging content (e.g. original text, photos, videos and news)",
        list6: "Suggest and implement new features to develop awareness campaigns like promotions and email marketing campaigns",
        list7: "Provide support in implementing marketing automation tools, including detailed understanding of tools used and best practices employed",
        list8: "Create knowledge base with identification of best practices, business cases and ensure these are shared with internal stakeholders.",
      },
    ],
    requirements: [
      {
        id: "req3",
        minList1: "BSc degree in Marketing",
        minList2: "2+ years' experience in digital marketing.",
        minList3: "Experience on Paid Media: Google Ads, LinkedIn Ads, Facebook Ads",
        minList4: "Solid knowledge of website analytics tools and website CRMs",
        minList5: "",
        preList1: " 4-5 years’ digital marketing experience, ideally gained in professional services",
        preList2: "Evidence of being a team player with leadership abilities will be an advantage",
        preList3: "Expertise with Marketo, Mail Chimp or others email marketing tools",
        preList4: "Proficiency in digital analytics (including website), software and keyword tools an advantage",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s3",
        skill1: "Good teamwork skills.",
        skill2: "Communication skills and networking ability.",
        skill3: "Adaptability.",
        skill4: "Strong attention to detail.",
        skill5: "Good organisation and planning skills.",
        skill6: "Creativity and writing skills.",
        skill7: "Commercial awareness.",
      },
    ],
    contact: [
      {
        id: "c3",
        email: "CPL@mail.com",
        number: "9823-351-830",
      },
    ],
  },
  {
    id: "j4",
    image: <img src="/assets/jobcons/whatsapp.png" alt="" />,
    title: "Product Marketing Manager",
    company: "WhatsApp",
    city: "Kildare",
    enrolled: new Date("06/27/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "80,000 - 90,000",

    //Job Detail Content
    about: [ { id: "a4", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r4", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req4", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s4", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c4", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j5",
    image: <img src="/assets/jobcons/beat.png" alt="" />,
    title: "Social Media Manager",
    company: "Beat 102-103",
    city: "Dublin",
    enrolled: new Date("06/29/2020"),
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
    id: "j6",
    image: <img src="/assets/jobcons/it.png" alt="" />,
    title: "Journalism",
    company: "Irish Times",
    city: "Dublin",
    enrolled: new Date("06/23/2020"),
    description: "",

    contract: "Fixed",
    salary: "40,000 - 45,000",

    //Job Detail Content
    about: [ { id: "a6", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r6", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req6", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s6", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c6", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j7",
    image: <img src="/assets/jobcons/xiaomi.png" alt="" />,
    title: "Marketing Analyst",
    company: "Xiaomi",
    city: "Cork",
    enrolled: new Date("06/14/2020"),
    description: "",

    contract: "Fixed",
    salary: "50,000 - 55,000",

    //Job Detail Content
    about: [ { id: "a7", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r7", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req7", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s7", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c7", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j8",
    image: <img src="/assets/jobcons/whatsapp.png" alt="" />,
    title: "Marketing Specialist",
    company: "WhatsApp",
    city: "Kildare",
    enrolled: new Date("06/11/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "70,000 - 75,000",

    //Job Detail Content
    about: [ { id: "a8", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r8", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req8", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s8", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c8", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j9",
    image: <img src="/assets/jobcons/bmw.png" alt="" />,
    title: "Marketing Manager",
    company: "BMW",
    city: "Dublin",
    enrolled: new Date("06/20/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "80,000 - 85,000",

    //Job Detail Content
    about: [ { id: "a9", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r9", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req9", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s9", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c9", email: "@mail.com", number: "0000-000-000", }, ],
  },
];
const SearchMarketing: React.FC = () => {

  //Search Bar implementaion
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState(MARKETING_DATA);
  useEffect(() => {
    if (searchText === "") {
      setResults(MARKETING_DATA);
    } else {
      setResults(
        MARKETING_DATA.filter(
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
          <IonTitle>Marketing</IonTitle>
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
            {results.map((marketing) => (
              <IonCol key={marketing.id} size-xs="12" size-md="6" size-lg="4">
                <IonCard>
                  <IonList>
                    <IonItem>
                      <IonThumbnail slot="start">
                        {marketing.image}
                      </IonThumbnail>
                      <IonButton slot="end" fill="clear" color="primary">
                      <IonIcon icon={bookmarkOutline} slot="icon-only" />
                      </IonButton>
                      <IonLabel className="ion-text-wrap">
                        <IonCardTitle className="font">
                          {marketing.title}
                        </IonCardTitle>
                        <IonCardSubtitle>
                          {marketing.company} - {marketing.city} <br /> Listed
                          on{" "}
                          {marketing.enrolled.toLocaleDateString("en-US", {
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
                      Contract: {marketing.contract}
                    </IonItem>
                    <IonItem lines="none">Salary: {marketing.salary}</IonItem>
                    <IonFooter className="ion-text-right">
                      <IonButton
                        fill="clear"
                        routerLink={`/search-marketing/${marketing.id}`}
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
export default SearchMarketing;
