import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { sendEmail } from "../Email";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = (e) => {
  e.preventDefault();

  sendEmail(form)
    .then(() => {
      alert(`Merci ${form.name}, votre message a été envoyé ✅`);
      setForm({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      console.error(err);
      alert("Erreur lors de l'envoi ❌");
    });
};



  return (
    <div className="container py-5">
      <div
        className="p-4 p-md-5 rounded-4 shadow-lg"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background:
            "linear-gradient(145deg, rgba(33,37,41,0.95), rgba(52,58,64,0.95))",
          backdropFilter: "blur(10px)",
          color: "#f1f1f1",
        }}
      >
        <h2 className="text-center mb-4 fw-bold text-info">Contactez-moi</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Nom</label>
            <input
              type="text"
              className="form-control form-control-lg bg-dark text-light border-0 shadow-sm"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Entrez votre nom"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Adresse e-mail</label>
            <input
              type="email"
              className="form-control form-control-lg bg-dark text-light border-0 shadow-sm"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="exemple@mail.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Message</label>
            <textarea
              className="form-control bg-dark text-light border-0 shadow-sm"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Écrivez votre message ici..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-lg text-white px-5"
              style={{
                background: "linear-gradient(90deg, #0dcaf0, #0d6efd)",
                border: "none",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.opacity = "0.85")
              }
              onMouseOut={(e) =>
                (e.target.style.opacity = "1")
              }
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>

      <footer className="text-center text-muted mt-5 small">
        © 2025 Marwan Barhoumi. Tous droits réservés.
      </footer>
    </div>
  );
}

export default Contact;
