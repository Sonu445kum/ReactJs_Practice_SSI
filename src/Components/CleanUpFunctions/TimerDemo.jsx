import React, { useEffect, useState } from 'react'

export default function TimerDemo() {
    // here i are create the useState for the create State:
    const [seconds,setSeconds] = useState(0);

    // here  i create the useEffect for handle the side Effect :
    useEffect(()=>{
        console.log("Effects Starts:",seconds);
        // here i create id Functions
        const id=setInterval(()=>{
            // here we are the set the Seconds 
            setSeconds(s=>s+1)
            // here prints the simple message
            console.log("Tick");
        },1000);

        // here i return the cleanup Functions which works on the unmount
        return ()=>{
            console.log("Clear Functions Start Now..!!");
            clearInterval(id);
        }
    },[]); // []-> start once cleanup functions

  return (
    <div>
        <h1>TimerDemo</h1>
        <p>Seconds:{seconds}</p>
    </div>
  )
}
