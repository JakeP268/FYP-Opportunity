import React, { useState } from "react";

import ProfileContactsContext, {
  ProfileContactPage,
  ContactContent,
} from "./profileContacts-context";

const ProfileContactsContextProvider: React.FC = (props) => {
  const [profileContacts, setProfileContacts] = useState<ProfileContactPage[]>([
    { id: "c1", title: "Contact", contacts: [], included: true },
  ]);

  const addProfileContactPage = (title: string) => {
    const newProfileContact: ProfileContactPage = {
      id: Math.random().toString(),
      title,
      contacts: [],
      included: true,
    };

    setProfileContacts((curProfileContacts) => {
      return curProfileContacts.concat(newProfileContact);
    });
  };

  const addContactContent = (
    profileContactId: string,
    information: string,
    email: string,
    number: string
  ) => {
    const newProfileContact: ContactContent = {
      id: Math.random().toString(),
      information,
      email,
      number,
    };

    setProfileContacts((curprofileContacts) => {
      const updatedProfileContacts = [...curprofileContacts];
      const updatedProfileContactIndex = updatedProfileContacts.findIndex(
        (profileContact) => profileContact.id === profileContactId
      );
      const updatedContactContents = updatedProfileContacts[
        updatedProfileContactIndex
      ].contacts.concat(newProfileContact);
      const updatedProfileContact = {
        ...updatedProfileContacts[updatedProfileContactIndex],
      };
      updatedProfileContact.contacts = updatedContactContents;
      updatedProfileContacts[
        updatedProfileContactIndex
      ] = updatedProfileContact;
      return updatedProfileContacts;
    });
  };

  const deleteContactContent = (
    profileContactId: string,
    contactId: string
  ) => {
    setProfileContacts((curProfileContacts) => {
      const updatedProfileContacts = [...curProfileContacts];
      const updatedProfileContactIndex = updatedProfileContacts.findIndex(
        (profileContact) => profileContact.id === profileContactId
      );
      const updatedContactContents = updatedProfileContacts[
        updatedProfileContactIndex
      ].contacts.filter((contact) => contact.id !== contactId);
      const updatedProfileContact = {
        ...updatedProfileContacts[updatedProfileContactIndex],
      };
      updatedProfileContact.contacts = updatedContactContents;
      updatedProfileContacts[
        updatedProfileContactIndex
      ] = updatedProfileContact;
      return updatedProfileContacts;
    });
  };

  const updateContactContent = (
    profileContactId: string,
    contactId: string,
    newInformation: string,
    newEmail: string,
    newNumber: string
  ) => {
    setProfileContacts((curProfileContacts) => {
      const updatedProfileContacts = [...curProfileContacts];
      const updatedProfileContactIndex = updatedProfileContacts.findIndex(
        (profileContact) => profileContact.id === profileContactId
      );
      const updatedContactContents = updatedProfileContacts[
        updatedProfileContactIndex
      ].contacts.slice();
      const updatedContactContentIndex = updatedContactContents.findIndex(
        (contact) => contact.id === contactId
      );
      const updatedContact = {
        ...updatedContactContents[updatedContactContentIndex],
        information: newInformation,
        email: newEmail,
        number: newNumber,
      };
      updatedContactContents[updatedContactContentIndex] = updatedContact;
      const updatedProfileContact = {
        ...updatedProfileContacts[updatedProfileContactIndex],
      };
      updatedProfileContact.contacts = updatedContactContents;
      updatedProfileContacts[
        updatedProfileContactIndex
      ] = updatedProfileContact;
      return updatedProfileContacts;
    });
  };



  return (
    <ProfileContactsContext.Provider
      value={{
        profileContacts,
        addProfileContactPage,
        addContactContent,
        deleteContactContent,
        updateContactContent,
      }}
    >
      {props.children}
    </ProfileContactsContext.Provider>
  );
};

export default ProfileContactsContextProvider;
