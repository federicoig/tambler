import React from "react"
import ubication from "./ubication.svg"
import calendar from "./calendar.svg"

export function UserInfo(props){
    const user = props.user
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
                <button type="button" className="follow-button">Follow</button>
                </div>
                <div className="description">
                    <span>{user.description}</span>
                    <div className="additional-info">
                        <span>
                            <img style={{height: 14, width: 14}} src={ubication}></img>
                            {user.location}
                        </span>
                        <span>
                            <img style={{height: 14, width: 14}} src={calendar}></img>
                            {user.birthday}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}