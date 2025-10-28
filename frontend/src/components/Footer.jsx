import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`py-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} position-relative`}
      style={{
        background: darkMode
          ? "linear-gradient(135deg, rgba(13, 110, 253, 0.1), rgba(255, 193, 7, 0.1))"
          : "linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(13, 110, 253, 0.2))",
        boxShadow: darkMode ? "0 5px 15px rgba(0, 0, 0, 0.1)" : "0 5px 15px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div id='contact' className="container text-center">
        <h5
          className={`mb-4 ${darkMode ? "text-warning" : "text-primary"} fw-semibold`}
          style={{ fontSize: "1.75rem" }}
        >
          Let's Connect!
        </h5>
        <p className={`mb-4 ${darkMode ? "text-light" : "text-dark"}`} style={{ fontSize: "1.1rem" }}>
          I'm always open to new opportunities and collaborations! <br></br> Feel free to reach out below.
        </p>

        <div className="d-flex justify-content-center gap-4 mb-3">
          <a
            href="https://linkedin.com/in/nikithapotluri"
            target="_blank"
            rel="noreferrer"
            className={`${
              darkMode ? "text-white" : "text-white"
            } d-flex align-items-center justify-content-center p-2 rounded-circle transition-all`}
            style={{
              background: "#0077b5",
              width: "50px",
              height: "50px",
            }}
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/nikithapotluri"
            target="_blank"
            rel="noreferrer"
            className={`${
              darkMode ? "text-white" : "text-white"
            } d-flex align-items-center justify-content-center p-2 rounded-circle transition-all`}
            style={{
              background: "#333" ,
              width: "50px",
              height: "50px",
            }}
          >
            <FaGithub size={24} />
          </a>

          <a
            href="mailto:nikithapotluri17@gmail.com"
            className={`${
              darkMode ? "text-white" : "text-white"
            } d-flex align-items-center justify-content-center p-2 rounded-circle transition-all`}
            style={{
              background: "#d44638" ,
              width: "50px",
              height: "50px",
            }}
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <p className={`mb-0 ${darkMode ? "text-light" : "text-muted"}`} style={{ fontSize: "1rem" }}>
          &copy; 2025 Nikitha Potluri. All Rights Reserved.
        </p>
      </div>

      {/* Decorative Circles */}
      <div
        className="footer-decorative-circles"
        style={{
          position: "absolute",
          top: "-50px",
          right: "-10px",
          width: "150px",
          height: "150px",
          backgroundColor: darkMode ? "rgba(0, 123, 255, 0.3)" : "rgba(255, 193, 7, 0.3)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      ></div>

      <div
        className="footer-decorative-circles"
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "150px",
          height: "150px",
          backgroundColor: darkMode ? "rgba(255, 193, 7, 0.3)" : "rgba(13, 110, 253, 0.3)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      ></div>
    </footer>
  );
}
