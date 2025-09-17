import React, { useEffect, useState } from "react";

export default function CleanUpDemo() {
  const [show, setShow] = useState(true);

  // Ye wala component sirf timer aur cleanup handle karega
  const CleanUpFunc = () => {
    useEffect(() => {
      const timer = setInterval(() => {
        console.log("Timer running");
      }, 1000);

      return () => {
        clearInterval(timer);
        console.log("Cleanup on unmount");
      };
    }, []);

    return <h2>CleanUpFunc Mounted (Check console)</h2>;
  };

  return (
    <div>
      <h1>Cleanup Function Example</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>
      <hr />
      {show && <CleanUpFunc />}
    </div>
  );
}
