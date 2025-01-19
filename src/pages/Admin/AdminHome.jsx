import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import "../../CSS/AdminHome.css"; // Import a CSS file for styling

function AdminHome() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleEditClick = () => {
    navigate("/admin/add"); // Navigate to the AdminHomeEdit page
  };

  return (
    <>
      <div>
        <div className="add-button" onClick={handleEditClick} title="Add About">
          <PostAddIcon />
        </div>
        <div className="edit-button" title="Edit About">
          <EditNoteIcon />
        </div>
        <div className="delete-button" title="Delete About">
          <DeleteForeverSharpIcon />
        </div>
      </div>
      <Home />
    </>
  );
}

export default AdminHome;
