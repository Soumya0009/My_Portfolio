import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap"; // Import Bootstrap components
import "../CSS/NavbarComponent.CSS"; // Add a custom CSS file for Navbar styling

function NavbarComponent(props) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  const basePath = isAdmin ? "/admin" : "";

  return (
    <>
      {/* Bootstrap Navbar */}
      <Navbar expand="md" fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand
            as={Link}
            to={`${basePath}/`}
            className="fw-bold text-primary"
          >
            {props.title.toUpperCase()}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto custom-nav">
              {/* HOME */}
              <Nav.Link
                as={Link}
                to={`${basePath}/`}
                className="nav-item fw-bold"
              >
                HOME
              </Nav.Link>
              {/* BLOGS */}
              <Nav.Link
                as={Link}
                to={`${basePath}/blog`}
                className="nav-item fw-bold"
              >
                BLOGS
              </Nav.Link>
              {/* PROJECTS */}
              <Nav.Link
                as={Link}
                to={`${basePath}/project`}
                className="nav-item fw-bold"
              >
                PROJECTS
              </Nav.Link>
              {/* RESUME */}
              <Nav.Link href="#" className="nav-item fw-bold">
                RESUME
              </Nav.Link>
              {/* CONTACT */}
              <Nav.Link
                as={Link}
                to={`${basePath}/contact`}
                className="nav-item fw-bold"
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Add padding to account for the fixed Navbar */}
      <div style={{ paddingTop: "80px" }}></div>
    </>
  );
}

export default NavbarComponent;
