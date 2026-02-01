import { useState } from "react";
import { sendEmail } from "../Email";
import { useLanguage } from "../context/LanguageContext";
import "../style/Contact.css";

function Contact() {
  const { language } = useLanguage();

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
      alert(language === "FR"
        ? "❌ Erreur lors de l'envoi"
        : "❌ Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };

  // 🌍 Texts FR / EN
  const t = {
    title: language === "FR" ? "📩 Contactez-moi" : "📩 Contact Me",
    subtitle:
      language === "FR"
        ? "Un projet, une opportunité ou une question ? Écrivez-moi."
        : "A project, an opportunity or a question? Feel free to contact me.",
    name: language === "FR" ? "Votre nom" : "Your name",
    email: language === "FR" ? "Votre email" : "Your email",
    message: language === "FR" ? "Votre message" : "Your message",
    send: language === "FR" ? "Envoyer" : "Send",
    sending: language === "FR" ? "Envoi..." : "Sending...",
    success:
      language === "FR"
        ? "✅ Message envoyé avec succès"
        : "✅ Message sent successfully",
  };
console.log("LANG =", language);

  return (
    <section className="contact-page">
      <div className="contact-container">
        <h2 className="contact-title">{t.title}</h2>
        <p className="contact-subtitle">{t.subtitle}</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t.name}
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t.email}
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder={t.message}
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? t.sending : t.send}
          </button>

          {success && (
            <span className="success-msg">{t.success}</span>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
