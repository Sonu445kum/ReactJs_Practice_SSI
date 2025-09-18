import React, { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //  simple validation
    if (!email.includes("@")) {
      setError("Invalid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    //  input sanitization (remove extra spaces)
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    console.log("Submitted:", cleanEmail, cleanPassword);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button type="submit">Signup</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
