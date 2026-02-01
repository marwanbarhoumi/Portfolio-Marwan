import { useLanguage } from "../context/LanguageContext";
import "../style/About.css";

function About() {
  const { language } = useLanguage();

  const t = {
    title: language === "FR" ? "À propos de moi" : "About Me",

    p1:
      language === "FR"
        ? "Je suis Marwan, développeur Full-Stack MERN passionné par le DevOps, les technologies modernes, le cloud et les architectures microservices."
        : "I am Marwan, a Full-Stack MERN developer passionate about DevOps, modern technologies, cloud computing and microservices architectures.",

    p2:
      language === "FR"
        ? "J’ai participé à la création de solutions e-commerce scalables, avec automatisation CI/CD via Jenkins et orchestration avec Kubernetes."
        : "I have contributed to building scalable e-commerce solutions, with CI/CD automation using Jenkins and orchestration with Kubernetes.",

    skills: language === "FR" ? "Compétences" : "Skills",
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="section-title">{t.title}</h2>

        <div className="about-card">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </div>

        <h3 className="skills-title">{t.skills}</h3>

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
