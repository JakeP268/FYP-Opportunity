import React, { useState } from "react";

import ProfileExperiencesContext, {
  ProfileExperiencePage,
  ExperienceContent,
} from "./profileExperiences-context";

const ProfileExperiencesContextProvider: React.FC = (props) => {
  const [profileExperiences, setProfileExperiences] = useState<
    ProfileExperiencePage[]
  >([{ id: "ex1", title: "Experience", experiences: [], included: true }]);

  const addProfileExperiencePage = (title: string) => {
    const newProfileExperience: ProfileExperiencePage = {
      id: Math.random().toString(),
      title,
      experiences: [],
      included: true,
    };

    setProfileExperiences((curProfileExperiences) => {
      return curProfileExperiences.concat(newProfileExperience);
    });
  };

  const addExperienceContent = (profileExperienceId: string, exTitle: string, exPlace: string, year: string, description: string) => {
    const newProfileExperience: ExperienceContent = {
      id: Math.random().toString(),
      exTitle, exPlace, year, description
    };

    setProfileExperiences((profileExperiences) => {
      const updatedProfileExperiences = [...profileExperiences];
      const updatedProfileExperienceIndex = updatedProfileExperiences.findIndex(
        (profileExperience) => profileExperience.id === profileExperienceId
      );
      const updatedExperienceContents = updatedProfileExperiences[
        updatedProfileExperienceIndex
      ].experiences.concat(newProfileExperience);
      const updatedProfileExperience = {
        ...updatedProfileExperiences[updatedProfileExperienceIndex],
      };
      updatedProfileExperience.experiences = updatedExperienceContents;
      updatedProfileExperiences[
        updatedProfileExperienceIndex
      ] = updatedProfileExperience;
      return updatedProfileExperiences;
    });
  };

  const deleteExperienceContent = (
    profileExperienceId: string,
    experienceId: string
  ) => {
    setProfileExperiences((curProfileExperiences) => {
      const updatedProfileExperiences = [...curProfileExperiences];
      const updatedProfileExperienceIndex = updatedProfileExperiences.findIndex(
        (profileExperience) => profileExperience.id === profileExperienceId
      );
      const updatedExperienceContents = updatedProfileExperiences[
        updatedProfileExperienceIndex
      ].experiences.filter((experience) => experience.id !== experienceId);
      const updatedProfileExperience = {
        ...updatedProfileExperiences[updatedProfileExperienceIndex],
      };
      updatedProfileExperience.experiences = updatedExperienceContents;
      updatedProfileExperiences[
        updatedProfileExperienceIndex
      ] = updatedProfileExperience;
      return updatedProfileExperiences;
    });
  };

  const updateExperienceContent = (
    profileExperienceId: string,
    experienceId: string,
    newExTitle: string,
    newExPlace: string,
    newYear: string,
    newDescription: string
  ) => {
    setProfileExperiences((curProfileExperiences) => {
      const updatedProfileExperiences = [...curProfileExperiences];
      const updatedProfileExperienceIndex = updatedProfileExperiences.findIndex(
        (profileExperience) => profileExperience.id === profileExperienceId
      );
      const updatedExperienceContents = updatedProfileExperiences[
        updatedProfileExperienceIndex
      ].experiences.slice();
      const updatedExperienceContentIndex = updatedExperienceContents.findIndex(
        (experience) => experience.id === experienceId
      );
      const updatedExperience = {
        ...updatedExperienceContents[updatedExperienceContentIndex],
        exTitle: newExTitle, exPlace: newExPlace, year: newYear, description: newDescription
      };
      updatedExperienceContents[
        updatedExperienceContentIndex
      ] = updatedExperience;
      const updatedProfileExperience = {
        ...updatedProfileExperiences[updatedProfileExperienceIndex],
      };
      updatedProfileExperience.experiences = updatedExperienceContents;
      updatedProfileExperiences[
        updatedProfileExperienceIndex
      ] = updatedProfileExperience;
      return updatedProfileExperiences;
    });
  };



  return (
    <ProfileExperiencesContext.Provider
      value={{
        profileExperiences,
        addProfileExperiencePage,
        addExperienceContent,
        deleteExperienceContent,
        updateExperienceContent,
      }}
    >
      {props.children}
    </ProfileExperiencesContext.Provider>
  );
};

export default ProfileExperiencesContextProvider;
