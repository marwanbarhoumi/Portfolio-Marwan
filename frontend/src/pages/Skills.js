import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../style/Skills.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Counter({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = end / 60;

    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [end]);

  return (
    <div className="counter-card reveal">
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
}

function Progress({ label, value }) {
  return (
    <div className="progress-item">
      <div className="progress-header">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Skills() {
  const { language } = useLanguage();
  useScrollReveal();

  const t = {
    title: language === "FR" ? "Compétences" : "Skills",
    subtitle:
      language === "FR"
        ? "Expertise technique orientée Full-Stack & DevOps"
        : "Technical expertise focused on Full-Stack & DevOps",

    years: language === "FR" ? "ans d'expérience" : "years of experience",

    counters: {
      exp: language === "FR" ? "Années d'expérience" : "Years of experience",
      projects: language === "FR" ? "Projets réalisés" : "Completed projects",
      tech: language === "FR"
        ? "Technologies maîtrisées"
        : "Technologies mastered",
    },
  };

  return (
    <section className="skills-section">
      <div className="skills-container">

        <h2 className="skills-title reveal">{t.title}</h2>
        <p className="skills-subtitle reveal">{t.subtitle}</p>

        {/* COUNTERS */}
        <div className="counters-wrapper">
          <div className="counters-grid">
            <Counter end={3} label={t.counters.exp} />
            <Counter end={15} label={t.counters.projects} />
            <Counter end={10} label={t.counters.tech} />
          </div>
        </div>

        {/* SKILLS */}
        <div className="skills-wrapper">
          <div className="skills-grid">

            <div className="skill-card reveal">
              <h3>Frontend</h3>
              <p className="skill-years">3 {t.years}</p>
              <Progress label="React" value={90} />
              <Progress label="JavaScript" value={85} />
              <Progress label="HTML / CSS" value={95} />
            </div>

            <div className="skill-card reveal">
              <h3>Backend</h3>
              <p className="skill-years">3 {t.years}</p>
              <Progress label="Node.js" value={85} />
              <Progress label="Express" value={80} />
              <Progress label="MongoDB" value={75} />
            </div>

            <div className="skill-card reveal">
              <h3>DevOps</h3>
              <p className="skill-years">2+ {t.years}</p>
              <Progress label="Docker" value={85} />
              <Progress label="Kubernetes" value={70} />
              <Progress label="CI/CD (Jenkins)" value={80} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
