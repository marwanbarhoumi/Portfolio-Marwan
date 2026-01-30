import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.set("trust proxy", 1); // مهم على Render

// ================= MIDDLEWARES =================
app.use(express.json());

// ---------- CORS MULTI-ORIGIN ----------
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Postman, server-to-server requests

    // Production
    if (origin === "https://portfolio-marwan.vercel.app") return callback(null, true);

    // All Vercel preview deployments
    if (/\.vercel\.app$/.test(origin)) return callback(null, true);

    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions)); // ✅ لا حاجة لـ app.options("*")

// ---------- SECURITY ----------
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

// ---------- RATE LIMIT ----------
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 دقيقة
  max: 5, // أقصى 5 requests لكل دقيقة
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please wait 1 minute." },
});

app.use("/api/contact", limiter);

// ================= EMAIL =================
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter at startup
transporter.verify()
  .then(() => console.log("✅ SMTP ready"))
  .catch(err => console.error("❌ SMTP error:", err.message));

// ================= ROUTE =================
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `New message from ${name}`,
      html: `
        <h3>New message from portfolio</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <hr/>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Send error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ================= START SERVER =================
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
