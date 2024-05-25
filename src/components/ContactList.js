import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const { contacts } = props;
  console.log("conatct list ", contacts);

  const contactList = contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id}/>;
  });
  return (
    <div className="ui celled list">
      Contact List
      {contactList}
    </div>
  );
};

export default ContactList;
