import React, { useState } from "react";

import ProfileSkillsContext, {
  ProfileSkillPage,
  SkillContent,
} from "./profileSkills-context";

const ProfileSkillsContextProvider: React.FC = (props) => {
  const [profileSkills, setProfileSkills] = useState<ProfileSkillPage[]>([
    { id: "s1", title: "Skills", skills: [], included: true },
  ]);

  const addProfileSkillPage = (title: string) => {
    const newProfileSkill: ProfileSkillPage = {
      id: Math.random().toString(),
      title,
      skills: [],
      included: true,
    };

    setProfileSkills((curProfileSkills) => {
      return curProfileSkills.concat(newProfileSkill);
    });
  };

  const addSkillContent = (profileSkillId: string, item: string) => {
    const newProfileSkill: SkillContent = {
      id: Math.random().toString(),
      item,
    };

    setProfileSkills((profileSkills) => {
      const updatedProfileSkills = [...profileSkills];
      const updatedProfileSkillIndex = updatedProfileSkills.findIndex(
        (profileSkill) => profileSkill.id === profileSkillId
      );
      const updatedSkillContents = updatedProfileSkills[
        updatedProfileSkillIndex
      ].skills.concat(newProfileSkill);
      const updatedProfileSkill = {
        ...updatedProfileSkills[updatedProfileSkillIndex],
      };
      updatedProfileSkill.skills = updatedSkillContents;
      updatedProfileSkills[updatedProfileSkillIndex] = updatedProfileSkill;
      return updatedProfileSkills;
    });
  };

  const deleteSkillContent = (profileSkillId: string, skillId: string) => {
    setProfileSkills((curProfileSkills) => {
      const updatedProfileSkills = [...curProfileSkills];
      const updatedProfileSkillIndex = updatedProfileSkills.findIndex(
        (profileSkill) => profileSkill.id === profileSkillId
      );
      const updatedSkillContents = updatedProfileSkills[
        updatedProfileSkillIndex
      ].skills.filter((skill) => skill.id !== skillId);
      const updatedProfileSkill = {
        ...updatedProfileSkills[updatedProfileSkillIndex],
      };
      updatedProfileSkill.skills = updatedSkillContents;
      updatedProfileSkills[updatedProfileSkillIndex] = updatedProfileSkill;
      return updatedProfileSkills;
    });
  };

  const updateSkillContent = (
    profileSkillId: string,
    skillId: string,
    newSkill: string
  ) => {
    setProfileSkills((curProfileSkills) => {
      const updatedProfileSkills = [...curProfileSkills];
      const updatedProfileSkillIndex = updatedProfileSkills.findIndex(
        (profileSkill) => profileSkill.id === profileSkillId
      );
      const updatedSkillContents = updatedProfileSkills[
        updatedProfileSkillIndex
      ].skills.slice();
      const updatedSkillContentIndex = updatedSkillContents.findIndex(
        (skill) => skill.id === skillId
      );
      const updatedSkill = {
        ...updatedSkillContents[updatedSkillContentIndex],
        item: newSkill,
      };
      updatedSkillContents[updatedSkillContentIndex] = updatedSkill;
      const updatedProfileSkill = {
        ...updatedProfileSkills[updatedProfileSkillIndex],
      };
      updatedProfileSkill.skills = updatedSkillContents;
      updatedProfileSkills[updatedProfileSkillIndex] = updatedProfileSkill;
      return updatedProfileSkills;
    });
  };

  

  return (
    <ProfileSkillsContext.Provider
      value={{
        profileSkills,
        addProfileSkillPage,
        addSkillContent,
        deleteSkillContent,
        updateSkillContent,
      }}
    >
      {props.children}
    </ProfileSkillsContext.Provider>
  );
};

export default ProfileSkillsContextProvider;
