import React, { useState, useEffect } from "react";
import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonSearchbar,
} from "@ionic/react";

//Array for all "Job Catagorey Card Lists" within the Search section.
export const SEARCH = [
  {
    id: "s1",
    image: <img src="/assets/search/business.jpg" alt="" />,
    title: "Business",
    page: "/search-business",
  },
  {
    id: "s2",
    image: <img src="/assets/search/computing.jpg" alt="" />,
    title: "Computing",
    page: "/search-computing",
  },
  {
    id: "s3",
    image: <img src="/assets/search/connections.jpg" alt="" />,
    title: "Connections",
    page: "/search-connections",
  },
  {
    id: "s4",
    image: <img src="/assets/search/education.jpg" alt="" />,
    title: "Education",
    page: "/search-education",
  },
  {
    id: "s5",
    image: <img src="/assets/search/engineering.jpg" alt="" />,
    title: "Engineering",
    page: "/search-engineering",
  },
  {
    id: "s6",
    image: <img src="/assets/search/graduate.jpg" alt="" />,
    title: "Graduate Programs",
    page: "/search-graduate",
  },
  {
    id: "s7",
    image: <img src="/assets/search/medicine.jpg" alt="" />,
    title: "Health Care",
    page: "/search-healthcare",
  },
  {
    id: "s8",
    image: <img src="/assets/search/marketing.jpg" alt="" />,
    title: "Marketing",
    page: "/search-marketing",
  },
  {
    id: "s9",
    image: <img src="/assets/search/science.jpg" alt="" />,
    title: "Science",
    page: "/search-science",
  },
];
export const Search: React.FC = () => {
  //Search Bar implementaion
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState(SEARCH);
  useEffect(() => {
    if (searchText === "") {
      setResults(SEARCH);
    } else {
      //SEarch by title
      setResults(SEARCH.filter((item) => item.title.match(searchText)));
    }
  }, [searchText]);
  return (
    <IonPage>
      <IonHeader>
        <IonSearchbar
          //search bar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {/* Mapping created array information into Ionic Components */}
            {/* Mapping search filtering results from the listed arrays title */}
            {results.map((search) => (
              <IonCol
                size="12"
                size-xs="12"
                size-sm="6"
                size-md="4"
                size-lg="4"
                key={search.id}
              >
                <IonCard>
                  {search.image}
                  <IonCardContent>
                    <IonCardTitle className="font">{search.title}</IonCardTitle>
                  </IonCardContent>
                  <IonFooter className="ion-text-right">
                    <IonButton fill="clear" routerLink={search.page}>
                      View
                    </IonButton>
                  </IonFooter>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Search;
