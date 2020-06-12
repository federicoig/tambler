import React from "react"
import { UserDescription } from "./UserDescription/UserDescription.js"
import { FollowButton } from "./FollowButton/FollowButton.js"

export function UserInfo({ user }){
    const { description, location, birthday } = user

    return(
        <div className="user-info">
            <img
                className="avatar"
                src={user.avatar}
            />
            <div className="info">
                <div className="wrapper">
                    <a className="name">
                        {user.name}
                        <span className="username">{user.username}</span>
                    </a>
                    <FollowButton/>
                </div>
                <UserDescription
                    description={description} 
                    birthday={birthday} 
                    location={location}
                />
            </div>
        </div>
    )
}