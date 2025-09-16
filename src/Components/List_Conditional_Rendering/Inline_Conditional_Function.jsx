import React from 'react'

export default function Inline_Conditional_Function() {

    // Create a Inline Functions
    const renderMessage=(isAdmin)=>{
        if(isAdmin) return <h1>AdminPanel</h1>
        return <p>User Dashboard</p>
        

    }
  return (
    <div>
        <h1>Inline Conditinal Functions</h1>
        {renderMessage(true)}
    </div>
  )
}
