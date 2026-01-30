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

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed");
  }

  return data;
};
