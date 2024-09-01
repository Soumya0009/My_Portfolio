import React from "react";
import Home from "../Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "../../CSS/AdminHome.css"; // Import a CSS file for styling

function AdminHome() {
  return (
    <>
      <div className="edit-button">
        <FontAwesomeIcon icon={faEdit} size="2x" title="Edit" />
      </div>
      <Home />
    </>
  );
}

export default AdminHome;
