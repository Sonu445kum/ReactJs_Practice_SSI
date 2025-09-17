import React, { useState } from 'react';

export default function SignupForm() {
  // State for storing form data
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  // Function to handle input change
  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Function to handle form submit
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully..!!", form);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        {/* Username */}
        <label htmlFor="username">Username:</label>
        <input
          id="username" // Fixed typo
          type="text"
          name="username"
          value={form.username}
          onChange={handleChangeInput}
          placeholder="Enter Your Name"
          required
        />
        <br /><br />

        {/* Email */}
        <label htmlFor="Useremail">Email:</label>
        <input
          id="email" // Unique ID
          type="Useremail"
          name="email"
          value={form.email}
          onChange={handleChangeInput}
          placeholder="Enter Your Email"
          required
        />
        <br /><br />

        {/* Password */}
        <label htmlFor="UserPassword">Password:</label>
        <input
          id="UserPassword" // Unique ID
          type="password"
          name="password"
          value={form.password}
          onChange={handleChangeInput}
          placeholder="Enter Your Password"
          required
        />
        <br /><br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      {/* Preview Details */}
      <h1>Preview Details of Form</h1>
      <p>Username: {form.username}</p>
      <p>Email: {form.email}</p>
      <p>Password: {form.password}</p>
    </div>
  );
}
