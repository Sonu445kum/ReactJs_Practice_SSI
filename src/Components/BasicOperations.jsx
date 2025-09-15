
//  Create a counter app with increment/decrement/reset.
import React, { useState } from 'react'
 
export default function BasicOperations() {
    //create a useState for initialize the initial State
    const [count,setCount] =useState(0);

    // create a useState For Toggle Text that is Hello->GoodBye->Hello
    const [toggle,setToggle] =useState("Hello");

    // Create handleIncrement functions
    const  handleIncrement=()=>{
        setCount(count+1);
    }
    // Create HandleDecrements func
    const handleDecrement=()=>{
        setCount(count-1);
    }
    // Create HandleReset Func
    const handleReset=()=>{
        setCount(0);
    }

    const handleToggleText=()=>{
        // Here we are using the ternary operators
        setToggle((prevText)=>prevText==="Hello"? "GoodBye":"Hello")
    }
  return (
    <div>
        {/* Simple Message  */}
         <h1>Increment - Decrement - Reset Oprations:</h1>
        {/* Count Displays value */}
        <h1>Count:{count}</h1>
        {/* Increment Button */}
        <button onClick={handleIncrement}>Increment:</button>
        {/* Decrement Button */}
        <button onClick={handleDecrement}>Decrement:</button>
        {/* Reset Button */}
        <button onClick={handleReset}>Reset:</button>

        {/* Toggle Text
        Create a button that toggles text between "Hello" and "Goodbye" when clicked. 
        */}
        <h3>Toggle Text:</h3>
        <button onClick={handleToggleText} >ToggleText</button>
        <h1>{toggle}</h1>
    
    </div>
  )
}
