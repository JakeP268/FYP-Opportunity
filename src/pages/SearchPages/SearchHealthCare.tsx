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

//Array for all "Job Card Lists" & "Job Page details" infromation within the HealthCare section.
export const HEALTHCARE_DATA = [
  {
    id: "j1",
    image: <img src="/assets/jobcons/meaghers.png" alt="" />,
    title: "Pharmacist",
    company: "Meaghers",
    city: "Dublin",
    enrolled: new Date("02/23/2020"),
    description: "",

    contract: "Fixed",
    salary: "60,000 - 70,000",
    about: [
      {
        id: "a1",
        title: "Meaghers",
        information1: "Meagher’s Pharmacy Group was first opened in Baggot Street in 1921 and operated by the Meagher's family. In 2001, Oonagh O’Hagan (who had served her Pre-Reg year under the guidance of Pierce Meagher) purchased the store from the Meagher's family. Based on its reputation as a Community Pharmacy, it was important for Oonagh to retain the name - Meagher’s Pharmacy. Over the next 15 years, seven more Meagher’s Pharmacies followed; Ranelagh Village, Sandford Road in Ranelagh, Glenview in Tallaght, Castletymon in Tallaght, Barrow Street, Mater Hospital on the North Circular Road and Kinvara Park in Dublin 7.",
        information2: "Today, Meagher's Pharmacy Group is one of Dublin's leading pharmacy groups and employs over 100 staff. Meagher's pride itself on delivering a personable and professional service to the local community in which it serves in. Meagher's offer Pharmacy, Advanced Consultation and Retail services across all nine stores in Dublin.",
        list: "Pharmacy, Retail, Consultation, and Online Retail",
        websiteLink: "https://www.meagherspharmacy.ie/",
        instagramLink: "https://www.instagram.com/meagherspharmacy/?hl=en",
        facebookLink: "https://www.facebook.com/meagherspharmacy/",
        twitterLink: "https://twitter.com/meagherspharmcy?lang=en",
      },
    ],
    overview: [
      {
        id: "r1",
        jobTitle: "Pharmacist",
        information1: "Do you want to be part of one of Ireland Best Workplaces 2020? We know that a Great place to Work starts with our people, and award winning Meaghers Pharmacy are currently recruiting a Relief Pharmacist to work across their 9 stores in Dublin.",
        information2: "The successful applicant will work as part of a dynamic team, supporting our Supervising Managing Pharmacists dispensing prescriptions, delivering expert advice, working in a positive environment with excellent personal development opportunities.",
        list1: "To adhere to dispensing standard operating procedures and ensure maintenance of the appropriate records and hygiene within the pharmacy as per the Pharmacy Act 2008.",
        list2: "To ensure that any issues of a Health and Safety nature are brought to the attention of the managing pharmacist.",
        list3: "To fulfil the required advisory role in relation to over the counter medicines and ensure that staff on the medicine counter are aware of the procedure for counter prescribing and their limitations.",
        list4: "Ensure that the proper procedure for the various Department of Health Schemes e.g. DPS, LTI, GMS is carried out and that they are kept up to date, submitted properly at the end of each month and payment is reconciled as set down by Company Procedures.",
        list5: "Maintain appropriate stock levels in the Pharmacy ensuring the correct storage and monitoring of dated products.",
        list6: "Assume full responsibility during the absence of the Pharmacist for supervising the pharmacy in the provision of medicinal products.",
        list7: "To ensure that the Pharmacy is kept clean and tidy and any Health and Safety issues are brought promptly to the attention of the Pharmacy Manager.",
        list8: "To ensure while on duty the highest standards of care and service is delivered.",
      },
    ],
    requirements: [
      {
        id: "req1",
        minList1: "Degree in Pharmacy",
        minList2: "Minimum of 1 years' experience of the Irish Schemes",
        minList3: "Registration with the PSI.",
        minList4: "Experience building supportive relationships with colleagues and creating a positive working environment.",
        minList5: "",
        preList1: "Previous experience in Irish community pharmacy is an advantage but full training will be given to those coming from other backgrounds.",
        preList2: "Role Specific experience requirement if applicable",
        preList3: "Ideally have previous experience working in Clinical/Hospital/Homecare pharmaceutical or Industry.",
        preList4: "Experience with QicScript is an advantage.",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s1",
        skill1: "A positive 'can-do' attitude.",
        skill2: "A proactive approach to self-development.",
        skill3: "Excellent communication and interpersonal skills.",
        skill4: "A friendly and approachable nature.",
        skill5: "Ability to deal with the public, in a friendly professional and confidential manner.",
        skill6: "A highly motivated self-starter who takes initiative with minimal supervision.",
        skill7: "Communication skills",
      },
    ],
    contact: [
      {
        id: "c1",
        email: "Meaghers@mail.com",
        number: "2568-346-879",
      },
    ],
  },
  {
    id: "j2",
    image: <img src="/assets/jobcons/affidea.jpg" alt="" />,
    title: "General Nurse",
    company: "Affidea",
    city: "Dublin",
    enrolled: new Date("04/23/2020"),
    description: "",

    contract: "Pernament",
    salary: "40,000 - 45,000",
    about: [
      {
        id: "a2",
        title: "Affidea",
        information1: "Affidea −nothing is more important than health Affidea is a highly successful pan-European medical service provider offering premium diagnostic imaging, cancer detection and cancer treatment services working only with state-of-the-art technology and experienced medical professionals. Operating a highly respected portfolio of medical centres across the continent, affidea’s services are at the cutting edge of patient care – a lifeline to patients in need of its expertise. Affidea operates  diagnostic and cancer treatment centres in 16 countries across Europe.",
        information2: "",
        list: "Radiology, Clinical Laboratories, Cancer Treatment, outpatient services, Diagnostic Imaging, Bone Densitometry, Holter monitoring, Positron Emission Tomography (PET), Magnetic Resonance Imaging (MRI), Computer Tomography (CT), Angiography, Mammography, Ultrasonography, and Echo-Doppler, Ergometry",
        websiteLink: "https://www.affidea.com/",
        instagramLink: "https://www.instagram.com/affidea_group/?hl=en",
        facebookLink: "https://www.facebook.com/AffideaIreland/",
        twitterLink: "https://twitter.com/affideaireland?lang=en",
      },
    ],
    overview: [
      {
        id: "r2",
        jobTitle: "General Nurse",
        information1: "We are now seeking an experienced Nurse to join our team in CORK ExpressCare, this is an excellent opportunity for the right individual to develop in a fast-growing organisation. 24hours/week - 2 days/12 hour shifts. The ideal candidate will be passionate about practice-building and creating convenient access to care. Join our dedicated and compassionate Express Care team, where you’ll enjoy excellent work/life balance in the welcoming community of Affidea.",
        information2: "ExpressCare’s aim is to provide outstanding patient alternatives for minor injuries. The service, users aged one and over with minor injuries and illnesses are treated in the Clinic. ExpressCare offers immediate access to Affidea’s full suite of diagnostic services – X-ray, MRI, Ultrasound & CT scans – within one clinic.",
        list1: "To deliver excellent patient-focused care ",
        list2: "Engages in on-going clinical supervision and case discussion weekly",
        list3: "Responsible for the maintenance of a high standard of patient care which is achieved through professional education and development.",
        list4: "Acts on feedback received on recording of patient care and care provided ",
        list5: "Attends onsite or offsite continuous professional development session ",
        list6: "Providing nursing care, eg preparing for operation, caring for wounds and intravenous infusions.",
        list7: "Assisting with tests and evaluations.",
        list8: "Administering drugs and other medicines",
      },
    ],
    requirements: [
      {
        id: "req2",
        minList1: "Have a Bsc in general nursing qualification.",
        minList2: "Registered in the Advanced Nurse Practitioner division of the Nursing and Midwifery Board of Ireland Register - meeting the criteria for an Advanced Nurse Practitioner as specified",
        minList3: "Have at least 3 years post-registration general nursing experience most of which has been in an acute general hospital, two of which in Paediatric Emergency Nursing",
        minList4: "Clinical experience in Primary Care, Emergency Medicine preferred.",
        minList5: "",
        preList1: "Post grad radiology course desirable but not essential",
        preList2: "Have experience working in clinical nursing practice.",
        preList3: "Have demonstrable ability to analyse, report on, and effect change in nursing practice.",
        preList4: "Ability to relate effective and build productive relationships at all levels of a complex organisation.",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s2",
        skill1: "Cultural Awareness",
        skill2: "Professionalism",
        skill3: "Attention to Detail",
        skill4: "Critical Thinking ",
        skill5: "Compassion",
        skill6: "Time Management",
        skill7: "Communication",
      },
    ],
    contact: [
      {
        id: "c2",
        email: "@mail.com",
        number: "0000-000-000",
      },
    ],
  },
  {
    id: "j3",
    image: <img src="/assets/jobcons/ttm.jpg" alt="" />,
    title: "Helathcare Assistant",
    company: "TTM Healthcare",
    city: "Dublin",
    enrolled: new Date("05/13/2020"),
    description: "",

    contract: "Fixed",
    salary: "20,000 - 25,000",
    about: [
      {
        id: "a3",
        title: "TTM Healthcare",
        information1: "TTM Healthcare is a world-class, specialist, Irish-owned recruitment company placing candidates in the healthcare market.  Every week we send between 1,800 and 2,000 people to work in flexible roles in the healthcare market across Ireland, Britain, Northern Ireland and the Middle East, and an average of 100 people are placed in permanent jobs every month. ",
        information2: "We set out to shake-up the market by remembering and nurturing the one vital ingredient of our business: People. The human experience, and the drive in all of us to be the best we can be. Our success has come from having a real interest in our clients and candidates: sitting down with them to understand their needs and their pain points. Talking. Listening. Learning. Caring on a different level about what people really want – and delivering on it. Unlocking Potential is what drives us, and everything we do is geared to Enhance the Quality of People’s Lives.",
        list: "recruitment, healthcare, social care, locum, doctor, nursing, social work, pharmacist, radiographer, medical sales, psychologist, speech and language therapist, occupational therapist, bio tech, medical devices, pharmaceutical, and international recruitment",
        websiteLink: "https://www.ttmhealthcare.ie/",
        instagramLink: "https://www.instagram.com/ttmhealthcare/?hl=en",
        facebookLink: "https://www.facebook.com/ttmhealthcare/",
        twitterLink: "https://twitter.com/TTMGroup?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r3",
        jobTitle: "HealthCare Asistant",
        information1: "This job is for agency Healthcare Assistants and candidates would need to be flexible and available for a range of shifts, throughout the week. Your role would involve working as part of a team of Healthcare Assistants to provide quality care to meet the needs of patients while guided by Nursing staff. Shift allocation can range from specialing to nursing support, depending on the needs of the service.",
        information2: "",
        list1: "Supporting the nursing staff in providing high-quality holistic care to our residents",
        list2: "Ensuring residents hygiene/personal care needs are maintained to the highest standards while maintaining the resident’s dignity at all time",
        list3: "Assisting residents with eating and drinking in line with their nutrition needs",
        list4: "Assisting residents with mobilizing as appropriate and using correct aids",
        list5: "Escorting or/and transfer residents as directed by the Nursing staff",
        list6: "Assisting in End of Life Care",
        list7: "Assisting in End of Life Care",
        list8: "",
      },
    ],
    requirements: [
      {
        id: "req3",
        minList1: "QQI/FETAC qualification OR relative experience in a similar environment.",
        minList2: "Practical experience in a caring capacity desired.",
        minList3: "Ability to work independently or as part of a team.",
        minList4: "Have a minimum of 3 months recent experience in a caring/support/specialing role.",
        minList5: "",
        preList1: "-",
        preList2: "-",
        preList3: "-",
        preList4: "-",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s3",
        skill1: "Good communication skills",
        skill2: "Good listening skills",
        skill3: "Patient Ccnfidentiality",
        skill4: "Flexibility",
        skill5: "Good organisational skills",
        skill6: "Teamwork",
        skill7: "Time Management",
      },
    ],
    contact: [
      {
        id: "c3",
        email: "@mail.com",
        number: "0000-000-000",
      },
    ],
  },
  {
    id: "j4",
    image: <img src="/assets/jobcons/affidea.jpg" alt="" />,
    title: "Midwife",
    company: "Affidea",
    city: "Dublin",
    enrolled: new Date("05/23/2020"),
    description: "",

    contract: "pernament",
    salary: "85,000 - 90,000",

    //Job Detail Content
    about: [ { id: "a4", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r4", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req4", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s4", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c4", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j5",
    image: <img src="/assets/jobcons/gp.png" alt="" />,
    title: "General Practioner",
    company: "Albion Park Rail",
    city: "Kerry",
    enrolled: new Date("04/29/2020"),
    description: "",

    contract: "Pernament",
    salary: "85,000 - 90,000",

    //Job Detail Content
    about: [ { id: "a5", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r5", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req5", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s5", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c5", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j6",
    image: <img src="/assets/jobcons/ttm.jpg" alt="" />,
    title: "Social Worker",
    company: "TTM Healthcare",
    city: "Dublin",
    enrolled: new Date("04/05/2020"),
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
    image: <img src="/assets/jobcons/whospital.jpg" alt="" />,
    title: "Radiologist",
    company: "Waterford Hospital",
    city: "Waterford",
    enrolled: new Date("04/13/2020"),
    description: "",

    contract: "Pernamnet",
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
    image: <img src="/assets/jobcons/whospital.jpg" alt="" />,
    title: "Gastrologist",
    company: "Waterford Hospital",
    city: "Waterford",
    enrolled: new Date("04/23/2020"),
    description: "",

    contract: "Pernament",
    salary: "110,000 - 115,000",

    //Job Detail Content
    about: [ { id: "a8", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r8", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req8", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s8", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c8", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j9",
    image: <img src="/assets/jobcons/upmc.png" alt="" />,
    title: "General Nurse",
    company: "UPMC Witfield Clinic",
    city: "Waterford",
    enrolled: new Date("04/30/2020"),
    description: "",

    contract: "Fixed",
    salary: "40,000 - 45,000",

    //Job Detail Content
    about: [ { id: "a9", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r9", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req9", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s9", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c9", email: "@mail.com", number: "0000-000-000", }, ],
  },
];
const SearchHealthCare: React.FC = () => {

  //Search Bar implementaion
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState(HEALTHCARE_DATA);
  useEffect(() => {
    if (searchText === "") {
      setResults(HEALTHCARE_DATA);
    } else {
      setResults(
        HEALTHCARE_DATA.filter(
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
          <IonTitle>Health Care</IonTitle>
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
            {results.map((healthcare) => (
              <IonCol key={healthcare.id} size-xs="12" size-md="6" size-lg="4">
                <IonCard>
                  <IonList>
                    <IonItem>
                      <IonThumbnail slot="start">
                        {healthcare.image}
                      </IonThumbnail>
                      <IonButton slot="end" fill="clear" color="primary">
                      <IonIcon icon={bookmarkOutline} slot="icon-only" />
                      </IonButton>
                      <IonLabel className="ion-text-wrap">
                        <IonCardTitle className="font">
                          {healthcare.title}
                        </IonCardTitle>
                        <IonCardSubtitle>
                          {healthcare.company} - {healthcare.city} <br /> Listed
                          on{" "}
                          {healthcare.enrolled.toLocaleDateString("en-US", {
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
                      Contract: {healthcare.contract}
                    </IonItem>
                    <IonItem lines="none">Salary: {healthcare.salary}</IonItem>
                    <IonFooter className="ion-text-right">
                      <IonButton
                        fill="clear"
                        routerLink={`/search-healthcare/${healthcare.id}`}
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
export default SearchHealthCare;
