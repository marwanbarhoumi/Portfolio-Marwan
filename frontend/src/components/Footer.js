import "../style/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Marwan Barhoumi. Tous droits réservés.</p>
        <div className="footer-socials">
          <a href="https://github.com/marwen77" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/marwan-barhoumi-385a151a1/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:marwanbarhou77@gmail.com" aria-label="Email">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
