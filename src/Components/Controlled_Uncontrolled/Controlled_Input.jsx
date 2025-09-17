import React, { useState } from 'react'

export default function Controlled_Input() {
    // Create a useState for storing the initial value
    const [inputValue,setInputValue] =useState("");
  return (
    <div>
      <input
        type="text"
        value={inputValue}                // controlled by state
        onChange={(e) => setInputValue(e.target.value)}  // update state
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}
