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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail(form);
      alert(`✅ Merci ${form.name}, message envoyé`);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Erreur lors de l'envoi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <h2>📧 Contactez-moi</h2>

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
      </form>
    </section>
  );
}

export default Contact;
