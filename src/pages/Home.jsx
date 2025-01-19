import React, { useEffect, useState } from "react";
import "../CSS/HomeStyle.css";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Import for Location icon
import PhoneIcon from "@mui/icons-material/Phone"; // Import for Phone icon
import EmailIcon from "@mui/icons-material/Email"; // Import for Email icon
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  getAboutsByUser,
  fetchAboutImageAsBlob,
} from "../Services/post-service"; // Import functions
import Skeleton from "react-loading-skeleton"; // Import Skeleton library
import "react-loading-skeleton/dist/skeleton.css"; // Import Skeleton CSS

export default function Home() {
  const [aboutData, setAboutData] = useState(null); // State to store fetched data
  const [imageSrc, setImageSrc] = useState(null); // State to store image URL
  const [error, setError] = useState(null); // State for error handling
  const userId = "1"; // Replace with actual user ID

  useEffect(() => {
    // Fetch About data
    getAboutsByUser(userId)
      .then((data) => {
        setAboutData(data);

        // Fetch the About image if available
        if (data && data.length > 0 && data[0].imageName) {
          fetchAboutImageAsBlob(data[0].imageName)
            .then((blob) => {
              const url = URL.createObjectURL(blob); // Convert blob to object URL
              setImageSrc(url);
            })
            .catch((err) => {
              console.error("Error fetching the image blob:", err);
              setError("Unable to load about image.");
            });
        }
      })
      .catch((err) => {
        console.error("Error fetching about data:", err);
        setError("Unable to load about information.");
      });
  }, [userId]);

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          {imageSrc ? (
            <img src={imageSrc} alt="About" className="header-image" />
          ) : (
            // Skeleton loader for image
            <Skeleton circle={true} height={150} width={150} />
          )}
          <div>
            <h1 className="header-title" style={{ fontSize: "36px" }}>
              SOUMYA RANJAN MOHANTY
            </h1>
            <p className="header-subtitle" style={{ fontSize: "24px" }}>
              Software <a href="#">Engineer</a>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* About Section */}
        <section className="about">
          <h2>About Me</h2>
          {error ? (
            <p>{error}</p>
          ) : aboutData && aboutData.length > 0 ? (
            <p dangerouslySetInnerHTML={{ __html: aboutData[0].content }}></p> // Use the first element and safely render HTML
          ) : (
            // Skeleton loader for about text
            <Skeleton count={5} height={20} />
          )}
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
                  href="https://x.com/Soumyam0009?t=K6SdYkLElF7jkOBLT98bMg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <XIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/soumya-ranjan-mohanty-b84631229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Soumya0009"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1836Zb1acU/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/__soumyaranjanmohanty__/profilecard/?igsh=MXVycTFqbDlhbzN4NQ=="
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
                <PhoneIcon /> 9078530488
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
