import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const {contacts, removeContactHanlder } = props;
  console.log("contacts ", contacts);

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
    <div className="ui celled list" style={{marginTop:100}}>
      Contact List
      <Link to="/add">
        <button className="ui button blue right">Add Contact</button>
      </Link>
      {contactList}
    </div>
  );
};

export default ContactList;
