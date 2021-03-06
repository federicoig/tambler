import { UserInfo } from "../UserInfo/UserInfo.js"
import React from "react"
import "./User.scss"

const MockUser = {
    avatar:"https://avatars1.githubusercontent.com/u/56234680?s=460&u=c8b81c525b1fd029db3020b17177dde2458a994e&v=4",
    name:"federico",
    username:"@federicoig",
    description:"trying to understand react...",
    location:"buenos aires.",
    birthday:"2001"
}

export function User(props){
    return(
    <header className="user">
        <img
            alt="Header of the profile."
            className="user-header"
            src={props.userHeader}
        />
        <UserInfo
            user={MockUser}
        />
    </header>
    )
}