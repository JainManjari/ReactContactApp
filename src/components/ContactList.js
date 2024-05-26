import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const {contacts, removeContactHanlder, term, searchContactHandler} = props;

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
      <div className="ui search">   
            <div className="ui icon input">
                <input type="text" placeholder="Search Contact" className="prompt" value={term} onChange={searchContactHandler}/>
                <i className="search icon"/>
            </div>
      </div>
      {contactList.length>0 ? contactList : "No Contacts Available"}
    </div>
  );
};

export default ContactList;
