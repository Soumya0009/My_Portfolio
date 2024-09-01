import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../../CSS/AdminProjects.css";
import Project from '../Project.jsx';
function AdminProjects() {
  return (
    <>
      <div className="action-buttons">
        <FontAwesomeIcon icon={faPlus} size="2x" title="Add New" />
        <FontAwesomeIcon icon={faEdit} size="2x" title="Edit" />
        <FontAwesomeIcon icon={faTrashAlt} size="2x" title="Delete" />
      </div>
      <Project />
    </>
  );
}

export default AdminProjects
