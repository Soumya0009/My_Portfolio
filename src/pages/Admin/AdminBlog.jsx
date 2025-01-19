// import React, { useState } from "react";
import Blogs from "../Blogs.jsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostAddIcon from "@mui/icons-material/PostAdd";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Ensure it's imported
import "../../CSS/AdminProjects.css"; // Import a CSS file for styling

function AdminBlog() {
  // const [showPrompt, setShowPrompt] = useState(false); // Show prompt to select blog
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handler for Add New action
  const handleAddNew = () => {
    // Add your logic to add a new blog (e.g., redirect to add blog page or show form)
    navigate("/admin/add/blog"); // Navigate to the AdminHomeEdit page
  };

  return (
    <>
      {/* Action button for adding a new blog */}
      <div className="action-buttons" onClick={handleAddNew} title="Add New Blog">
        <PostAddIcon />
        {/* <FontAwesomeIcon icon={faPlus} /> */} 
      </div>

      {/* Actual Blogs component */}
      <Blogs />
    </>
  );
}

export default AdminBlog;
