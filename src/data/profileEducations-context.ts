import React from "react";

export interface EducationContent {
  id: string;
  title: string;
  course: string;
  year: string
}

export interface ProfileEducationPage {
  id: string;
  title: string;
  educations: EducationContent[];
  included: boolean;
}
interface Context {
  profileEducations: ProfileEducationPage[];
  addProfileEducationPage: (title: string) => void;
  addEducationContent: (
    profileEducationId: string,
    educationTitle: string,
    educationCourse: string,
    educationYear: string
  ) => void;
  deleteEducationContent: (
    profileEducationId: string,
    educationId: string
  ) => void;
  updateEducationContent: (
    profileEducationId: string,
    educationId: string,
    newTitle: string,
    newCourse: string,
    newYear: string
  ) => void;
}

const ProfileEducationsContext = React.createContext<Context>({
  profileEducations: [],
  addProfileEducationPage: () => {},
  addEducationContent: () => {},
  deleteEducationContent: () => {},
  updateEducationContent: () => {},
});

export default ProfileEducationsContext;
