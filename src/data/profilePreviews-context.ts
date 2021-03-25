import React from "react";

export interface PreviewContent {
  id: string;
  name: string;
  role: string;
  location: string;
  exp: string;
  status: string;
}

export interface ProfilePreviewPage {
  id: string;
  title: string;
  previews: PreviewContent[];
  included: boolean;
}
interface Context {
  profilePreviews: ProfilePreviewPage[];
  addProfilePreviewPage: (title: string) => void;
  addPreviewContent: (
    profilePreviewId: string,
    previewName: string,
    previewRole: string,
    previewLocation: string,
    previewExp: string,
    previewStatus: string
  ) => void;
  deletePreviewContent: (profilePreviewId: string, previewId: string) => void;
  updatePreviewContent: (
    profilePreviewId: string,
    previewId: string,
    newName: string,
    newRole: string,
    newLocation: string,
    newExp: string,
    newStatus: string
  ) => void;
}

const ProfilePreviewsContext = React.createContext<Context>({
  profilePreviews: [],
  addProfilePreviewPage: () => {},
  addPreviewContent: () => {},
  deletePreviewContent: () => {},
  updatePreviewContent: () => {},
});

export default ProfilePreviewsContext;
