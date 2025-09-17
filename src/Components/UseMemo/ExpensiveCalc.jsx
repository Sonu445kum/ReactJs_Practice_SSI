import React, { useState, useMemo } from "react";

export default function ExpensiveCalc() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return count * 2; // Imagine this is expensive
  }, [count]);

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <h2>Expensive Value: {expensiveValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}
