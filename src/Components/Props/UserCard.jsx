import React from 'react'
// Create a UserCard component that accepts name, age, and email as props and displays them.
export default function UserCard(props) {
  return (
    <div>
        <h1>UserCard Informations</h1>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Email:{props.email}</p>
    </div>
  )
}
