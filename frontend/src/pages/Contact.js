import { useState } from "react";
import { sendEmail } from "../Email";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await sendEmail(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      if (err.message.includes("Too many")) {
        setStatus("limit");
      } else {
        setStatus("error");
      }
    }
  };

  return (
    <section className="contact-section">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send"}
        </button>

        {status === "success" && (
          <p className="success">Message sent successfully ✅</p>
        )}

        {status === "limit" && (
          <p className="warning">
            Too many requests ⏳ please wait 1 minute
          </p>
        )}

        {status === "error" && (
          <p className="error">Something went wrong ❌</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
