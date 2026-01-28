import { useEffect, useState } from "react";
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
  useScrollReveal();

  return (
    <section className="skills-section">
      <div className="skills-container">

        <h2 className="skills-title reveal">Compétences</h2>
        <p className="skills-subtitle reveal">
          Expertise technique orientée Full-Stack & DevOps
        </p>

        {/* COUNTERS */}
        <div className="counters-wrapper">
          <div className="counters-grid">
            <Counter end={3} label="Années d'expérience" />
            <Counter end={15} label="Projets réalisés" />
            <Counter end={10} label="Technologies maîtrisées" />
          </div>
        </div>

        {/* SKILLS */}
        <div className="skills-wrapper">
          <div className="skills-grid">

            <div className="skill-card reveal">
              <h3>Frontend</h3>
              <p className="skill-years">3 ans d'expérience</p>
              <Progress label="React" value={90} />
              <Progress label="JavaScript" value={85} />
              <Progress label="HTML / CSS" value={95} />
            </div>

            <div className="skill-card reveal">
              <h3>Backend</h3>
              <p className="skill-years">3 ans d'expérience</p>
              <Progress label="Node.js" value={85} />
              <Progress label="Express" value={80} />
              <Progress label="MongoDB" value={75} />
            </div>

            <div className="skill-card reveal">
              <h3>DevOps</h3>
              <p className="skill-years">2+ ans d'expérience</p>
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
