import emailjs from "emailjs-com";

// Fonction pour envoyer l'email
export const sendEmail = (form) => {
  return emailjs.send(
    "service_mdqrmbq", // Ton Service ID EmailJS
    "template_6oeusfo",  // Ton Template ID EmailJS
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    },
    "rZntrXRJ-CWDXfiUS" // Ton User ID EmailJS
  );
};
