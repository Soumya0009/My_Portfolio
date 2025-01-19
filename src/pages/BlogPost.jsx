import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/BlogPost.css";
import blogService from "../Services/createBlog"; // Assuming this is your service for fetching blogs
import { BASE_URL } from "../Services/helper"; // Assuming this contains the base API URL
import { toast } from "react-toastify";

const BlogPost = () => {
  const { id } = useParams(); // Extract blog ID from URL parameters
  const [blog, setBlog] = useState(null); // State for the current blog
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch the specific blog based on the ID
    const fetchBlog = async () => {
      try {
        const response = await blogService.getBlogById(id); // Assuming `getBlogById` fetches the blog by its ID
        setBlog(response); // Set the blog data
      } catch (error) {
        toast.error("Failed to fetch the blog post");
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", margin: "20px" }}>Loading...</div>
    );
  }

  if (!blog) {
    return (
      <div style={{ textAlign: "center", color: "#888", margin: "20px" }}>
        Blog post not found
      </div>
    );
  }

  return (
    <div className="blog-post">
      <div className="image-container">
        <img
          src={
            blog.imageName
              ? `${BASE_URL}/api/blog/image/${blog.imageName}` // Dynamically fetch image from API
              : "default-image.jpg" // Fallback image
          }
          alt={blog.title}
        />
      </div>
      <div className="content">
        <h1>{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default BlogPost;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../CSS/BlogPost.css";
// import blogService from "../Services/createBlog"; // Assuming this is your service for fetching blogs
// import { BASE_URL } from "../Services/helper"; // Assuming this contains the base API URL
// import { toast } from "react-toastify";

// const BlogPost = () => {
//   const { id } = useParams(); // Extract blog ID from URL parameters
//   const [blog, setBlog] = useState(null); // State for the current blog
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     // Fetch the specific blog based on the ID
//     const fetchBlog = async () => {
//       try {
//         const response = await blogService.getBlogById(id); // Assuming `getBlogById` fetches the blog by its ID
//         setBlog(response); // Set the blog data
//       } catch (error) {
//         toast.error("Failed to fetch the blog post");
//         console.error("Error fetching blog post:", error);
//       } finally {
//         setLoading(false); // Stop the loading state
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   if (loading) {
//     return (
//       <div style={{ textAlign: "center", margin: "20px" }}>Loading...</div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div style={{ textAlign: "center", color: "#888", margin: "20px" }}>
//         Blog post not found
//       </div>
//     );
//   }

//   return (
//     <div className="blog-post">
//       <div className="image-container">
//         <img
//           src={
//             blog.imageName
//               ? `${BASE_URL}/api/blog/image/${blog.imageName}` // Dynamically fetch image from API
//               : "default-image.jpg" // Fallback image
//           }
//           alt={blog.title}
//         />
//       </div>
//       <div className="content">
//         <h1>{blog.title}</h1>
//         <p>{blog.content}</p> {/* Display full blog content */}
//       </div>
//     </div>
//   );
// };

// export default BlogPost;
