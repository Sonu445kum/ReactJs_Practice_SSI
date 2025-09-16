import React, { useState } from 'react'
// Create a button that changes the background color of a <div> using useState.
export default function ChangeBackgroundClor() {
      const [bgColor, setBgColor] = useState("lightblue");
    //create a functions to change the background color
    const handleChengeColor = () => {
        setBgColor(bgColor === "lightblue" ? "lightgreen" : "lightblue");

    }
    return (
        <>
            <div
                style={{
                    backgroundColor: bgColor,
                    height: "200px",
                    width: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                }}
            >
                <button onClick={handleChengeColor}>
                    Change Background
                </button>
            </div>
        </>
    )
}
