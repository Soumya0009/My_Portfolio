import React, { useState } from "react";
import "../CSS/ContactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import XIcon from "@mui/icons-material/X";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-map">
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
      </div>

      <div className="contact-info-form">
        <div className="contact-info">
          <h2>CONNECT</h2>
          <p className="contact-email">soumyaranjanmohanty0009@gmail.com</p>
          <ul className="contact-list">
            <li>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
                <XIcon/>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/yourprofile"
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
              placeholder="Email address*"
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
