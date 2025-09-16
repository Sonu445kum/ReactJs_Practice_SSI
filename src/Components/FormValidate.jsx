import React, { useState } from 'react'
//Build a form with multiple inputs (name, email, password) and manage them using useState.
export default function FormValidate() {
    // create a UseState for mange the inputs(like name,email,password);
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    //create a functions to handle the from input
    const handleFormInput = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))


    }
    // create a functions to handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted Successfully:", formData);
    }

    return (
        <>
            {/* <div>FormValidate</div> */}
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <label htmlFor="name">Name:</label>
                <input id='name' type="text" name='name' value={formData.name} onChange={handleFormInput} placeholder='Enter Your Name:' />
                <br />
                {/* Email */}
                <label htmlFor="email">Email:</label>
                <input id='email' type="email" name='email' value={formData.email} onChange={handleFormInput}
                    placeholder='Enter Your Email:' />
                <br />
                {/* Password */}
                <label htmlFor="password">Password:</label>
                <input id='password' type="password" name='password' value={formData.password} onChange={handleFormInput} placeholder='Enter Your Password' />
                <br />
                {/* Button */}
                <button type='submit'>Submit</button>
            </form>
            {/* User Informations */}
            <h1>Preview Form Data:</h1>
            <p>UserName:{formData.name}</p>
            <p>Email:{formData.email}</p>
            <p>Password:{formData.password}</p>
        </>
    )
}
