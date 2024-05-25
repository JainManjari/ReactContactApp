import React from "react";
import contact from "../images/contact.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { name, email, id } = props.contact;
  const { removeContactHanlder } = props;
  return (
    <div className="item">
      <img
        className="ui avatar image"
        src={contact}
        alt="contact-image"
      />
      <div className="content">
        <Link to={`/contact-detail/${id}`} state={{...props.contact}}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7", cursor: "pointer" }}
          onClick={() => removeContactHanlder(id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
