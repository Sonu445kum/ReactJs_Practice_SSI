import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click Me</button>;
}

export default function UseCallbackFunc() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert("Button clicked!");
  }, []); // Memoized function

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </>
  );
}
