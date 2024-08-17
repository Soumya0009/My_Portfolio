import React, { useState } from "react";
import "./CSS/ProjectComponent.css";

const ProjectComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      <img
        className="image-cap"
        src="https://c4.wallpaperflare.com/wallpaper/642/695/642/anime-demon-slayer-kimetsu-no-yaiba-giyuu-tomioka-hd-wallpaper-preview.jpg"
        alt="Image cap"
      />
      <div className="card-content">
        <h3>Card title</h3>
        <p>
          {isExpanded
            ? "Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed.Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options." +
              "Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed.Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options."
            : ".card-img-top and .card-img-bottom respectively set the top and bottom corners rounded to match the card’s borders. With .card-text, text can be added to the card. Text within .card-text can also be styled with the standard HTML tags."}
        </p>
      </div>
    </div>
  );
};

export default ProjectComponent;
