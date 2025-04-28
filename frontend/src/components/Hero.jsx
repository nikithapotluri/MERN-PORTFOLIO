import React from "react";
import { TypeAnimation } from "react-type-animation";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css"; // <-- Link to your custom CSS

export default function Hero({ darkMode }) {
  return (
    <section
      id="hero"
      className={`hero-section d-flex align-items-center justify-content-center text-center min-vh-100 ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      {/* Main Content */}
      <div className="container">
        <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
          Hi, I'm <span className="glow-name">Nikitha</span>
        </h1>

        <div className="lead animate__animated animate__fadeInUp animate__delay-1s fs-4">
          <TypeAnimation
            sequence={[
              "B.Tech CSE Student", 2000,
              "MERN Stack Developer", 2000,
              "Tech Enthusiast", 2000,
              "Artist", 2000,
              "Content Writer", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            className="typed-cursor"
            style={{ display: "inline-block" }}
          />
        </div>

        {/* Download Resume Button */}
        <a
          href="/assets/Potluri_Nikitha_Resume.pdf"
          download
          className="btn btn-outline-secondary mt-4 resume-btn animate__animated animate__fadeInUp animate__delay-3s"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
