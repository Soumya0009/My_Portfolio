import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  Label,
  Input,
} from "reactstrap";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { getCurrentUserDetails } from "../../auth";
import {
  createPost as doCreatePost,
  uploadAboutImage,
} from "../../Services/post-service";
import BlogService from "../../Services/createBlog";
import ProjectService from "../../Services/createProject";

const AdminHomeAdd = () => {
  const editor = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setUser(getCurrentUserDetails());
  }, []);

  const handleContentChange = (newContent) => {
    setPost((prev) => ({ ...prev, content: newContent }));
  };

  const handleTitleChange = (event) => {
    setPost((prev) => ({ ...prev, title: event.target.value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      toast.success("Image selected!");
    }
  };

  const handleCreatePost = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Please select an image to upload!");
      return;
    }

    if (
      post.content.trim() === "" ||
      (location.pathname === "/admin/add/blog" && post.title.trim() === "") ||
      (location.pathname === "/admin/add/project" && post.title.trim() === "")
    ) {
      toast.info("Title and Content are required!!!");
      return;
    }

    if (!user) {
      toast.error("User is not loaded yet. Please try again.");
      return;
    }

    post["userId"] = user.id || 1 || 0;

    try {
      let BlogId = null;
      let ProjectId = null;
      let AboutId = null;

      if (location.pathname === "/admin/add/blog") {
        const createdBlog = await BlogService.createBlog(post);
        BlogId = createdBlog.blogId;//Get Blogid from the response
        toast.success("Blog Created!");
      } else if (location.pathname === "/admin/add/project") {
        const createdProject = await ProjectService.createProject(post);
        ProjectId = createdProject.projectID;//Get ProjectId from the response
        toast.success("Project Created!");
      } else {
        const createdAbout = await doCreatePost(post);
        AboutId = createdAbout.id;//Get AboutId from the response
        toast.success("About Post Created!");
      }

      if (BlogId) {
        await BlogService.uploadBlogImage(BlogId, image);
        toast.success("Blog image uploaded successfully!");
      } else if (ProjectId) {
        await ProjectService.uploadProjectImage(ProjectId, image);
        toast.success("Project image uploaded successfully!");
      } else if (AboutId) {
        await uploadAboutImage(AboutId, image);
        toast.success("About image uploaded successfully!");
      }

      setPost({ title: "", content: "" });
      setImage(null);

      if (BlogId) navigate(`/admin/blog/`);
      if (ProjectId) navigate(`/admin/project/`);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Card style={{ maxHeight: "75vh", overflowY: "auto", maxWidth: "90vw" }}>
      <CardBody>
        <div
          style={{
            position: "sticky",
            top: "0",
            backgroundColor: "white",
            zIndex: "1",
            paddingBottom: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <h3>What's Going On Your Mind?</h3>
        </div>

        <Form onSubmit={handleCreatePost}>
          {(location.pathname === "/admin/add/blog" ||
            location.pathname === "/admin/add/project") && (
            <div className="my-3">
              <Label for="title">
                {location.pathname.includes("blog")
                  ? "Blog Title"
                  : "Project Title"}
              </Label>
              <Input
                type="text"
                id="title"
                value={post.title}
                onChange={handleTitleChange}
                placeholder={`Enter the ${
                  location.pathname.includes("blog") ? "title" : "project title"
                }`}
              />
            </div>
          )}

          <div className="my-3">
            <Label for="content">Content</Label>
            <JoditEditor
              ref={editor}
              value={post.content}
              onChange={handleContentChange}
            />
          </div>

          <div className="my-3">
            <Label for="image">Select Image</Label>
            <Input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <Container className="text-center">
            <Button type="submit" color="success" className="ms-2">
              <CreateIcon />
              {location.pathname.includes("project")
                ? "Create Project"
                : "Create Blog"}
            </Button>
            <Button
              color="danger"
              className="ms-2"
              onClick={() => {
                if (window.confirm("Do you want to clear all the data?")) {
                  setPost({ title: "", content: "" });
                  setImage(null);
                }
              }}
            >
              <DeleteIcon />
              Reset Content
            </Button>
          </Container>
        </Form>
      </CardBody>
    </Card>
  );
};

export default AdminHomeAdd;

// import React, { useEffect, useRef, useState } from "react";
// import {
//   Button,
//   Card,
//   CardBody,
//   Container,
//   Form,
//   Label,
//   Input,
// } from "reactstrap";
// import CreateIcon from "@mui/icons-material/Create";
// import DeleteIcon from "@mui/icons-material/Delete";
// import JoditEditor from "jodit-react";
// import { toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom"; // For URL detection and navigation
// import { getCurrentUserDetails } from "../../auth"; // For getting the current user
// import {
//   createPost as doCreatePost,
//   uploadAboutImage,
// } from "../../Services/post-service"; // Existing post service
// import BlogService from "../../Services/createBlog"; // BlogService for blog creation
// import ProjectService from "../../Services/createProject"; // New ProjectService for project creation

// const AdminHomeAdd = () => {
//   const editor = useRef(null);
//   const location = useLocation(); // Get current URL
//   const navigate = useNavigate(); // For navigation after post creation
//   const [post, setPost] = useState({
//     title: "",
//     content: "",
//   });
//   const [image, setImage] = useState(null); // State for image upload
//   const [user, setUser] = useState(undefined);

//   useEffect(() => {
//     setUser(getCurrentUserDetails());
//   }, []);

//   const handleContentChange = (newContent) => {
//     setPost((prev) => ({ ...prev, content: newContent }));
//   };

//   const handleTitleChange = (event) => {
//     setPost((prev) => ({ ...prev, title: event.target.value }));
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(file);
//       toast.success("Image selected!");
//     }
//   };

//   const handleCreatePost = async (event) => {
//     event.preventDefault();

//     if (!image) {
//       toast.error("Please select an image to upload!");
//       return;
//     }

//     // Validation for Blog and Project (Title and Content required)
//     if (
//       post.content.trim() === "" ||
//       (location.pathname === "/admin/add/blog" && post.title.trim() === "") ||
//       (location.pathname === "/admin/add/project" && post.title.trim() === "")
//     ) {
//       toast.info("Title and Content are required!!!");
//       return;
//     }

//     if (!user) {
//       toast.error("User is not loaded yet. Please try again.");
//       return;
//     }

//     // Add user ID to the post data
//     post["userId"] = user.id || 1;

//     try {
//       let BlogId = null;
//       let ProjectId = null;

//       if (location.pathname === "/admin/add/blog") {
//         const createdBlog = await BlogService.createBlog(post);
//         BlogId = createdBlog.blogId; // Assuming the API returns the blog ID
//         console.log("Blog created with ID:", BlogId);

//         toast.success("Blog Created!");
//       } else if (location.pathname === "/admin/add/project") {
//         const createdProject = await ProjectService.createProject(post);
//         ProjectId = createdProject.projectID; // Assuming the API returns the project ID
//         console.log("Project created with ID:", ProjectId);

//         toast.success("Project Created!");
//       } else {
//         await doCreatePost(post);
//         toast.success("Post Created!");
//       }

//       // Upload the image if it's a blog or project
//       if (BlogId) {
//         await BlogService.uploadBlogImage(BlogId, image);
//         toast.success("Blog image uploaded successfully!");
//       } else if (ProjectId) {
//         await ProjectService.uploadProjectImage(ProjectId, image);
//         toast.success("Project image uploaded successfully!");
//       }

//       // Reset state after successful operations
//       setPost({ title: "", content: "" });
//       setImage(null);

//       // Navigate to the appropriate page
//       if (BlogId) navigate(`/admin/blog/`);
//       if (ProjectId) navigate(`/admin/project/`);
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <Card style={{ maxHeight: "75vh", overflowY: "auto", maxWidth: "90vw" }}>
//       <CardBody>
//         <div
//           style={{
//             position: "sticky",
//             top: "0",
//             backgroundColor: "white",
//             zIndex: "1",
//             paddingBottom: "10px",
//             borderBottom: "1px solid #ccc",
//           }}
//         >
//           <h3>What's Going On Your Mind?</h3>
//         </div>

//         <Form onSubmit={handleCreatePost}>
//           {location.pathname === "/admin/add/blog" && (
//             <div className="my-3">
//               <Label for="title">Blog Title</Label>
//               <Input
//                 type="text"
//                 id="title"
//                 value={post.title}
//                 onChange={handleTitleChange}
//                 placeholder="Enter the title"
//               />
//             </div>
//           )}

//           {location.pathname === "/admin/add/project" && (
//             <div className="my-3">
//               <Label for="title">Project Title</Label>
//               <Input
//                 type="text"
//                 id="title"
//                 value={post.title}
//                 onChange={handleTitleChange}
//                 placeholder="Enter the project title"
//               />
//             </div>
//           )}

//           <div className="my-3">
//             <Label for="content">Content</Label>
//             <JoditEditor
//               ref={editor}
//               value={post.content}
//               onChange={handleContentChange}
//             />
//           </div>

//           <div className="my-3">
//             <Label for="image">Select Image</Label>
//             <Input
//               type="file"
//               id="image"
//               accept="image/*"
//               onChange={handleImageChange}
//             />
//           </div>

//           <Container className="text-center">
//             <Button type="submit" color="success" className="ms-2">
//               <CreateIcon />
//               {location.pathname === "/admin/add/project"
//                 ? "Create Project"
//                 : "Create Blog"}
//             </Button>
//             <Button
//               color="danger"
//               className="ms-2"
//               onClick={() => {
//                 if (window.confirm("Do you want to clear all the data?")) {
//                   setPost({ title: "", content: "" });
//                   setImage(null);
//                 }
//               }}
//             >
//               <DeleteIcon />
//               Reset Content
//             </Button>
//           </Container>
//         </Form>
//       </CardBody>
//     </Card>
//   );
// };

// export default AdminHomeAdd;
