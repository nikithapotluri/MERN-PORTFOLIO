import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";


const skillsData = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "ReactJS","Bootstrap"],
  },
  {
    title: "Backend",
    items: ["NodeJS", "ExpressJS"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Languages",
    items: ["C", "C++"],
  },
  {
    title: "Tools",
    items: ["Figma", "Canva","Git/Github", "VSCode"],
  },
];

export default function Skills({ darkMode }) {
  return (
    <section
      id="skills"
      className={`py-5 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}
    >
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Skills</h2>
        <div
          className="d-flex flex-nowrap overflow-auto px-2"
          style={{
            scrollbarWidth: "thin",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`card me-3 flex-shrink-0 ${darkMode ? "bg-secondary text-white" : ""}`}
              style={{ minWidth: "250px", maxWidth: "250px" }}
            >
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">{category.title}</h5>
                <ul className="list-unstyled mt-3">
                  {category.items.map((item, i) => (
                    <li key={i}>
                      <span className="badge bg-primary mb-2 me-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/*
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./Skills.css";

export default function Skills({ darkMode }) {
  const skills = [
    "HTML", "CSS", "ReactJS", "Bootstrap",
    "NodeJS", "ExpressJS",
    "MongoDB", "MySQL",
    "C", "C++", "Figma", "Canva",
    "Data Structures & Algorithms", "OOPs",
    "Git/Github", "VSCode"
  ];

  return (
    <section
      id="skills"
      className={`skills-section py-5 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}
    >
      <div className="container text-center">
        <h2 className="mb-5 animate__animated animate__fadeInDown display-5 fw-semibold">
          Skills and Tools
        </h2>
        <div className="row justify-content-center g-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-6 col-md-3 animate__animated animate__zoomIn"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both"
              }}
            >
              <div className="skill-card p-3 rounded shadow-sm">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/