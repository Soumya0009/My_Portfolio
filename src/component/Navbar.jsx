import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../CSS/NavbarComponent.css";
import { isLogedIn, doLogout } from "../auth"; // Import your authentication functions
import LogoutIcon from "@mui/icons-material/Logout";

function NavbarComponent(props) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  const basePath = isAdmin ? "/admin" : "";

  // Handle Logout
  const handleLogout = () => {
    doLogout(() => {
      window.location.href = `/`; // Redirect to login page after logout
    });
  };

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
              <Nav.Link
                as={Link}
                to={`${basePath}/resume`}
                className="nav-item fw-bold"
              >
                RESUME
              </Nav.Link>
              {/* CONTACT (Hidden if Logged In) */}
              {!isLogedIn() && (
                <Nav.Link
                  as={Link}
                  to={`${basePath}/contact`}
                  className="nav-item fw-bold"
                >
                  CONTACT
                </Nav.Link>
              )}
              {/* Logout Button (Visible if Logged In) */}
              {isLogedIn() && (
                <Button
                  variant="outline-danger"
                  className="ms-3 fw-bold"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <LogoutIcon />
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ paddingTop: "80px" }}></div>
    </>
  );
}

export default NavbarComponent;
