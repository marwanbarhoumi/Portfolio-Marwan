import { useState } from "react";
import "../style/Contact.css";
import { sendEmail } from "../Email";
import useScrollReveal from "../hooks/useScrollReveal";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  useScrollReveal();

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
    <section className="contact-section">
      <div className="contact-card reveal">
        <h2 className="contact-title">Contactez-moi</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              required
            />
          </div>

          <div className="form-group">
            <label>Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="exemple@mail.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Écrivez votre message ici..."
              required
            />
          </div>

          <button type="submit" className="contact-btn">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
