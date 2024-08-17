import React from "react";
import "./CSS/HomeStyle.css";

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

        {/* Contact Section */}
        <section className="contact">
          <h2>Contact</h2>
          <ul className="contact-list">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Google+</a>
            </li>
            <li>
              <a href="#">SlideShare</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
