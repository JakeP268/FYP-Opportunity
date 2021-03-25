import React from "react";

export interface ExperienceContent {
  id: string;
  exTitle: string;
  exPlace: string;
  year: string;
  description: string;
}

export interface ProfileExperiencePage {
  id: string;
  title: string;
  experiences: ExperienceContent[];
  included: boolean;
}
interface Context {
  profileExperiences: ProfileExperiencePage[];
  addProfileExperiencePage: (title: string) => void;
  addExperienceContent: (
    profileExperienceId: string,
    experienceExTitle: string,
    experienceExPlace: string,
    experienceYear: string,
    experienceDescription: string
  ) => void;
  deleteExperienceContent: (
    profileExperienceId: string,
    experienceId: string
  ) => void;
  updateExperienceContent: (
    profileExperienceId: string,
    experienceId: string,
    newExTitle: string,
    newExPlace: string,
    newYear: string,
    newDescription: string
  ) => void;
}

const ProfileExperiencesContext = React.createContext<Context>({
  profileExperiences: [],
  addProfileExperiencePage: () => {},
  addExperienceContent: () => {},
  deleteExperienceContent: () => {},
  updateExperienceContent: () => {},
});

export default ProfileExperiencesContext;
