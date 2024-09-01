import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
  const linkStyle = {
    textDecoration: "none",
    color: "#333333",
    transition: "all 0.25s ease-in-out",
    fontWeight: "bold",
    marginLeft: "30px",
    textUnderlineOffset: "5px",
  };

  // Get the current location
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  // If on admin route, prepend /admin to all the links
  const basePath = isAdmin ? '/admin' : '';

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          position: "fixed", // Fix the navbar at the top
          top: 0, // Position it at the top of the viewport
          width: "100%", // Ensure it spans the full width of the viewport
          zIndex: 1000, // Ensure it stays above other content
          paddingLeft: "2vw",
          paddingRight: "2vw",
          backgroundColor: "#f4f4f4",
          borderBottom: "1px solid #dddddd",
        }}
      >
        <a
          className="navbar-brand"
          href="#"
          style={{
            color: "#1b75bc",
            fontWeight: "bold",
            backgroundColor: "#e6f2f8",
            padding: "10px 20px",
            borderRadius: "3px",
            fontSize: "1.5rem",
            letterSpacing: "2px",
          }}
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              className="nav-link"
              to={`${basePath}/`}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.textUnderlineOffset = "8px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
                e.currentTarget.style.textUnderlineOffset = "5px";
              }}
            >
              HOME
            </Link>
            <Link
              className="nav-link"
              to={`${basePath}/blog`}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.textUnderlineOffset = "8px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
                e.currentTarget.style.textUnderlineOffset = "5px";
              }}
            >
              BLOGS
            </Link>
            <Link
              className="nav-link"
              to={`${basePath}/project`}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.textUnderlineOffset = "8px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
                e.currentTarget.style.textUnderlineOffset = "5px";
              }}
            >
              PROJECTS
            </Link>
            <a
              className="nav-link"
              href="#"
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.textUnderlineOffset = "8px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
                e.currentTarget.style.textUnderlineOffset = "5px";
              }}
            >
              RESUME
            </a>

            <Link
              className="nav-link"
              to={`${basePath}/contact`}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.textUnderlineOffset = "8px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
                e.currentTarget.style.textUnderlineOffset = "5px";
              }}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      <div style={{ paddingTop: "80px" }}>
      </div>
    </>
  );
}

export default Navbar;
