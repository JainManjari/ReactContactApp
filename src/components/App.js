import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import api from "../api/contact";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import ContactDeletePage from "./ContactDeletePage";
import EditContact from "./EditContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [seachTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const removeContactHanlder = async (id) => {
    const response = await api.delete(`/contacts/${id}`);
    console.log("delete ", response);
    let newContactList = contacts.filter((contact) => {
      return contact.id.toString() !== id;
    });
    console.log("removing contact ", newContactList, contacts, id);
    setContacts(newContactList);
  };

  const addContactHandler = async (contact) => {
    const newContact = {
      id: Math.random(0, 88237836).toString(),
      ...contact,
    };

    const response = await api.post("/contacts", newContact);
    setContacts([...contacts, response.data]);
  };

  const editContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    console.log("editconatct", response.data);
    setContacts(
      contacts.map((existingContact) => {
        return existingContact.id === contact.id
          ? response.data
          : existingContact;
      })
    );
  };

  const searchContactHandler = async function(e) {
    setSearchTerm(e.target.value);
    console.log("search term ", seachTerm);
    if(seachTerm!=="") {
      const results = contacts.filter((contact)=>{
        return Object.values(contact).join(" ").toLowerCase().includes(seachTerm.toLowerCase())
      });
      setSearchResults(results);
    } else {
      setSearchResults(contacts);
    }

  }

  const retrievedContacts = async function () {
    let retrievedContacts = await api.get("/contacts");
    if (retrievedContacts.data) {
      setContacts(retrievedContacts.data);
    }
  };

  useEffect(() => {
    retrievedContacts();
  }, []); // only rendering it once

  useEffect(() => {
    retrievedContacts();
  }, [contacts]); // updating local storage every time a new contact is added

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={seachTerm.length<1 ? contacts : searchResults}
                removeContactHanlder={removeContactHanlder}
                searchContactHandler={searchContactHandler}
                term = {seachTerm}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/contact/edit/:id"
            element={<EditContact editContactHandler={editContactHandler} />}
          />
          <Route path="/contact-detail/:id" element={<ContactDetail />} />
          <Route
            path="/contact/delete/:id"
            element={
              <ContactDeletePage removeContactHanlder={removeContactHanlder} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// npm install -g json-server
// sudo npm install --save axios
