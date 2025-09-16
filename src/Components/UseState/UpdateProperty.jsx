import React, { useState } from 'react'

// Manage an object in state { name, age } and update only one property at a time.
export default function UpdateProperty() {
    const [user,setUser] = useState({name:"Sonu",age:22});

    // create a functions to update the Name:
    const updateNameOnly =()=>{
        setUser({...user,name:"Sonu Kumar"})
    }

    // create a functions for update age
    const updateAge=()=>{
        setUser({...user,age:user.age+1});
    }

  return (
    <>
    <div>UpdateProperty</div>
    <h1>User Informations</h1>
    <h2>User Name:{user.name}</h2>
    <h2>User Age :{user.age}</h2>
    <button onClick={updateNameOnly}>UpdateName</button>
    
    <button onClick={updateAge}>Increase Age</button>
    </>
    
  )
}
