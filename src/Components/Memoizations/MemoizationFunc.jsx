import React, { useState, memo } from "react";

const Child = memo(({ name }) => {
  console.log("Child re-rendered");
  return <h2>Hello {name}</h2>;
});

export default function MemoizationFunc() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child name="Sonu" /> 
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Count: {count}</p>
    </>
  );
}
