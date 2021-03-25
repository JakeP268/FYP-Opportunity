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

//Array for all "Job Card Lists" & "Job Page details" infromation within the Education section.
export const EDUCATION_DATA = [
  {
    id: "j1",
    image: <img src="/assets/jobcons/wit.jpg" alt="" />,
    title: "Instructional Designer",
    company: "Waterford Institute of Technology",
    city: "Waterford",
    enrolled: new Date("01/05/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "35,000 - 40,000",
    about: [
      {
        id: "a1",
        title: "Waterford Institute of Technology",
        information1: "Waterford Institute of Technology (WIT) is the major provider of higher education in the South East region of Ireland and one of the largest IOT's in Ireland. The range of academic programmes is exceptionally extensive, from Higher Certificate to post-doctoral research, covering the Humanities, Health and Nursing, Science and Informatics, Engineering and Architecture, Business and Education. ",
        information2: "At WIT we pride ourselves on our industry and partner links, which allows our students to gain valuable experience in real work placements and allows industry-specific research and development to flourish. Producing graduates of distinction in Engineering, Business, Science, Health Science and Humanities. ",
        list: "Undergraduate courses, Post Graduate Courses, Research, Adult Education, International Students, and Part time education",
        websiteLink: "https://www.wit.ie/about_wit/for_staff/staff_vacancies",
        instagramLink: "https://www.instagram.com/witwaterford/?hl=en",
        facebookLink: "https://www.facebook.com/waterfordit/",
        twitterLink: "https://twitter.com/waterfordit?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r1",
        jobTitle: "Instructional Designer",
        information1: "Waterford Institute of Technology is strategically committed to excellence in the delivery of the curriculum and recognises the potential for technology to enhance the learning, teaching and assessment experience. WIT wishes to appoint an Instructional Designer to work collaboratively in the Centre for Technology-Enhanced Learning in providing pedagogical and technical guidance for a range of projects across the institute.",
        information2: "The successful candidate will work with various teams tasked with planning, managing, developing delivering and refining blended and online programmes in WIT. The ideal candidate should have an undergraduate qualification (preferably in an education or Technology-Enhanced Learning related area) with an additional qualification in the area of instructional design or online learning. They should have an understanding of learning and teaching methodologies, practice, curriculum design and assessment, and experience in working with educational technologies.",
        list1: "Providing pedagogical advice and guidance to staff on: integrating technology in learning and teaching, creating digital learning resources, developing new or adapting elements of existing programmes for blended and/or online delivery.",
        list2: "Contributing to the continuous development and delivery of continuing professional development activities (e.g. training) relating to Technology-Enhanced Learning, including Moodle, appropriate to the needs of individuals, departments and Schools in WIT.",
        list3: "Contributing to the continuous development of quality assurance, digital resources and end-user documentation to enable the effective adoption of technology in learning and teaching.",
        list4: "Providing leadership in the ongoing development of communities of practice relating to Technology-Enhanced Learning in WIT.",
        list5: "",
        list6: "",
        list7: "",
        list8: "",
      },
    ],
    requirements: [
      {
        id: "req1",
        minList1: "Level 8 Degree within Information Technology/E-Learning.",
        minList2: "	A minimum of 2 years instructional design experience.",
        minList3: "Strong ICT skills Experience of curriculum design in a TEL environment.",
        minList4: "+ 1 year prior experience with development on large scale projects.",
        minList5: "",
        preList1: "Post Graduate Qualification relevant to Education and/or Technology Enhanced Learning.",
        preList2: "Experience of programme development for on-line and blended learning programmes in a higher education or equivalent environment.",
        preList3: "Advanced ICT skills, project management skills, e-learning experience Understanding of higher education.",
        preList4: "+ 2 years of prior experience working within the area of 3rd level teaching.",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s1",
        skill1: "Microsoft Office",
        skill2: "Excellent communicator",
        skill3: "strong networking skills",
        skill4: "Presentation skills",
        skill5: "Project management",
        skill6: "e-learning systems experience",
        skill7: "Leadership",
      },
    ],
    contact: [
      {
        id: "c1",
        email: "WIT@mail.com",
        number: "3457-190-873",
      },
    ],
  },
  {
    id: "j2",
    image: <img src="/assets/jobcons/ul.jpg" alt="" />,
    title: "Web Design Lecturer",
    company: "University of Limerick",
    city: "Limerick",
    enrolled: new Date("01/30/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "60,000 - 65,000",
    about: [
      {
        id: "a2",
        title: "University of Limerick",
        information1: "The University of Limerick (UL), is located on the west coast of Ireland along the picturesque River Shannon and enjoys an unspoiled natural environment blended with state-of-the-art teaching and research facilities.",
        information2: "UL was awarded prestigious 5-star rankings for graduate employability, innovation and knowledge transfer, teaching, engagement, internationalisation and infrastructure by QS Stars independent assessors.",
        list: "Training, Research, and Education",
        websiteLink: "https://www.ul.ie/",
        instagramLink: "https://www.instagram.com/universityoflimerick/?hl=en",
        facebookLink: "https://www.facebook.com/universityoflimerick/",
        twitterLink: "https://www.facebook.com/universityoflimerick/",
      },
    ],
    overview: [
      {
        id: "r2",
        jobTitle: "Web Design Lecturer",
        information1: "The ideal candidate should have experience and a creative approach to designing and delivering HE curriculum at undergraduate and postgraduate level in subject specific and interdisciplinary contexts. This role requires a versatile approach and ability to contribute to a team that spans a wide range of digital arts disciplines, encompassing both academic and industry professionals. The applicant should demonstrate a professional knowledge of teaching and learning initiative that forefront the power technology has to impact national and global social change. Experience of teaching or industry engagement across a range of emerging digital platforms in the field of web design is essential",
        information2: "Subject specific knowledge and skills including HTML, CSS, JS, PHP; experience developing web projects for clients and in working in a team with designers and developers at all levels and a strong focus on accessibility and usability as part of the design process. Experience of project management and ability to teach this would be beneficial.",
        list1: "Teach on the Computer Science programmes and other undergraduate and postgraduate programmes in the School of Science in areas such education foundational studies.",
        list2: "checking and assessing students' work.",
        list3: "encouraging personal development via tutorial or pastoral work.",
        list4: "Supervise undergraduate and postgraduate research projects/theses.",
        list5: "Lead programme development and implementation to enhance the the School of Science for both national and international reach.",
        list6: "Contribute as a team member to curricular reviews and to enhancing the reputation of the school’s teaching and research.",
        list7: "writing research proposals, papers and other publications",
        list8: "Assist with teaching at masters and doctoral levels.",
      },
    ],
    requirements: [
      {
        id: "req2",
        minList1: "A doctoral degree (level 10 NFQ) in education, relevant to computer science, web development",
        minList2: "5 + years of experience working the Web Development industry",
        minList3: "Experience of teaching (at third level or post primary).",
        minList4: "Evidence of research output.",
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
        id: "s2",
        skill1: "Highly motivated",
        skill2: "Excellent presentation skills",
        skill3: "Excellent research skills",
        skill4: "Written and verbal communication skills",
        skill5: "Expertise knowledge in subject area",
        skill6: "Strong Teaching Ethic",
        skill7: "E-Learning",
      },
    ],
    contact: [
      {
        id: "c2",
        email: "UniversityLimerick@mail.com",
        number: "6732-532-870",
      },
    ],
  },
  {
    id: "j3",
    image: <img src="/assets/jobcons/ucd.png" alt="" />,
    title: "Assistant Nurse Lecturer",
    company: "University College Dublin",
    city: "Dublin",
    enrolled: new Date("01/23/2020"),
    description: "",

    contract: "Pernammnet",
    salary: "80,000 - 85,000",
    about: [
      {
        id: "a3",
        title: "University College Dublin",
        information1: "University College Dublin is one of Europe's leading research-intensive universities. At UCD undergraduate education, master's and PhD training, research, innovation and community engagement form a dynamic spectrum of activity. Today UCD is Ireland's largest and most diverse university with over 30,000 students, drawn from approximately 124 countries. It actively promotes university life as a journey of intellectual and personal discovery through its highly innovative and flexible UCD Horizons undergraduate curriculum and is the most popular destination for Irish school-leavers.",
        information2: "UCD is Ireland’s leader in graduate education with approximately 7,000 graduate students, and almost 2,000 PhD students. Over 50% of UCD undergraduates progress to graduate studies. UCD is home to over 6,000 international students and delivers degrees to over 5,000 students on overseas campuses. In addition, the University places great emphasis on the internationalisation of the Irish student experience – preparing all UCD students for future employment and life that crosses borders, boundaries and cultures.",
        list: "higher education, Research, Innovation and Impact, and Supporting the recruitment of staff across UCD",
        websiteLink: "https://www.ucd.ie/",
        instagramLink: "https://www.instagram.com/universitycollegedublin/?hl=en",
        facebookLink: "https://www.facebook.com/universitycollegedublin/",
        twitterLink: "https://twitter.com/ucddublin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    ],
    overview: [
      {
        id: "r3",
        jobTitle: "Assistant Nurse Lecturer",
        information1: "The School wishes to appoint a Lecturer/Assistant Professor in Nursing to contribute to teaching, curriculum design and enhancement and academic administration on the School's undergraduate and graduate-taught General Nursing programmes, and to work with clinical personnel and other external partners in supporting student learning and curriculum review and enhancement. In addition to teaching and administrative duties, the post holder will engage in research and scholarship in the discipline and will contribute to the development of the School's research agenda. Based on level of prior experience, the post holder will be expected to assume leadership responsibilities as assigned by the Dean and Head of School.",
        information2: "",
        list1: "Teaching such assigned classes as deemed appropriate by the management of the University, day or evening, up to 630 hours per annum including supervision of post-graduate students where appropriate. ",
        list2: "Carrying out assessment, monitoring and evaluation of examinations work, and providing an academic and consultative support to students in their learning activities;",
        list3: "Providing academic input on existing and new courses and course development;",
        list4: "Engaging in research, consultancy and development work as appropriate;",
        list5: "Participating in committees appropriate to courses and meetings convened by management;",
        list6: "Maintaining appropriate records and making available information as required by management;",
        list7: "Engaging in promotion including student recruitment as appropriate;",
        list8: "Participating in the development, implementation and maintenance of academic quality assurance arrangements;",
      },
    ],
    requirements: [
      {
        id: "req3",
        minList1: "Be registered in the General Nurse Division of the Register for nurses maintained by An Bord Altranais agus Cnáimhseachais na hÉireann, Nursing and Midwifery Board of Ireland (NMBI) - or be eligible to be so registered.",
        minList2: "An NQAI Level 8 qualification or equivalent from a recognised degree awarding body. The programme followed should have involved the study of the art and science of nursing or a related healthcare area.",
        minList3: "Three years relevant post-qualification experience.",
        minList4: "The recommended candidate must also pass a medical examination prior to taking up duty.",
        minList5: "",
        preList1: "An NQAI Level 9 qualification or equivalent from a recognised degree awarding body. The programme followed should have involved the study of the art and science of nursing or a related healthcare area.",
        preList2: "Experience working in Quality/Patient Safety/Risk Management.",
        preList3: "Relevant teaching experience.",
        preList4: "Registered Nurse Tutor.",
        preList5: "",
      },
    ],
    skills: [
      {
        id: "s3",
        skill1: "IT skills",
        skill2: "Strong communication skills",
        skill3: "Organisational",
        skill4: "TeamWork",
        skill5: "Time Managment",
        skill6: "Presentaion skills",
        skill7: "Ability to work well with a range of people",
      },
    ],
    contact: [
      {
        id: "c3",
        email: "UCD@mail.com",
        number: "7324-249-815",
      },
    ],
  },
  {
    id: "j4",
    image: <img src="/assets/jobcons/ballygunner.jpg" alt="" />,
    title: "Special Needs Assistant",
    company: "BallyGunner National School",
    city: "Waterford",
    enrolled: new Date("01/26/2020"),
    description: "",

    contract: "Pernament",
    salary: "25,000 - 30,000",

    //Job Detail Content
    about: [ { id: "a4", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r4", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req4", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s4", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c4", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j5",
    image: <img src="/assets/jobcons/wit.jpg" alt="" />,
    title: "Engineering Lecturer",
    company: "Waterford Institute of Technology",
    city: "Waterford",
    enrolled: new Date("01/19/2020"),
    description: "",

    contract: "Fixed",
    salary: "70,000 - 75,000",

    //Job Detail Content
    about: [ { id: "a5", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r5", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req5", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s5", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c5", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j6",
    image: <img src="/assets/jobcons/ucc.png" alt="" />,
    title: "(BIS) Lecturer",
    company: "University College Cork",
    city: "Cork",
    enrolled: new Date("01/16/2020"),
    description: "",

    contract: "Pernament",
    salary: "60,000 - 65,000",

    //Job Detail Content
    about: [ { id: "a6", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r6", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req6", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s6", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c6", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j7",
    image: <img src="/assets/jobcons/maynooth.png" alt="" />,
    title: "Law & Sociology Lecturer",
    company: "University of Maynooth",
    city: "Maynooth",
    enrolled: new Date("01/09/2020"),
    description: "",

    contract: "Pernamnet",
    salary: "65,000 - 70,000",

    //Job Detail Content
    about: [ { id: "a7", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r7", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req7", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s7", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c7", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j8",
    image: <img src="/assets/jobcons/abbey.jpg" alt="" />,
    title: "Mathimatics & Science Teacher",
    company: "Abbey Community College",
    city: "Kilkenny",
    enrolled: new Date("01/06/2020"),
    description: "",

    contract: "Fixed",
    salary: "40,000 - 45,000",

    //Job Detail Content
    about: [ { id: "a8", title: "", information1: "", information2: "", list: "", websiteLink: "", instagramLink: "", facebookLink: "", twitterLink: "", }, ],
    overview: [ { id: "r8", jobTitle: "", information1: "", information2: "", list1: "", list2: "", list3: "", list4: "", list5: "", list6: "", list7: "", list8: "", }, ],
    requirements: [ { id: "req8", minList1: "", minList2: "", minList3: "", minList4: "", minList5: "",  preList1: "", preList2: "", preList3: "", preList4: "", preList5: "", }, ],
    skills: [ { id: "s8", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", skill6: "", skill7: "", }, ],
    contact: [ { id: "c8", email: "@mail.com", number: "0000-000-000", }, ],
  },
  {
    id: "j9",
    image: <img src="/assets/jobcons/ucc.png" alt="" />,
    title: "Mechanical Engineer Lecturer",
    company: "University College Cork",
    city: "Cork",
    enrolled: new Date("01/03/2020"),
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
const SearchEducation: React.FC = () => {

  //Search Bar implementaion
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState(EDUCATION_DATA);
  useEffect(() => {
    if (searchText === "") {
      setResults(EDUCATION_DATA);
    } else {
      setResults(
        EDUCATION_DATA.filter(
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
          <IonTitle>Education</IonTitle>
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
            {results.map((education) => (
              <IonCol key={education.id} size-xs="12" size-md="6" size-lg="4">
                <IonCard className="c1">
                  <IonList>
                    <IonItem>
                      <IonThumbnail slot="start">
                        {education.image}
                      </IonThumbnail>
                      <IonButton slot="end" fill="clear" color="primary">
                      <IonIcon icon={bookmarkOutline} slot="icon-only" />
                      </IonButton>
                      <IonLabel className="ion-text-wrap">
                        <IonCardTitle className="font">
                          {education.title}
                        </IonCardTitle>
                        <IonCardSubtitle>
                          {education.company} <br /> {education.city} <br />{" "}
                          Listed on{" "}
                          {education.enrolled.toLocaleDateString("en-US", {
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
                      Contract: {education.contract}
                    </IonItem>
                    <IonItem lines="none">Salary: {education.salary}</IonItem>
                    <IonFooter className="ion-text-right">
                      <IonButton
                        fill="clear"
                        routerLink={`/search-education/${education.id}`}
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
export default SearchEducation;
