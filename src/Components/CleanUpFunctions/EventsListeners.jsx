import React, { useEffect } from 'react'

export default function EventsListeners() {

    // here i create a useEffect for handling the side Effects of Windows Resized
    useEffect(() => {
        const onResize = () => {
            console.log("window resized:", window.innerWidth);
        };
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []); // cleanup on unmount

    return (
        <div>EventsListeners</div>
    )
}
