import React from "react";

export interface SkillContent {
  id: string;
  item: string;
}

export interface ProfileSkillPage {
  id: string;
  title: string;
  skills: SkillContent[];
  included: boolean;
}
interface Context {
  profileSkills: ProfileSkillPage[];
  addProfileSkillPage: (title: string) => void;
  addSkillContent: (profileSkillId: string, skillItem: string) => void;
  deleteSkillContent: (profileSkillId: string, skillId: string) => void;
  updateSkillContent: (
    profileSkillId: string,
    skillId: string,
    newSkill: string
  ) => void;
}

const ProfileSkillsContext = React.createContext<Context>({
  profileSkills: [],
  addProfileSkillPage: () => {},
  addSkillContent: () => {},
  deleteSkillContent: () => {},
  updateSkillContent: () => {},
});

export default ProfileSkillsContext;
