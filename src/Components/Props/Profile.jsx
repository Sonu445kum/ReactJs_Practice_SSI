import React from 'react'

export default function Profile(props) {
  return (
    <div>
        <h1>Profile Informations</h1>
        <p> Name:{props.name}</p>
        <p>Email:{props.email}</p>
        <p>Password:{props.password}</p>
    </div>
  )
}
