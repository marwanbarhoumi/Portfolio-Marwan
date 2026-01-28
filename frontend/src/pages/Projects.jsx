import React from "react";
import projects from "../data/projects";
import "../style/Project.css";

function Projects() {
  return (
    <section className="projects-container">
      <h2 className="projects-title">Mes Projets</h2>
      <p className="projects-subtitle">
        Quelques projets qui reflètent mon parcours Full-Stack & DevOps
      </p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            

            <div className="project-content">
              <h5 className="project-name">{project.title}</h5>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags?.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn github"
                  >
                    <i className="bi bi-github"></i> Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn demo"
                  >
                    <i className="bi bi-box-arrow-up-right"></i> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
