import { useState } from "react";
import { sendEmail } from "../Email";
import "../style/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await sendEmail(form);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("❌ Erreur lors de l'envoi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <h2 className="contact-title">📩 Contactez-moi</h2>
        <p className="contact-subtitle">
          Un projet, une opportunité ou une question ? Écrivez-moi.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {success && (
            <span className="success-msg">
              ✅ Message envoyé avec succès
            </span>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
