import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";
import "../style/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const { language, toggleLanguage } = useContext(LanguageContext);

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
      className={`navbar ${scrolled ? "scrolled" : ""} ${darkMode ? "dark" : "light"}`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <NavLink
          to="/"
          className="navbar-brand"
          onClick={() => setIsOpen(false)}
        >
          <span className="logo-main">Marwen</span>
          <span className="logo-sub">DEV</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="navbar-center">
          <ul className="navbar-menu">
            <li>
              <NavLink to="/">
                <span className="nav-icon"> 🏠 </span>
                {language === "FR" ? "Accueil" : "Home"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <span className="nav-icon">👨‍💻</span>
                {language === "FR" ? "À propos" : "About"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">
                <span className="nav-icon">🚀</span>
                {language === "FR" ? "Projets" : "Projects"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills">
                <span className="nav-icon">⚡</span>
                {language === "FR" ? "Compétences" : "Skills"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <span className="nav-icon">📧</span>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right controls */}
        <div className="navbar-right">
          <button className="language-switcher" onClick={toggleLanguage}>
            <Globe size={18} />
            <span>{language}</span>
          </button>

          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          {language === "FR" ? "Accueil" : "Home"}
        </NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          {language === "FR" ? "À propos" : "About"}
        </NavLink>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>
          {language === "FR" ? "Projets" : "Projects"}
        </NavLink>
        <NavLink to="/skills" onClick={() => setIsOpen(false)}>
          {language === "FR" ? "Compétences" : "Skills"}
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
