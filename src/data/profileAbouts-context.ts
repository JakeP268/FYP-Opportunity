import React from "react";

//The interface is a blueprint for the object which describes a type.
export interface AboutContent {
  id: string;
  name: string;
  rTitle: string;
  bio: string;
  interests: string;
  pr: string;
}

//The interface is a blueprint for the object which describes a type.
export interface ProfileAboutPage {
  id: string;
  title: string;
  abouts: AboutContent[];
  included: boolean;
}

interface Context {
  // The context has a profileAbouts field and the data that will eventually be stored in 
  // their will be an array of profileAbouts where every profileAboutPage has the AboutContent data structure.
  profileAbouts: ProfileAboutPage[];
  addProfileAboutPage: (title: string) => void;
  //adding necesarry parameters
  addAboutContent: (
    profileAboutId: string,
    aboutName: string,
    rTitle: string,
    aboutBio: string,
    aboutInterests: string,
    aboutPr: string
  ) => void;
  deleteAboutContent: (profileAboutId: string, aboutId: string) => void;
  updateAboutContent: (
    profileAboutId: string,
    aboutId: string,
    newName: string,
    newRTitle: string,
    newBio: string,
    newInterests: string,
    newPr: string
  ) => void;
}

//defining the context object where the data is being managed from different parts of the application. 
const ProfileAboutsContext = React.createContext<Context>({
  profileAbouts: [],
  addProfileAboutPage: () => {},
  addAboutContent: () => {},
  deleteAboutContent: () => {},
  updateAboutContent: () => {},
});

export default ProfileAboutsContext;
