import React, { useState } from "react"

export function FollowButton(props) {
    const [isFollowed, setFollowed] = useState("Follow")

    function toggle(){
        setFollowed(isFollowed === "Follow" ? "Followed" : "Follow")
    }
    
    return(
        <button 
            type="button" 
            className={`follow-button ${isFollowed}`}
            onClick={toggle}
        >
            {isFollowed}
        </button>
    )
}