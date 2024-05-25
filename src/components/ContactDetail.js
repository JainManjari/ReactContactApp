import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import contactImg from "../images/contact.png";

const ContactDetail = (props) => {
  const { state } = useLocation();
  const { name, email } = state;
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
    </div>
  );
};

export default ContactDetail;
