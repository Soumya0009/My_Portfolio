import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/BlogCard.css";
import { isLogedIn } from "../auth";
import IconButton from "@mui/material/IconButton";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DOMPurify from "dompurify";

const BlogCard = ({ id, image, title = "Untitled Blog", intro = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/edit/${id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    console.log(`Blog with ID ${id} has been deleted.`);
  };

  const sanitizedIntro = DOMPurify.sanitize(intro);

  return (
    <div className="blog-card" onClick={handleClick}>
      <div className="image-container">
        <img src={image} alt={title} />
        <div className="overlay">
          <h3>{title}</h3>
          <div
            className="intro-text"
            dangerouslySetInnerHTML={{ __html: sanitizedIntro }}
          ></div>
          {isLogedIn() && (
            <div className="button-container">
              <IconButton
                className="icon-button"
                color="primary"
                onClick={handleEdit}
                title="Edit Post"
              >
                <EditNoteIcon />
              </IconButton>
              <IconButton
                className="icon-button"
                color="error"
                onClick={handleDelete}
                title="Delete Post"
              >
                <DeleteForeverIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>
      <div className="content">
        <h3>{title}</h3>
        <div
          className="intro-text"
          dangerouslySetInnerHTML={{ __html: sanitizedIntro }}
        ></div>
      </div>
    </div>
  );
};

export default BlogCard;
