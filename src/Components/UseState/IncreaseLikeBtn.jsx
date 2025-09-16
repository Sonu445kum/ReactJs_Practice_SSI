import React, { useState } from 'react'
// Create a Like button that increases the count each time it’s clicked.
export default function IncreaseLikeBtn() {
    // create a useState for storing the initial state of Likes counts.
    const [likesCount,setLikesCount] =useState(0);

    // create a functions for handling the numbers of likes
    const handleLikesBtn=()=>{
        setLikesCount(likesCount+1);
    }
  return (
    <>
    <div>IncreaseLikeBtn</div>
    <br /> <br />
    <button onClick={handleLikesBtn}>LikesMe</button>
    <br /> <br />
    <h3>Total No. Of Likes:{likesCount}</h3>
    </>
    
  )
}
