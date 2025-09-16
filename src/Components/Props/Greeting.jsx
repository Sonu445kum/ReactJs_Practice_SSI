import React from 'react'
// Create a component Greeting that takes a name prop and displays Hello, {name}!.
export default function Greeting(props) {
  return (
    <div>
        <h1>Greeting</h1>
        <p>Name:{props.name}</p>
    </div>
  )
}
