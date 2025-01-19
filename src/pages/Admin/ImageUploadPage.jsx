// import React, { useState } from "react";
// import { useParams } from "react-router-dom"; // Fetching blogId from URL params
// import { Button, Container, Form, Label, Input } from "reactstrap";
// import { toast } from "react-toastify";
// import { uploadBlogImage } from "../../Services/createBlog"; // Import the upload function
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// const ImageUploadPage = () => {
//   const [image, setImage] = useState(null);
//   const { blogId } = useParams(); // Get blogId dynamically from the URL

//   // Handle file change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       toast.success("Image selected successfully!");
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!image) {
//       toast.error("Please select an image before uploading!");
//       return;
//     }

//     try {
//       await uploadBlogImage(blogId, image); // Call the upload service
//       toast.success("Image uploaded successfully!");
//       setImage(null); // Reset the image after success
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to upload image");
//       console.error("Error uploading image:", error);
//     }
//   };

//   return (
//     <Container>
//       <h3>Upload Blog Image</h3>
//       <Form onSubmit={handleSubmit}>
//         <div className="my-3">
//           <Label for="image">Select Image</Label>
//           <Input
//             type="file"
//             id="image"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//         </div>
//         <div className="my-3">
//           <Button type="submit" color="primary">
//             Upload Image <CloudUploadIcon />
//           </Button>
//         </div>
//       </Form>
//     </Container>
//   );
// };

// export default ImageUploadPage;

import React, { useState } from "react";
import { Button, Container, Form, Label, Input } from "reactstrap";
import { toast } from "react-toastify";
import { uploadBlogImage } from "../../Services/createBlog"; // Import the uploadBlogImage function
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const ImageUploadPage = () => {
  const [image, setImage] = useState(null);
  const [blogId, setBlogId] = useState(1); // Set this dynamically based on the blog you are editing

  // Handle image file change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      toast.success("Image selected!");
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Please select an image to upload!");
      return;
    }

    // Call uploadBlogImage function with the selected blog ID and image
    uploadBlogImage(blogId, image)
      .then((response) => {
        toast.success("Image uploaded successfully!");
        setImage(null); // Reset the image field after successful upload
      })
      .catch((error) => {
        toast.error("Failed to upload image.");
        console.error("Error uploading image:", error);
      });
  };

  // Handle Blog ID change (Optional - If blogId is dynamic)
  const handleBlogIdChange = (event) => {
    setBlogId(event.target.value);
  };

  return (
    <Container>
      <h3>Upload Blog Image</h3>
      <Form onSubmit={handleSubmit}>
        <div className="my-3">
          <Label for="blogId">Blog ID</Label>
          <Input
            type="number"
            id="blogId"
            value={blogId}
            onChange={handleBlogIdChange}
            placeholder="Enter Blog ID"
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
        <div className="my-3">
          <Button type="submit" color="primary">
            Upload Image
            <CloudUploadIcon />
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ImageUploadPage;
