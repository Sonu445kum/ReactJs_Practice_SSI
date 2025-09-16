import React from 'react'

export default function Ternary_Operator() {
  const isLogged=true;
  return (
    <div>
      {isLogged ? "Welcome " :"Error"}
    </div>
  )
}

