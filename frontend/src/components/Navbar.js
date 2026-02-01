import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import "../style/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const { language, toggleLanguage } = useLanguage();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode");
  };

  // Texts FR / EN
  const t = {
    home: language === "FR" ? "Accueil" : "Home",
    about: language === "FR" ? "À propos" : "About",
    projects: language === "FR" ? "Projets" : "Projects",
    skills: language === "FR" ? "Compétences" : "Skills",
    contact: language === "FR" ? "Contact" : "Contact",
  };

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        darkMode ? "dark" : "light"
      }`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
          <span className="logo-main">Marwen</span>
          <span className="logo-sub">DEV</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="navbar-center">
          <ul className="navbar-menu">
            <li>
              <NavLink to="/" end>
                🏠 {t.home}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">👨‍💻 {t.about}</NavLink>
            </li>
            <li>
              <NavLink to="/projects">🚀 {t.projects}</NavLink>
            </li>
            <li>
              <NavLink to="/skills">⚡ {t.skills}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">📧 {t.contact}</NavLink>
            </li>
          </ul>
        </nav>

        {/* Right controls */}
        <div className="navbar-right">
          {/* Language */}
          <button className="language-switcher" onClick={toggleLanguage}>
            <Globe size={18} />
            <span>{language}</span>
          </button>

          {/* Theme */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Burger */}
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/">🏠 {t.home}</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/about">👨‍💻 {t.about}</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/projects">🚀 {t.projects}</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/skills">⚡ {t.skills}</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/contact">📧 {t.contact}</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
