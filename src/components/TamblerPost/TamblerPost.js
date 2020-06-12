import React from "react"
import { PostContent } from "./PostContent/PostContent.js"
import { PostButtons } from "./PostButtons/PostButtons.js"
import "./TamblerPost.scss"

export function TamblerPost(props){
    return(
        <React.Fragment>
            <article className="article">
                <div className="post-info">
                    <img className="avatar" alt="Avatar of an user." src={props.avatar} />  
                    <div className="who-when">
                        <span className="name">{props.name}</span>
                        <span className="username">{props.username}</span>
                        <span className="when">{props.when}</span>
                    </div>
                </div>
                <div className="content">
                    <div>
                        <PostContent 
                            content={props.content}
                        />
                        <PostButtons />
                    </div>
                </div>
            </article>  
        </React.Fragment>
    )
}