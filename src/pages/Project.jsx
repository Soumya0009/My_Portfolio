import React, { useState, useEffect } from "react";
import ProjectComponent from "../component/ProjectComponent";
import { Pagination } from "@mui/material";
import projectService from "../Services/createProject";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Fetch projects on mount
  useEffect(() => {
    projectService
      .getAllProjects()
      .then((data) => {
        // Deduplicate projects based on projectID
        const uniqueProjects = Array.from(
          new Map(data.map((project) => [project.projectID, project])).values()
        );
        setProjects(uniqueProjects);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      });
  }, []);

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

  const handleDelete = (deletedProjectId) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.projectID !== deletedProjectId)
    );
  };

  if (loading) {
    return (
      <div className="loading">
        {[...Array(3)].map((_, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <Skeleton height={150} />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <>
      <div className="project-list">
        {currentProjects.map((project) => (
          <ProjectComponent
            key={project.projectID}
            project={project}
            onDelete={handleDelete} // Pass delete handler
          />
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </div>
    </>
  );
}

export default Project;

// import React, { useState, useEffect } from "react";
// import ProjectComponent from "../component/ProjectComponent";
// import { Pagination } from "@mui/material";
// import projectService from "../Services/createProject";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// function Project() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 3;

//   // Fetch projects on mount
//   useEffect(() => {
//     projectService
//       .getAllProjects()
//       .then((data) => {
//         // Deduplicate projects based on projectID
//         const uniqueProjects = Array.from(
//           new Map(data.map((project) => [project.projectID, project])).values()
//         );
//         setProjects(uniqueProjects);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching projects:", err);
//         setError("Failed to load projects. Please try again later.");
//         setLoading(false);
//       });
//   }, []);

//   const totalPages = Math.ceil(projects.length / projectsPerPage);

//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

//   const handlePageChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   if (loading) {
//     return (
//       <div className="loading">
//         {[...Array(3)].map((_, index) => (
//           <div key={index} style={{ marginBottom: "20px" }}>
//             <Skeleton height={150} />
//           </div>
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="error-message">{error}</div>;
//   }

//   return (
//     <>
//       <div className="project-list">
//         {currentProjects.map((project) => (
//           <ProjectComponent key={project.projectID} project={project} />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={handlePageChange}
//           variant="outlined"
//           shape="rounded"
//           color="primary"
//         />
//       </div>
//     </>
//   );
// }

// export default Project;
