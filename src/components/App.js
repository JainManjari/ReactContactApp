import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import ContactDeletePage from "./ContactDeletePage";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const removeContactHanlder = (id) => {
    let newContactList = contacts.filter((contact) => {
      return contact.id.toString()!==id;
    });
    console.log("removing contact ", newContactList, contacts, id);
    setContacts(newContactList);
  };

  const addContactHandler = (contact) => {
    console.log("add ", contact);
    setContacts([...contacts, { id: contacts.length, ...contact }]);
  };

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
          <Route path="/contact/delete/:id" element={<ContactDeletePage removeContactHanlder={removeContactHanlder}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
