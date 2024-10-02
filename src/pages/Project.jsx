import React, { useState } from "react";
import ProjectComponent from "../component/ProjectComponent";
import { Pagination } from "@mui/material"; // Import Material-UI Pagination

function Project() {
  const projects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
    { id: 4, name: "Project 4" },
    { id: 5, name: "Project 5" },
    { id: 6, name: "Project 6" },
    { id: 7, name: "Project 7" },
    { id: 8, name: "Project 8" },
    { id: 9, name: "Project 9" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="project-list">
        {currentProjects.map((project) => (
          <ProjectComponent key={project.id} name={project.name} />
        ))}
      </div>

      {/* Material-UI Pagination */}
      <div
        style={{ display: "flex", justifyContent: "center", margin:"50px" }}
      >
        <Pagination
          count={totalPages} // Number of pages
          page={currentPage} // Current page
          onChange={handlePageChange} // Handle page change
          variant="outlined" // Optional styling
          shape="rounded" // Optional styling for rounded buttons
          color="primary" // Color of the pagination (optional)
        />
      </div>
    </>
  );
}

export default Project;
