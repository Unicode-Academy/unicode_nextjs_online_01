"use client";

const saveCookie = async (token) => {
  const response = await fetch(`http://localhost:3000/api/cookies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  return response.json();
};
export default function ClientDemo({ children }) {
  saveCookie("Bhihi");
  return (
    <div>
      <h2>ClientDemo</h2>
      {children}
    </div>
  );
}
