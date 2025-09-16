import React from 'react'
// Create a Profile component that receives a user object
//  as a prop and shows the user’s details.
export default function UserInfo({userDeatils}) {
  return (
    <div>
        <h1>UserInfo</h1>
        <p>Name:{userDeatils.name}</p>
        <p>Age:{userDeatils.age}</p>
        <p>Address:{userDeatils.Address}</p>
        <p>Pincode :{userDeatils.Pincode}</p>
    </div>
  )
}
