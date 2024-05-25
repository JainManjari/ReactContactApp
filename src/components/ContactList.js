import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const { contacts, removeContactHanlder } = props;

  const contactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        removeContactHanlder={removeContactHanlder}
      />
    );
  });
  return (
    <div className="ui celled list">
      Contact List
      {contactList}
    </div>
  );
};

export default ContactList;
