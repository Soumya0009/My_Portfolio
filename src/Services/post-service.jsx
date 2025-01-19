import { privateAxios } from "./helper";
import { myAxios } from "./helper"; // Correctly imported myAxios

// Create About Function
export const createPost = (aboutData) => {
  return privateAxios
    .post(`/api/user/${aboutData.userId}/about`, aboutData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while creating about:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Get Abouts by User Function
export const getAboutsByUser = (userId) => {
  return myAxios
    .get(`/api/user/${userId}/about`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while fetching abouts by user:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Get About by ID Function
export const getAboutById = (aboutId) => {
  return myAxios
    .get(`/api/about/${aboutId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while fetching about by ID:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Delete About by ID Function
export const deleteAbout = (aboutId) => {
  return privateAxios
    .delete(`/api/about/${aboutId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while deleting about:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Update About by ID Function
export const updateAbout = (aboutData, aboutId) => {
  return privateAxios
    .put(`/api/about/${aboutId}`, aboutData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while updating about:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Upload About Image Function
export const uploadAboutImage = (aboutId, imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  return privateAxios
    .post(`/api/about/image/upload/${aboutId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while uploading about image:",
        error.response?.data || error.message
      );
      throw error;
    });
};

// Function to Fetch About Image as Blob
export const fetchAboutImageAsBlob = (imageName) => {
  return myAxios
    .get(`/api/about/image/${imageName}`, { responseType: "blob" })
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error while fetching about image:",
        error.response?.data || error.message
      );
      throw error;
    });
};
