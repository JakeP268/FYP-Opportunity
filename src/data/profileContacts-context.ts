import React from "react";

export interface ContactContent {
  id: string;
  information: string;
  email: string;
  number: string;
}

export interface ProfileContactPage {
  id: string;
  title: string;
  contacts: ContactContent[];
  included: boolean;
}
interface Context {
  profileContacts: ProfileContactPage[];
  addProfileContactPage: (title: string) => void;
  addContactContent: (
    profileContactId: string,
    contactInformation: string,
    contactEmail: string,
    contactNumber: string
  ) => void;
  deleteContactContent: (profileContactId: string, contactId: string) => void;
  updateContactContent: (
    profileContactId: string,
    contactId: string,
    newInformation: string,
    newEmail: string,
    newNumber: string
  ) => void;
}

const ProfileContactsContext = React.createContext<Context>({
  profileContacts: [],
  addProfileContactPage: () => {},
  addContactContent: () => {},
  deleteContactContent: () => {},
  updateContactContent: () => {},
});

export default ProfileContactsContext;
