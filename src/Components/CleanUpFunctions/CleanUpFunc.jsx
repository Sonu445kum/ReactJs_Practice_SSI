import React from 'react'
// Agar aap event listeners ya timer set karte ho, cleanup zaruri hai.
// useEffect return me ek function allow karta hai jo component unmount hone
//  se pehle run hota hai
export default function CleanUpFunc() {
    // Create a UseEffect to the CleanUp Functions
    useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer running");
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log("Cleanup on unmount");
  };
}, []);

  return (
    <div>CleanUpFunc</div>
  )
}
