export const sendEmail = async (form) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/api/contact`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json();
};
