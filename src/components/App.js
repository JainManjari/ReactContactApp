import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const removeContactHanlder = (id) => {
    let newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    console.log("removing contact ", newContactList);
    setContacts(newContactList);
  };

  const addContactHandler = (contact) => {
    console.log("add ", contact);
    setContacts([...contacts, { id: contacts.length, ...contact }]);
  };

  const fetchContactById = (id) => {

  }

  useEffect(() => {
    let retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedContacts) {
      setContacts(retrievedContacts);
    }
  }, []); // only rendering it once

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]); // updating local storage every time a new contact is added

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<ContactList contacts={contacts} removeContactHanlder={removeContactHanlder}/>}
          />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route path="/contact-detail/:id" element={<ContactDetail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
