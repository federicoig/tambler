import React from "react"
import like from "../svg/like.svg"
import comments from "../svg/comments.svg"
import repost from "../svg/repost.svg"

export function PostButtons(){
    return(
    <div className="post-buttons">
        <img alt="comments icon." className="icon" src={comments} />
        <span>comments</span>
        <img alt="repost icon." className="icon" src={repost} />
        <span>reposts</span>
        <img alt="like icon." className="icon" src={like} />
        <span>like</span>
    </div>
    )
}