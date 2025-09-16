import React from 'react'
// Create a Message component that displays text differently
//  based on a type prop (success, error, info).
export default function MessageComp({text,type}){

    // Determine style based on type
  const getStyle = () => {
    switch (type) {
      case "success":
        return { color: "green", border: "1px solid green", padding: "10px", borderRadius: "5px" };
      case "error":
        return { color: "red", border: "1px solid red", padding: "10px", borderRadius: "5px" };
      case "info":
        return { color: "blue", border: "1px solid blue", padding: "10px", borderRadius: "5px" };
      default:
        return { color: "black", padding: "10px", borderRadius: "5px" };
    }
  };
  return <div style={getStyle()}>{text}</div>;
}
