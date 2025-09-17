import React, { useState } from 'react'

export default function SignupForm() {
    // Create a useSate for storing the form data:
    const [form,setForm] = useState({username:" ",email:" ",password:" "});

    // create a functions as handleOnChange
    const handleChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }

    // create a functions for the submit form
    const handleSubmitForm=(e)=>{
        e.preventDefault();
        // Data view in the browser console
        console.log("Form Submitted Successfully..!!",form)
    }

  return (
    <div>
        {/* Form Creations With Multiple Fields */}
        <form onSubmit={handleSubmitForm}>
            {/* Username */}
            <label htmlFor="username">Username:</label>
            <input id='usewrname' type="text" name='username' value={form.username} onChange={handleChangeInput} placeholder='Enter Your Name' required/>
            <br /> <br />
            {/* Email */}
            <label htmlFor="email">Email:</label>
            <input id='email' type="email" name='email' value={form.email} onChange={handleChangeInput} placeholder='Enter Your Email' required />
            <br /><br />
            {/* Password */}
            <label htmlFor="password">Password:</label>
            <input id='password' type="password" name='password' value={form.password} onChange={handleChangeInput} placeholder='Enter Your Password' required />
            <br /> <br />
            {/* Submit Button */}
            <button type='submit'>Submit</button>
        </form>
        {/* Previews Deatils of Form */}
        <h1>Previews Deatils of Form</h1>
        <p>Username:{form.username}</p>
        <p>Email:{form.email}</p>
        <p>Password:{form.password}</p>
    </div>
  )
}
