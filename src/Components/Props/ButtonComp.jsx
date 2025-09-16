import React from 'react'
// Create a Button component that receives text and onClick as props.
// Clicking the button should call the onClick function.
export default function ButtonComp({text,onClick}) {
  return (
    <div>
        <h1>ButtonComp</h1>
        <p>Text:{text}</p>
        <button onClick={onClick}>Click me</button>
    </div>
  )
}
