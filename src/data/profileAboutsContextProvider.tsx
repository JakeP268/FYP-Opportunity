import React, { useState } from "react";

import ProfileAboutsContext, {
  ProfileAboutPage,
  AboutContent,
} from "./profileAbouts-context";

const ProfileAboutsContextProvider: React.FC = (props) => {
  //Data that is being managed in this state is the array of abouts, which is initialy empty. 
  const [profileAbouts, setProfileAbouts] = useState<ProfileAboutPage[]>([
    { id: "a1", title: "About", abouts: [], included: true },
  ]);

  const addProfileAboutPage = (title: string) => {
    const newProfileAbout: ProfileAboutPage = {
      id: Math.random().toString(),
      title,
      abouts: [],
      included: true,
    };

    setProfileAbouts((curProfileAbouts) => {
      return curProfileAbouts.concat(newProfileAbout);
    });
  };


  //Add about Content function
  const addAboutContent = (
    profileAboutId: string,
    name: string,
    rTitle: string,
    bio: string,
    interests: string,
    pr: string
  ) => {
    const newProfileAbout: AboutContent = {
      id: Math.random().toString(),
      name,
      rTitle,
      bio,
      interests,
      pr,
    };

    setProfileAbouts((curProfileAbouts) => {
      const updatedProfileAbouts = [...curProfileAbouts];
      const updatedProfileAboutIndex = updatedProfileAbouts.findIndex(
        (profileAbout) => profileAbout.id === profileAboutId
      );
      const updatedAboutContents = updatedProfileAbouts[
        updatedProfileAboutIndex
      ].abouts.concat(newProfileAbout);
      const updatedProfileAbout = {
        ...updatedProfileAbouts[updatedProfileAboutIndex],
      };
      updatedProfileAbout.abouts = updatedAboutContents;
      updatedProfileAbouts[updatedProfileAboutIndex] = updatedProfileAbout;
      return updatedProfileAbouts;
    });
  };

  //Delete about Content function
  const deleteAboutContent = (profileAboutId: string, aboutId: string) => {
    setProfileAbouts((curProfileAbouts) => {
      const updatedProfileAbouts = [...curProfileAbouts];
      const updatedProfileAboutIndex = updatedProfileAbouts.findIndex(
        (profileAbout) => profileAbout.id === profileAboutId
      );
      const updatedAboutContents = updatedProfileAbouts[
        updatedProfileAboutIndex
      ].abouts.filter((about) => about.id !== aboutId);
      const updatedProfileAbout = {
        ...updatedProfileAbouts[updatedProfileAboutIndex],
      };
      updatedProfileAbout.abouts = updatedAboutContents;
      updatedProfileAbouts[updatedProfileAboutIndex] = updatedProfileAbout;
      return updatedProfileAbouts;
    });
  };

  //Update about Content function
  const updateAboutContent = (
    profileAboutId: string,
    aboutId: string,
    newName: string,
    newRTitle: string,
    newBio: string,
    newInterests: string,
    newPr: string
  ) => {
    setProfileAbouts((curProfileAbouts) => {
      const updatedProfileAbouts = [...curProfileAbouts];
      const updatedProfileAboutIndex = updatedProfileAbouts.findIndex(
        (profileAbout) => profileAbout.id === profileAboutId
      );
      const updatedAboutContents = updatedProfileAbouts[
        updatedProfileAboutIndex
      ].abouts.slice();
      const updatedAboutContentIndex = updatedAboutContents.findIndex(
        (about) => about.id === aboutId
      );
      const updatedAbout = {
        ...updatedAboutContents[updatedAboutContentIndex],
        name: newName,
        rTitle: newRTitle,
        bio: newBio,
        interests: newInterests,
        pr: newPr,
      };
      updatedAboutContents[updatedAboutContentIndex] = updatedAbout;
      const updatedProfileAbout = {
        ...updatedProfileAbouts[updatedProfileAboutIndex],
      };
      updatedProfileAbout.abouts = updatedAboutContents;
      updatedProfileAbouts[updatedProfileAboutIndex] = updatedProfileAbout;
      return updatedProfileAbouts;
    });
  };

 
//Wrapper which holds the behind the scenes Context.ts file.
  return (
    <ProfileAboutsContext.Provider
    //Value holds latest context value which will be used as data behind the scenes by React.
    //The value on this provider matches with the defintion of context within the profileAbout.ts file
      value={{
        profileAbouts,
        addProfileAboutPage,
        addAboutContent,
        deleteAboutContent,
        updateAboutContent,
      }}
    >
      {props.children}
    </ProfileAboutsContext.Provider>
  );
};

export default ProfileAboutsContextProvider;
