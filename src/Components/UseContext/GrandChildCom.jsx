import React, { useContext } from 'react'
import { UserContext } from '../../App';

export default function GrandChildCom() {
    // const animal=useContext(UserContext);
    const Animal =useContext(UserContext);
  return (
    <div>GrandChildCom
        <h3>Animal Details</h3>
        <p>Animal:{Animal.name}</p>
        <p>Color:{Animal.color}</p>
        <p>Age:{Animal.age}</p>
        <p>Weight:{Animal.weight}</p>
    </div>
  )
}
