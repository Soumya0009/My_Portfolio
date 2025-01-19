import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../CSS/ContactForm.css";
import XIcon from "@mui/icons-material/X";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton"; // Import Skeleton

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isMapLoading, setIsMapLoading] = useState(true); // State to track map loading

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lmhyqzf",
        "template_3hcq259",
        {
          from_name: formData.fullName,
          to_name: "Soumya Ranjan Mohanty",
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Ngnzt7B5vDjKaljK0"
      )
      .then(
        () => {
          setShowPopup(true);
          setFormData({
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send email:", error.text);
          setStatusMessage("Failed to send the message. Please try again.");
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Simulate map loading delay (if you want)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapLoading(false); // Set map as loaded after a delay
    }, 2000); // Simulated loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-container">
      {/* Google Map with Skeleton */}
      <div className="contact-map">
        {isMapLoading ? (
          <Skeleton width="100%" height="450px" /> // Skeleton loader for map
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.53788635884!2d85.73805150943434!3d20.300864868756104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1726311668296!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>

      {/* Contact Info and Form */}
      <div className="contact-info-form">
        <div className="contact-info">
          <h2>CONNECT</h2>
          <p className="contact-email">soumyaranjanmohanty0009@gmail.com</p>
          <ul className="contact-list">
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
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Soumya0009"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1836Zb1acU/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/__soumyaranjanmohanty__/profilecard/?igsh=MXVycTFqbDlhbzN4NQ=="
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <h2>SEND A MESSAGE</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name*"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </div>

      {/* Popup for Message Sent */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Message sent successfully!</p>
            <p>You will soon get the response!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
