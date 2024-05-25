import React, { useState } from "react";

import {useNavigate, useParams, useLocation} from "react-router-dom";

const EditContact = (props) => {
  const { id } = useParams();
  const { state } = useLocation();
  const [name, setName] = useState(state.name);
  const [email, setEmail] = useState(state.email);

  const navigate = useNavigate();
  const edit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0) {
      alert("All fields are to be filled");
      return;
    }
    props.editContactHandler({name, email, id});
    navigate("/");
  };


    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={edit}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="ui button blue">Edit</button>
        </form>
      </div>
    );
}

export default EditContact;
