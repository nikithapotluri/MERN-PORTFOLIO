import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./About.css"; // Create this file for custom styles

export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`about-section d-flex align-items-center ${
        darkMode ? "bg-secondary text-white" : "bg-white text-dark"
      }`}
    >
      <div className="text-center">
        <h2 className="mb-4 animate__animated animate__fadeIn display-5 fw-semibold">
          About Me
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-10 animate__animated animate__fadeInUp animate__delay-1s">
            <p className="fs-5 text-center">
              I am a <strong>B.Tech CSE</strong> student passionate about{" "}
              web development and{" "}
              <span className="highlight">problem solving</span>. <br />
              I am always eager to explore new technologies and refine my skills. <br />
              I believe in <em className="highlight">collaboration</em> and enjoy working on projects that bring impactful change. <br />
              <br />
              I have a strong interest in{" "}
              <span className="highlight">drawing & writing</span> newsletters, which allows me to express creativity and think outside the box. <br />
              <br />
              Feel free to check out my work:
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://www.behance.net/nikitha_1710"
                target="_blank"
                rel="noreferrer"
                className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
              >
                Bēhance
              </a>
              <a
                href="https://substack.com/@nikitha1710"
                target="_blank"
                rel="noreferrer"
                className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
              >
                Substack
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
