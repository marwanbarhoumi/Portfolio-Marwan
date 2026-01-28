import "../style/About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="section-title">À propos de moi</h2>

        <div className="about-card">
          <p>
            Je suis <strong>Marwan</strong>, développeur <strong>Full-Stack MERN</strong> passionné
            par le <strong>DevOps</strong>, les technologies modernes, le cloud et les architectures
            microservices.
          </p>
          <p>
            J’ai participé à la création de solutions e-commerce scalables,
            avec automatisation CI/CD via <strong>Jenkins</strong> et
            orchestration avec <strong>Kubernetes</strong>.
          </p>
        </div>

        <h3 className="skills-title">Compétences</h3>

        <div className="skills-grid">
          {[
            "React",
            "Node.js",
            "MongoDB",
            "Docker",
            "Jenkins",
            "Git / GitHub",
            "Kubernetes",
            "CI/CD",
            "Cloud",
          ].map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
