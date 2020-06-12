import React from "react"
import ubication from "./ubication.svg"
import calendar from "./calendar.svg"

export function UserDescription(props){
    return(
        <div className="description">
                <span>{props.description}</span>
            <div className="additional-info">
                <span>
                    <img style={{height: 14, width: 14}} src={ubication}></img>
                    {props.location}
                </span>
                <span>
                    <img style={{height: 14, width: 14}} src={calendar}></img>
                    {props.birthday}
                </span>
            </div>
        </div>
    )
}
