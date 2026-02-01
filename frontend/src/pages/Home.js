import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../style/Home.css";

import { ArrowRight, Code, Cloud, Cpu } from "lucide-react";

function Home() {
  const { language } = useLanguage();

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

  // 🌍 Texts FR / EN
  const t = {
    greeting: language === "FR" ? "Bonjour, je suis" : "Hello, I'm",
    subtitle1:
      language === "FR"
        ? "Je crée des expériences digitales exceptionnelles avec une expertise en développement Full-Stack, architectures Cloud et automatisation CI/CD."
        : "I build outstanding digital experiences with expertise in Full-Stack development, Cloud architectures, and CI/CD automation.",
    subtitle2:
      language === "FR"
        ? "Passionné par les technologies modernes, le cloud computing et les architectures microservices scalables."
        : "Passionate about modern technologies, cloud computing, and scalable microservices architectures.",
    projects: language === "FR" ? "Voir mes projets" : "View my projects",
    contact: language === "FR" ? "Me contacter" : "Contact me",
    statsProjects: language === "FR" ? "Projets" : "Projects",
    statsYears: language === "FR" ? "Ans Exp" : "Years Exp",
    statsSatisfaction:
      language === "FR" ? "Satisfaction" : "Satisfaction",
  };

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
          <h6 className="greeting">{t.greeting}</h6>
          <h1 className="home-title">
            <span className="typed-text">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <div className="title-underline"></div>
        </div>

        <div className="description-container">
          <p className="home-subtitle">{t.subtitle1}</p>
          <p className="home-subtitle-secondary">{t.subtitle2}</p>
        </div>

        <div className="cta-buttons">
          <a href="projects" className="primary-btn">
            {t.projects}
            <ArrowRight className="btn-icon" />
          </a>
          <a href="contact" className="secondary-btn">
            {t.contact}
          </a>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">{t.statsProjects}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">{t.statsYears}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">{t.statsSatisfaction}</span>
          </div>
        </div>
      </div>

      {/* Decorations */}
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
