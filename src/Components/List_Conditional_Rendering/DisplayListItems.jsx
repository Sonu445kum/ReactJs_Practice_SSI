import React from 'react'

export default function DisplayListItems() {
    const fruits =["Apple","Apple","Banana","Lichi"];

  return (
    
       <div>
         <ul>
            {fruits.map((items,index)=>(
                <li key={index}>{items}</li>
            ))}
        </ul>
       </div>
   
  )
}
