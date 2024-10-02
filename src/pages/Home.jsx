import React from "react";
import "../CSS/HomeStyle.css";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Import for Location icon
import PhoneIcon from "@mui/icons-material/Phone"; // Import for Phone icon
import EmailIcon from "@mui/icons-material/Email"; // Import for Email icon
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Home() {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <img
            src="https://i.pinimg.com/236x/56/c5/8a/56c58aecc8659b978d8339bf8450cb9c.jpg" // Replace with your image URL
            alt="Profile"
            className="header-image"
          />
          <div>
            <h1 className="header-title">SOUMYA RANJAN MOHANTY</h1>
            <p className="header-subtitle">
              Software <a href="#">Engineer</a>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* About Section */}
        <section className="about">
          <h2>About me</h2>
          <p>
            Software engineers apply engineering principles and knowledge of
            programming languages to build software solutions for end users.{" "}
            <a href="#">
              Software engineers design and develop computer games, business
              applications, operating systems, network control systems,
            </a>
            and middleware—to name just a few of the many career paths
            available.
            <a href="#">
              Software engineers typically need a bachelor's degree in computer
              science or a related degree program, as well as technical know-how
              and solid communication skills. While strong math skills can be
              helpful, software engineering often relies more on logic and
              analytical thinking than advanced mathematics. However, some areas
              of software engineering, like graphics programming or machine
              learning, may involve more complex math concepts.
            </a>{" "}
            and
            <a href="#">
              Gaining relevant work experience is also essential to launching a
              career as a software engineer. This can be done through
              internships, bootcamps, certificate programs, or by completing
              real-world projects on your own.
            </a>
            .
          </p>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          {/* Contact Section */}
          <section className="contact">
            <h2>Contact</h2>

            {/* Social Links */}
            <ul className="all-contacts">
              <li>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <XIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Linkedin"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <InstagramIcon />
                </a>
              </li>
            </ul>
            <ul className="contact-details">
              <li>
                <LocationOnIcon /> Bhubaneswar
              </li>
              <li>
                <PhoneIcon /> 7077342241
              </li>
              <li>
                <EmailIcon /> soumyaranjanmohanty0009@gmail.com
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}
