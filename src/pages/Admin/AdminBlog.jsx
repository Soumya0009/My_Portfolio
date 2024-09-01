import React from 'react'
import Blogs from '../Blogs.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../../CSS/AdminProjects.css'; // Import a CSS file for styling
function AdminBlog() {
  return (
    <>
      <div className="action-buttons">
        <FontAwesomeIcon icon={faPlus} size="2x" title="Add New" />
        <FontAwesomeIcon icon={faEdit} size="2x" title="Edit" />
        <FontAwesomeIcon icon={faTrashAlt} size="2x" title="Delete" />
      </div>
      <Blogs />
    </>
  );
}

export default AdminBlog
