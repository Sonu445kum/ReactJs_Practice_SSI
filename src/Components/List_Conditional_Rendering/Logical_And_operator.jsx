import React from 'react'

export default function Logical_And_operator() {
    // create a variables:
    // let name ="Sonu"
    const notifications =-5;
  return (
    <div>
        <h1>Logical_And_operator</h1>
        {notifications > 0 && <p>You Have a Notifications:{notifications} new notifications</p>}
        
    </div>
  )
}
