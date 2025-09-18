import React, { useState } from "react";

export default function LoginFormValidations() {
    // Create a UseSate for store the initial state
  const [form, setForm] = useState({ username: "", password: "" });

//   Create a handleChange Functions for inputs Fields 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//   Create a handleSubmit Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    // Form validations
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      /><br/>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      /><br/>
      <button type="submit">Login</button>
    </form>
  );
}
