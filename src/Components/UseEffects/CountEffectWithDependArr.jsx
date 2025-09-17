import React, { useEffect, useState } from 'react'

export default function CountEffectWithDependArr() {
    // create a useState for storing the initial value of the State
    const [count,setCount] =useState(0);

    // create a UseEffect  with Dependency Array to Hnadle the Side Effect
    // useEffect(()=>{
    //     console.log("Componenets Mounts When the Count Values Changed!")
    // },[count]);

    // create Another UseEffects With Empty Dependency Array:
    useEffect(()=>{
        console.log("Only runs Onces When the Components Mounted..!!");
    },[]);
  return (
    <div>
        <h1>CountEffectWithDependArr</h1>
        <h2>Count Value:{count}</h2>
        {/* create an Incrment Button */}
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
