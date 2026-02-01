import React from "react";
import { useLanguage } from "../context/LanguageContext";
import projects from "../data/projects";
import "../style/Project.css";

function Projects() {
  const { language } = useLanguage();

  const t = {
    title: language === "FR" ? "Mes Projets" : "My Projects",
    subtitle:
      language === "FR"
        ? "Quelques projets qui reflètent mon parcours Full-Stack & DevOps"
        : "Some projects that reflect my Full-Stack & DevOps journey",
    code: language === "FR" ? "Code" : "Code",
    demo: language === "FR" ? "Démo" : "Demo",
  };

  return (
    <section className="projects-container">
      <h2 className="projects-title">{t.title}</h2>
      <p className="projects-subtitle">{t.subtitle}</p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-content">
              <h5 className="project-name">{project.title}</h5>
              <p className="project-description">
                {project.description}
              </p>

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
                    <i className="bi bi-github"></i> {t.code}
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn demo"
                  >
                    <i className="bi bi-box-arrow-up-right"></i> {t.demo}
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
