import { useEffect, useState } from "react";
import "../style/Home.css";

import { ArrowRight, Code, Cloud, Cpu } from "lucide-react";

function Home() {
  const [text, setText] = useState("");
  const fullText = "Marwen";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 150);

    return () => clearInterval(typing);
  }, []);

  return (
    <section className="home-container" id="home">
      <div className="particles" id="particles-js"></div>

      <div className="home-content">
        <div className="tech-badge-container">
          <div className="tech-badge">
            <Code size={18} />
            <span>Full-Stack</span>
          </div>
          <div className="tech-badge">
            <Cpu size={18} />
            <span>DevOps</span>
          </div>
          <div className="tech-badge">
            <Cloud size={18} />
            <span>Cloud</span>
          </div>
        </div>

        <div className="intro-text">
          <h6 className="greeting">Bonjour, Je suis</h6>
          <h1 className="home-title">
            <span className="typed-text">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <div className="title-underline"></div>
        </div>

        <div className="description-container">
          <p className="home-subtitle">
            Je crée des <span className="highlight">expériences digitales</span> exceptionnelles 
            avec une expertise en <strong>développement Full-Stack</strong>, 
            <strong> architectures Cloud</strong>, et <strong>automatisation CI/CD</strong>.
          </p>
          <p className="home-subtitle-secondary">
            Passionné par les technologies modernes, le cloud computing 
            et les microservices scalable.
          </p>
        </div>

        <div className="cta-buttons">
          <a href="projects" className="primary-btn">
            Voir mes projets
            <ArrowRight className="btn-icon" />
          </a>
          <a href="contact" className="secondary-btn">
            Me contacter
          </a>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projets</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Ans Exp</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Satisfaction</span>
          </div>
        </div>
      </div>

      {/* الزخارف */}
      <div className="hero-decoration">
        <div className="circle shape"></div>
        <div className="square shape"></div>
        <div className="triangle shape"></div>
      </div>

      <a href="#about" className="scroll-down">
        <div className="scroll-line"></div>
      </a>
    </section>
  );
}

export default Home;
