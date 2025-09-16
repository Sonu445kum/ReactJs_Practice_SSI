import React, { useState } from "react";

export default function AddRandomNum() {
  // initial empty array
  const [numbers, setNumbers] = useState([]);

  // function to add a random number
  const addRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1; // 1-100 range
    setNumbers([...numbers, randomNum]); // spread operator se old + new value
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={addRandomNumber}>Add Random Number</button>

      <h3>Numbers:</h3>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}
