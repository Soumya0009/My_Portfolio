import { privateAxios } from "./helper";
import { myAxios } from "./helper";
// Create a new blog
const createBlog = async (blogData) => {
  try {
    const response = await privateAxios.post(`/api/user/${blogData.userId}/blog`, blogData);
    return response.data;
  } catch (error) {
    console.error("Error while creating blog:", error.response?.data || error.message);
    throw error;
  }
};

// Update a blog
const updateBlog = async (blogId, blogData) => {
  try {
    const response = await privateAxios.put(`/api/blog/${blogId}`, blogData);
    return response.data;
  } catch (error) {
    console.error(
      "Error while updating blog:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Delete a blog
const deleteBlog = async (blogId) => {
  try {
    const response = await privateAxios.delete(`/api/blog/${blogId}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error while deleting blog:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Get a blog by ID
const getBlogById = async (blogId) => {
  try {
    const response = await myAxios.get(`/api/blog/${blogId}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error while fetching blog by ID:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Get all blogs by user
const getBlogsByUser = async (userId) => {
  try {
    const response = await myAxios.get(`/api/user/${userId}/blog`);
    return response.data;
  } catch (error) {
    console.error(
      "Error while fetching blogs by user:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Get all blogs
const getAllBlogs = async () => {
  try {
    const response = await myAxios.get(`/api/blogs`);
    return response.data;
  } catch (error) {
    console.error(
      "Error while fetching all blogs:",
      error.response?.data || error.message
    );
    throw error;
  }
};


// Upload blog image function
export const uploadBlogImage = async (blogId, imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await privateAxios.post(
      `/api/blog/image/upload/${blogId}`,
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
      "Error while uploading blog image:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Fetch blog image
const getBlogImage = async (imageName) => {
  try {
    const response = await myAxios.get(`/api/blog/image/${imageName}`, {
      responseType: "blob", // Ensures image data is received as binary
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error while fetching blog image:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getBlogsByUser,
  getAllBlogs,
  uploadBlogImage,
  getBlogImage,
};
