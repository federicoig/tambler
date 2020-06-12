import React from "react"
import ubication from "./ubication.svg"
import calendar from "./calendar.svg"

export function UserDescription(props){
    return(
        <div className="description">
                <span>{props.description}</span>
            <div className="additional-info">
                <span>
                    <img className="icon" alt="ubication icon." src={ubication}></img>
                    {props.location}
                </span>
                <span>
                    <img className="icon" alt="calendar icon." src={calendar}></img>
                    {props.birthday}
                </span>
            </div>
        </div>
    )
}
