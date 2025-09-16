import React, { useState } from 'react'
// Build a password field with a button to toggle between "show" and "hide" password
export default function ShowHidePass() {
    const [show,setShow] =useState(false);

    // create a functions to show Hide Password:
    const handleShowHidePass=()=>{
        setShow((prev)=>!prev);
    }

  return (
    <>
    <div>ShowHidePass</div> <br />
    <input type={show ? "text" :"password"} placeholder='Enter your Password' />
    <button onClick={handleShowHidePass}>{show ?"Hide":"Show"}</button>
    </>
  )
}
