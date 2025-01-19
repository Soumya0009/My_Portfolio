import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigate
import "../../CSS/AdminProjects.css";
import Project from "../Project.jsx";
import PostAddIcon from "@mui/icons-material/PostAdd";

function AdminProjects() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleAddNew = () => {
    // Navigate to the Add Project page
    navigate("/admin/add/project");
  };

  return (
    <>
      <div
        className="action-buttons"
        onClick={handleAddNew}
        title="Add New Project"
      >
        <PostAddIcon />
      </div>
      <Project />
    </>
  );
}

export default AdminProjects;
