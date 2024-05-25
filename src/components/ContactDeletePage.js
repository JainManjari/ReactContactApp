import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import contactImg from "../images/contact.png";

const ContactDeletePage = (props) => {
  const { id } = useParams();
  const { state } = useLocation();
  const { name, email } = state;
  const { removeContactHanlder } = props;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={contactImg} alt="user-image" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
      <Link to="/">
        <div className="center-div">
          <button
            className="ui button red center"
            onClick={() => removeContactHanlder(id)}
          >
            Do you want to delete it?
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ContactDeletePage;
