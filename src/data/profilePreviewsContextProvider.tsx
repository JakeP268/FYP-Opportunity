import React, { useState } from "react";

import ProfilePreviewsContext, {
  ProfilePreviewPage,
  PreviewContent,
} from "./profilePreviews-context";

const ProfilePreviewsContextProvider: React.FC = (props) => {
  const [profilePreviews, setProfilePreviews] = useState<ProfilePreviewPage[]>([
    { id: "p1", title: "Preview Card", previews: [], included: true },
  ]);

  const addProfilePreviewPage = (title: string) => {
    const newProfilePreview: ProfilePreviewPage = {
      id: Math.random().toString(),
      title,
      previews: [],
      included: true,
    };

    setProfilePreviews((curProfilePreviews) => {
      return curProfilePreviews.concat(newProfilePreview);
    });
  };

  const addPreviewContent = (
    profilePreviewId: string,
    name: string,
    role: string,
    location: string,
    exp: string,
    status: string
  ) => {
    const newProfilePreview: PreviewContent = {
      id: Math.random().toString(),
      name,
      role,
      location,
      exp,
      status,
    };

    setProfilePreviews((profilePreviews) => {
      const updatedProfilePreviews = [...profilePreviews];
      const updatedProfilePreviewIndex = updatedProfilePreviews.findIndex(
        (profilePreview) => profilePreview.id === profilePreviewId
      );
      const updatedPreviewContents = updatedProfilePreviews[
        updatedProfilePreviewIndex
      ].previews.concat(newProfilePreview);
      const updatedProfilePreview = {
        ...updatedProfilePreviews[updatedProfilePreviewIndex],
      };
      updatedProfilePreview.previews = updatedPreviewContents;
      updatedProfilePreviews[
        updatedProfilePreviewIndex
      ] = updatedProfilePreview;
      return updatedProfilePreviews;
    });
  };

  const deletePreviewContent = (
    profilePreviewId: string,
    previewId: string
  ) => {
    setProfilePreviews((curProfilePreviews) => {
      const updatedProfilePreviews = [...curProfilePreviews];
      const updatedProfilePreviewIndex = updatedProfilePreviews.findIndex(
        (profilePreview) => profilePreview.id === profilePreviewId
      );
      const updatedPreviewContents = updatedProfilePreviews[
        updatedProfilePreviewIndex
      ].previews.filter((preview) => preview.id !== previewId);
      const updatedProfilePreview = {
        ...updatedProfilePreviews[updatedProfilePreviewIndex],
      };
      updatedProfilePreview.previews = updatedPreviewContents;
      updatedProfilePreviews[
        updatedProfilePreviewIndex
      ] = updatedProfilePreview;
      return updatedProfilePreviews;
    });
  };

  const updatePreviewContent = (
    profilePreviewId: string,
    previewId: string,
    newName: string,
    newRole: string,
    newLocation: string,
    newExp: string,
    newStatus: string
  ) => {
    setProfilePreviews((curProfilePreviews) => {
      const updatedProfilePreviews = [...curProfilePreviews];
      const updatedProfilePreviewIndex = updatedProfilePreviews.findIndex(
        (profilePreview) => profilePreview.id === profilePreviewId
      );
      const updatedPreviewContents = updatedProfilePreviews[
        updatedProfilePreviewIndex
      ].previews.slice();
      const updatedPreviewContentIndex = updatedPreviewContents.findIndex(
        (preview) => preview.id === previewId
      );
      const updatedPreview = {
        ...updatedPreviewContents[updatedPreviewContentIndex],
        name: newName,
        role: newRole,
        location: newLocation,
        exp: newExp,
        status: newStatus,
      };
      updatedPreviewContents[updatedPreviewContentIndex] = updatedPreview;
      const updatedProfilePreview = {
        ...updatedProfilePreviews[updatedProfilePreviewIndex],
      };
      updatedProfilePreview.previews = updatedPreviewContents;
      updatedProfilePreviews[
        updatedProfilePreviewIndex
      ] = updatedProfilePreview;
      return updatedProfilePreviews;
    });
  };



  return (
    <ProfilePreviewsContext.Provider
      value={{
        profilePreviews,
        addProfilePreviewPage,
        addPreviewContent,
        deletePreviewContent,
        updatePreviewContent,
      }}
    >
      {props.children}
    </ProfilePreviewsContext.Provider>
  );
};

export default ProfilePreviewsContextProvider;
