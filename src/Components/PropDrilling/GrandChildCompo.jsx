import React from 'react'

export default function GrandChildCompo({Person}) {
  return (
    <div>
        <h1>GrandChildCompo</h1>
        <h3>Person Deatils:</h3>
        <p>Name:{Person.name}</p>
        <p>Email:{Person.email}</p>
        <p>Password:{Person.password}</p>
        <p>Age:{Person.age}</p>
    </div>
  )
}
