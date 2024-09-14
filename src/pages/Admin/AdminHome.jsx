import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "../../CSS/AdminHome.css"; // Import a CSS file for styling

function AdminHome() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleEditClick = () => {
    navigate("/admin/edit"); // Navigate to the AdminHomeEdit page
  };

  return (
    <>
      <div className="edit-button" onClick={handleEditClick}>
        <FontAwesomeIcon icon={faEdit} size="2x" title="Edit" />
      </div>
      <Home />
    </>
  );
}

export default AdminHome;
