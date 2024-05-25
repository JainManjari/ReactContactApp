import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>Contact Manager</h2>
      </div>
      <div className="ui container center">
        <Link to="/">
            <button className="ui button blue ">Go Home</button>
        </Link>
        <Link to="/add">
            <button className="ui button blue ">Add Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
