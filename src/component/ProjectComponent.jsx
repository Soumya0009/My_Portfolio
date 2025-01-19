import React, { useState } from "react";
import { isLogedIn } from "../auth";
import "../CSS/ProjectComponent.css";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { BASE_URL } from "../Services/helper";
import projectService from "../Services/createProject"; // Import projectService

const ProjectComponent = ({ project, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Track if the card is expanded

  const handleCardClick = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state when clicked
  };

  const handleDelete = async (event) => {
    event.stopPropagation(); // Prevent parent card click event
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await projectService.deleteProject(project.projectID);
        onDelete(project.projectID); // Notify parent to update the list
      } catch (error) {
        console.error("Failed to delete project:", error);
        alert("Error deleting project. Please try again.");
      }
    }
  };

  if (!project) return null;

  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""}`}
      onClick={handleCardClick}
    >
      {/* Project Image */}
      <img
        className="image-cap"
        src={`${BASE_URL}/api/project/image/${
          project.imageName || "default-image.jpg"
        }`}
        alt={project.title || "No title available"}
      />

      {/* Project Title */}
      <div className="card-content">
        <h3>{project.title || "Untitled Project"}</h3>

        {/* Render Content Correctly */}
        <p
          dangerouslySetInnerHTML={{
            __html: isExpanded
              ? project.content || "No description available"
              : (project.content || "No description available").substring(
                  0,
                  100
                ) + "...",
          }}
        ></p>
      </div>

      {/* Action Buttons for Logged-in Users */}
      {isLogedIn() && (
        <div className="card-actions">
          <button className="btn btn-primary" title="Edit Project">
            <EditNoteIcon />
          </button>
          <button
            className="btn btn-danger"
            title="Delete Project"
            onClick={handleDelete}
          >
            <DeleteForeverIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectComponent;
