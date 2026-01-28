import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"] // تعديل حسب front URL
}));

// Rate limiter simple
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // max 5 requests per window
  message: { error: "Too many requests, try again later." }
});
app.use("/api/contact", limiter);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_PORT == "465", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});

// Verify transporter at startup
transporter.verify()
  .then(() => console.log("SMTP ready"))
  .catch(err => console.error("SMTP error:", err.message));

// POST /api/contact
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
    // Optionally: validate email format with regex

    // Build email
    const mailOptions = {
      from: `"Website Contact" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>Nouveau message depuis le site</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr/>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);
    return res.json({ success: true, message: "Message sent" });
  } catch (err) {
    console.error("Send mail error:", err);
    return res.status(500).json({ error: "Failed to send message" });
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
