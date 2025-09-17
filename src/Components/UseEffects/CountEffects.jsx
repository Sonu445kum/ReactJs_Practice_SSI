import React, { useEffect, useState } from 'react'

export default function CountEffects() {
    // create a useState for storing the initial Value of the State
    const [count,setCount] =useState(0);

    // create a useEffects Hooks to handling the Side Effects
    useEffect(()=>{
        console.log("Components Render And Count Changes!!")
    })
  return (
    // Create a single Parent Div
    <div>
        <h1>CountEffects</h1>
        <h2>Count Value:{count}</h2>
        {/* Create a Incrment Button for increasing the value when user clicks on the button */}
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
