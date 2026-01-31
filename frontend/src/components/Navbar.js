import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import "../style/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode");
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

        {/* Desktop Nav */}
        <nav className="navbar-center">
          <ul className="navbar-menu">
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/about">À propos</NavLink></li>
            <li><NavLink to="/projects">Projets</NavLink></li>
            <li><NavLink to="/skills">Compétences</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

        {/* Right */}
        <div className="navbar-right">
          {/* Language */}
          <button className="language-switcher" onClick={toggleLang}>
            <Globe size={18} />
            <span className="language-text">
              {lang === "fr" ? "EN" : "FR"}
            </span>
          </button>

          {/* Theme */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile */}
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
