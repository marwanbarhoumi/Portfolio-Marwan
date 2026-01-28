import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import "../style/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("FR");

  // Effect لـ Scroll
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

  const toggleLanguage = () => {
    setLanguage(language === "FR" ? "EN" : "FR");
  };

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${darkMode ? "dark" : "light"}`}
    >
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-brand-wrapper">
          <NavLink
            to="/"
            className="navbar-brand"
            onClick={() => setIsOpen(false)}
          >
            <div className="logo-text">
              <span className="logo-main">Marwen</span>
            </div>
            <div className="logo-sub">DEV</div>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-center">
          <ul className="navbar-menu">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-icon">🏠</span>
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-icon">👨‍💻</span>À propos
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-icon">🚀</span>
                Projets
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-icon">⚡</span>
                Compétences
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-icon">📧</span>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Side Controls */}
        <div className="navbar-right">
          {/* Language Switcher */}
          <button className="language-switcher" onClick={toggleLanguage}>
            <Globe size={18} />
            <span className="language-text">{language}</span>
          </button>

          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav">
            <li>
              <NavLink to="/" end onClick={() => setIsOpen(false)}>
                <span className="mobile-icon">🏠</span>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsOpen(false)}>
                <span className="mobile-icon">👨‍💻</span>À propos
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => setIsOpen(false)}>
                <span className="mobile-icon">🚀</span>
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={() => setIsOpen(false)}>
                <span className="mobile-icon">⚡</span>
                Compétences
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                <span className="mobile-icon">📧</span>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="mobile-actions">
            <div className="mobile-controls">
              <button
                className="mobile-language"
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
              >
                <Globe size={18} />
                <span>{language === "FR" ? "English" : "Français"}</span>
              </button>

              <button
                className="mobile-theme"
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                <span>{darkMode ? "Mode Clair" : "Mode Sombre"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
