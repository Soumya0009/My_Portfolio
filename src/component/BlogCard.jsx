import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/BlogCard.css";

const BlogCard = ({ id, image, title, intro }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog-card" onClick={handleClick}>
      <div className="image-container">
        <img src={image} alt={title} />
        <div className="overlay">
          <h3>{title}</h3>
          <p>{intro}</p>
        </div>
      </div>
      {/* This section is always visible on mobile devices */}
      <div className="content">
        <h3>{title}</h3>
        <p>{intro}</p>
      </div>
    </div>
  );
};

export default BlogCard;
