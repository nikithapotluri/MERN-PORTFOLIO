import React from "react";
import "./Experience.css";

const experienceData = [
  {
    date: "Apr 2026 – Jul 2026",
    role: "Programme Analyst Intern",
    company: "Cognizant Technology Solutions",
    location: "Chennai, India",
    technologies: ["Guidewire"],
  },

];

const Experience = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`py-5 ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div className="container">

        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-center mb-5 animate__animated animate__fadeInDown display-5 fw-semibold">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">

          {experienceData.map((experience, index) => (
            <div
              className={`experience-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={index}
            >

              {/* Timeline Dot */}
              <div className="timeline-dot"></div>

              {/* Experience Card */}
              <div className="experience-card">

                {/* Date */}
                <span className="experience-date">
                  {experience.date}
                </span>

                {/* Role */}
                <h3>{experience.role}</h3>

                {/* Company */}
                <h4>{experience.company}</h4>

                
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;