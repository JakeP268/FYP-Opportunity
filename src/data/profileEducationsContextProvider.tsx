import React, { useState } from "react";

import ProfileEducationsContext, {
  ProfileEducationPage,
  EducationContent,
} from "./profileEducations-context";

const ProfileEducationsContextProvider: React.FC = (props) => {
  const [profileEducations, setProfileEducations] = useState<
    ProfileEducationPage[]
  >([{ id: "e1", title: "Education", educations: [], included: true }]);

  const addProfileEducationPage = (title: string) => {
    const newProfileEducation: ProfileEducationPage = {
      id: Math.random().toString(),
      title,
      educations: [],
      included: true,
    };

    setProfileEducations((curProfileEducations) => {
      return curProfileEducations.concat(newProfileEducation);
    });
  };

  const addEducationContent = (profileEducationId: string, title: string, course: string, year: string) => {
    const newProfileEducation: EducationContent = {
      id: Math.random().toString(),
      title, course, year
    };

    setProfileEducations((curprofileEducations) => {
      const updatedProfileEducations = [...curprofileEducations];
      const updatedProfileEducationIndex = updatedProfileEducations.findIndex(
        (profileEducation) => profileEducation.id === profileEducationId
      );
      const updatedEducationContents = updatedProfileEducations[
        updatedProfileEducationIndex
      ].educations.concat(newProfileEducation);
      const updatedProfileEducation = {
        ...updatedProfileEducations[updatedProfileEducationIndex],
      };
      updatedProfileEducation.educations = updatedEducationContents;
      updatedProfileEducations[
        updatedProfileEducationIndex
      ] = updatedProfileEducation;
      return updatedProfileEducations;
    });
  };

  const deleteEducationContent = (
    profileEducationId: string,
    educationId: string
  ) => {
    setProfileEducations((curProfileEducations) => {
      const updatedProfileEducations = [...curProfileEducations];
      const updatedProfileEducationIndex = updatedProfileEducations.findIndex(
        (profileEducation) => profileEducation.id === profileEducationId
      );
      const updatedEducationContents = updatedProfileEducations[
        updatedProfileEducationIndex
      ].educations.filter((education) => education.id !== educationId);
      const updatedProfileEducation = {
        ...updatedProfileEducations[updatedProfileEducationIndex],
      };
      updatedProfileEducation.educations = updatedEducationContents;
      updatedProfileEducations[
        updatedProfileEducationIndex
      ] = updatedProfileEducation;
      return updatedProfileEducations;
    });
  };

  const updateEducationContent = (
    profileEducationId: string,
    educationId: string,
    newTitle: string,
    newCourse: string,
    newYear: string
  ) => {
    setProfileEducations((curProfileEducations) => {
      const updatedProfileEducations = [...curProfileEducations];
      const updatedProfileEducationIndex = updatedProfileEducations.findIndex(
        (profileEducation) => profileEducation.id === profileEducationId
      );
      const updatedEducationContents = updatedProfileEducations[
        updatedProfileEducationIndex
      ].educations.slice();
      const updatedEducationContentIndex = updatedEducationContents.findIndex(
        (education) => education.id === educationId
      );
      const updatedEducation = {
        ...updatedEducationContents[updatedEducationContentIndex],
        title: newTitle, course: newCourse, year: newYear
      };
      updatedEducationContents[updatedEducationContentIndex] = updatedEducation;
      const updatedProfileEducation = {
        ...updatedProfileEducations[updatedProfileEducationIndex],
      };
      updatedProfileEducation.educations = updatedEducationContents;
      updatedProfileEducations[
        updatedProfileEducationIndex
      ] = updatedProfileEducation;
      return updatedProfileEducations;
    });
  };



  return (
    <ProfileEducationsContext.Provider
      value={{
        profileEducations,
        addProfileEducationPage,
        addEducationContent,
        deleteEducationContent,
        updateEducationContent,
      }}
    >
      {props.children}
    </ProfileEducationsContext.Provider>
  );
};

export default ProfileEducationsContextProvider;
