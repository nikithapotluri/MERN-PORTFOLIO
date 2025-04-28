import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./Projects.css";

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: "Campus Space",
      description: "A MERN stack web app for booking slots in college seminar halls and labs.",
      link: "https://github.com/nikithapotluri/CAMPUS-SPACE",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
    {
      title: "NGO Event Hub",
      description: "A MERN stack web app designed to streamline event management for NGOs.",
      link: "https://github.com/nikithapotluri/NGO-EVENT-HUB",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
    {
      title: "Depression and Anxiety Detection",
      description: "A Machine Learning project to detect the presence of depression and anxiety.",
      link: "https://github.com/nikithapotluri/DEPRESSION-ANXIETY-DETECTION",
      techStack: ["Python"],
    },
  ];

  return (
    <section
      id="projects"
      className={`py-5 ${darkMode ? "bg-secondary text-white" : "bg-white text-dark"}`}
    >
      <div className="container">
        <h2 className="text-center mb-5 animate__animated animate__fadeInDown display-5 fw-semibold">
          Projects
        </h2>

        <div className="row g-4">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="col-12 col-md-6 col-lg-4 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${idx * 0.2}s`, animationFillMode: "both" }}
            >
              <div className={`card h-100 shadow-sm ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>

                  <div className="tech-stack mb-3">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="badge custom-badge me-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="btn btn-outline-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
