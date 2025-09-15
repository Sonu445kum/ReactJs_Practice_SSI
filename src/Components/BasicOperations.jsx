
//  Create a counter app with increment/decrement/reset.
import React, { useState } from 'react'
 
export default function BasicOperations() {
    //create a useState for initialize the initial State
    const [count,setCount] =useState(0);

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
    </div>
  )
}
