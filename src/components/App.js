import "./App.css";
import React, { useEffect, useState } from "react";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id:contacts.length,...contact}]);
  };

  useEffect(() => {
    let retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrievedContacts) {
      setContacts(retrievedContacts);
    }
  }, []); // only rendering it once

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]); // updating local storage every time a new contact is added

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
