import { privateAxios, myAxios } from "./helper";

// Create Project
const createProject = (projectData) => {
  return privateAxios
    .post(`/api/user/${projectData.userId}/project`, projectData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while creating project:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Get All Projects
const getAllProjects = () => {
  return myAxios
    .get("/api/projects")
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while fetching all projects:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Get Projects by User
const getProjectsByUser = (userId) => {
  return myAxios
    .get(`/api/user/${userId}/project`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while fetching projects by user:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Get Project by ID
const getProjectById = (projectId) => {
  return myAxios
    .get(`/api/project/${projectId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while fetching project by ID:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Upload Project Image
const uploadProjectImage = async (projectId, imageData) => {
  const formData = new FormData();
  formData.append("image", imageData); // Use the correct parameter name

  try {
    const response = await privateAxios.post(
      `/api/project/image/upload/${projectId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error while uploading project image:",
      error.response?.data || error.message
    );
    throw error;
  }
};



// Download Project Image
const downloadProjectImage = (imageName) => {
  return myAxios
    .get(`/api/project/image/${imageName}`, { responseType: "blob" })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", imageName); // Name of the image file
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
    .catch((error) => {
      console.error(
        "Error while downloading project image:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Delete Project
const deleteProject = (projectId) => {
  return privateAxios
    .delete(`/api/project/${projectId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while deleting project:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Update Project
const updateProject = (projectId, projectData) => {
  return privateAxios
    .put(`/api/project/${projectId}`, projectData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while updating project:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Export all functions
export default {
  createProject,
  getAllProjects,
  getProjectsByUser,
  getProjectById,
  uploadProjectImage,
  downloadProjectImage,
  deleteProject,
  updateProject,
};
