import React, { useState } from 'react'
import './CounterApp.css'
function CounterApp() {
    const [count,setCount] =useState(0);
    // create a Functions for Increment:+
    const handleIncrement=()=>{
        setCount(count+1);
    }
    // create a Functions For Decrement:-
    const handleDecrement=()=>{
        setCount(count - 1);
    }
    //create a functions For Reset:
    const handleReset=()=>{
        setCount(0)
    }

  return (
    <>
    <div>CounterApp</div>
    <h1>CountValue:{count}</h1>
    <div id="btnContainer">
        <button onClick={handleIncrement}>Increment(+)</button>
        <br /><br />
        <button onClick={handleDecrement}>Decrement(-)</button>
        <br /><br />
        <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}

export default CounterApp;