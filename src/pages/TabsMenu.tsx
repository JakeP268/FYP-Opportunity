import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabButton,
  IonTabBar,
  IonIcon,
} from "@ionic/react";
import { Route, Redirect } from "react-router-dom";
import {
  personCircleOutline,
  notificationsCircleOutline,
  listCircleOutline,
  searchCircleOutline,
  planetOutline,
} from "ionicons/icons";

import Newsfeed from "./TabPages/Newsfeed";
import Search from "./TabPages/Search";
import About from "./TabPages/About";
import Notifications from "./TabPages/Notifications";
import Profile from "./TabPages/Profile";

import ListBusiness from "./JobLists/ListBusiness";
import ListComputing from "./JobLists/ListComputing";
import ListConnections from "./JobLists/ListConnections";
import ListEducation from "./JobLists/ListEducation";
import ListEngineering from "./JobLists/ListEngineering";
import ListGraduate from "./JobLists/ListGraduate";
import ListHealthCare from "./JobLists/ListHealthCare";
import ListMarketing from "./JobLists/ListMarketing";
import ListScience from "./JobLists/ListScience";

import SearchBusiness from "./SearchPages/SearchBusiness";
import SearchComputing from "./SearchPages/SearchComputing";
import SearchConnections from "./SearchPages/SearchConnections";
import SearchEducation from "./SearchPages/SearchEducation";
import SearchEngineering from "./SearchPages/SearchEngineering";
import SearchGraduate from "./SearchPages/SearchGraduate";
import SearchHealthCare from "./SearchPages/SearchHealthCare";
import SearchMarketing from "./SearchPages/SearchMarketing";
import SearchProfilePreview from "./SearchPages/SearchProfilePreview";
import SearchScience from "./SearchPages/SearchScience";

import ProfilePreview from "./ProfileCrud/ProfilePreview";
import ProfileAbout from "./ProfileCrud/ProfileAbout";
import ProfileEducation from "./ProfileCrud/ProfileEducation";
import ProfileSkill from "./ProfileCrud/ProfileSkill";
import ProfileExperience from "./ProfileCrud/ProfileExperience";
import ProfileContact from "./ProfileCrud/ProfileContact";
import NewsfeedList1 from "./JobLists/NewsfeedList1";
import NewsfeedList2 from "./JobLists/NewsfeedList2";
import NewsfeedCList from "./JobLists/NewsfeedCList";
import Notifications2 from "./TabPages/Notifications2";
const TabsMenu: React.FC = () => {
  return (
    // Ion Tabs works as a router outlet in order to handle navigation.
    <IonTabs>
      <IonRouterOutlet>
        <Redirect path="/tabs" to="/tabs/about" exact />
        <Route path="/tabs/newsfeed" exact>
          {/* Renders Newsfeed component through Routing if path matches */}
          <Newsfeed />
        </Route>
        <Route path="/newsfeed/:newsfeed1Id">
          <NewsfeedList1 />
        </Route>
        <Route path="/newsfeed2/:newsfeed2Id">
          <NewsfeedList2 />
        </Route>
        <Route path="/newsfeedc/:newsfeedcId">
          <NewsfeedCList />
        </Route>
        <Route path="/tabs/search" exact>
          <Search />
        </Route>
        <Route path="/search-business" exact>
          <SearchBusiness />
        </Route>
        <Route path="/search-business/:businessId">
          <ListBusiness />
        </Route>
        <Route path="/search-computing" exact>
          <SearchComputing />
        </Route>
        <Route path="/search-computing/:computingId">
          <ListComputing />
        </Route>
        <Route path="/search-connections" exact>
          <SearchConnections />
        </Route>
        <Route path="/search-profilePreview" exact>
          <SearchProfilePreview />
        </Route>
        <Route path="/search-connections/:connectionsId">
          <ListConnections />
        </Route>
        <Route path="/search-education" exact>
          <SearchEducation />
        </Route>
        <Route path="/search-education/:educationId">
          <ListEducation />
        </Route>
        <Route path="/search-engineering" exact>
          <SearchEngineering />
        </Route>
        <Route path="/search-engineering/:engineeringId">
          <ListEngineering />
        </Route>
        <Route path="/search-graduate" exact>
          <SearchGraduate />
        </Route>
        <Route path="/search-graduate/:graduateId">
          <ListGraduate />
        </Route>
        <Route path="/search-marketing" exact>
          <SearchMarketing />
        </Route>
        <Route path="/search-marketing/:marketingId">
          <ListMarketing />
        </Route>
        <Route path="/search-healthcare" exact>
          <SearchHealthCare />
        </Route>
        <Route path="/search-healthcare/:healthcareId">
          <ListHealthCare />
        </Route>
        <Route path="/search-science" exact>
          <SearchScience />
        </Route>
        <Route path="/search-science/:scienceId">
          <ListScience />
        </Route>
        <Route path="/tabs/about" exact>
          <About />
        </Route>
        <Route path="/tabs/notifications" exact>
          <Notifications />
        </Route>
        <Route path="/tabs/notifications2" exact>
          <Notifications2 />
        </Route>
        <Route path="/tabs/profile" exact>
          <Profile />
        </Route>
        <Route path="/profileA/:profileAboutId">
          <ProfileAbout />
        </Route>
        <Route path="/profileS/:profileSkillId">
          <ProfileSkill />
        </Route>
        <Route path="/profileP/:profilePreviewId">
          <ProfilePreview />
        </Route>
        <Route path="/profileE/:profileEducationId">
          <ProfileEducation />
        </Route>
        <Route path="/profileEX/:profileExperienceId">
          <ProfileExperience />
        </Route>
        <Route path="/profileC/:profileContactId">
          <ProfileContact />
        </Route>
      </IonRouterOutlet>
      {/* Tab bar featuring a slot="bottom" to place the tab bar at the bottom of the application, 
      it must be provided inside of tabs to communicate with each tab*/}
      <IonTabBar slot="bottom">
        {/* Tab buttons featuring links and icons for each tab
        The tab prop identifies each unique tab 
        and the href links each tab to the specific component page path it is linked too*/}
        <IonTabButton tab="newsfeed" href="/tabs/newsfeed">
          <IonIcon icon={listCircleOutline} />
        </IonTabButton>
        <IonTabButton tab="search" href="/tabs/search">
          <IonIcon icon={searchCircleOutline} />
        </IonTabButton>
        <IonTabButton tab="about" href="/tabs/about">
          <IonIcon icon={planetOutline} />
        </IonTabButton>
        <IonTabButton tab="notifications" href="/tabs/notifications">
          <IonIcon icon={notificationsCircleOutline} />
        </IonTabButton>
        <IonTabButton tab="profile" href="/tabs/profile">
          <IonIcon icon={personCircleOutline} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabsMenu;
