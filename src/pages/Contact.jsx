import React from 'react';
import '../CSS/ContactForm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <div className="contact-page">
        <div className="contact-info">
          <h1>
            Thank You...
            <br /> For Contacting Me...
          </h1>
          <p>Please fill the form for my quick response. </p>
          <a href="soumyaranjanmohanty0009@gmail.com">
            soumyaranjanmohanty0009@gmail.com
          </a>

          {/* Contact Section */}
          <section className="contact">
            <h2>Contact</h2>
            <ul className="contact-list">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="contact-form">
          <h2>Send me a message 🚀</h2>
          <form>
            <input type="text" placeholder="Full name*" required />
            <input type="email" placeholder="Email address*" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Some more comments."></textarea>
            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact
