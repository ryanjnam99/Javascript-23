import React from 'react'

const PersonCard = (props) => {
    return (
        <div>
            <h2>{props.firstname} {props.lastname}</h2>
            <p>{props.age}</p>
            <p>{props.haircolor}</p>
        </div>
    )
}

export default PersonCard