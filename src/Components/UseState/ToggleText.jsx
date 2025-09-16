import React, { useState } from 'react'
// Build a button that toggles text between "Hello" and "Goodbye" using useState.
export default function ToggleText() {
    const [toggleText,setToggleText] =useState("Hello");
    //create a functions for the Toggle Text
    const handleToggleText=()=>{
        setToggleText((prevText)=>prevText==="Hello"? "GoodBye":"Hello")
    }
  return (
    <div>
        <h1>Text:{toggleText}</h1>
        <button onClick={handleToggleText}>
        ToggleBtn
        </button>
    </div>

  )
}
