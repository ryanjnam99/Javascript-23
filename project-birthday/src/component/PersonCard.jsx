
import React, { useState } from 'react';

const PersonCard = (props) => {
    const [count, setCount] = useState(props.age);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h2>{props.firstname} {props.lastname}</h2>
            <p>{count}</p>
            <p>{props.haircolor}</p>
            <button onClick = { handleClick }>Birthday Button for {props.firstname} {props.lastname}</button>
        </div>
    )
}

export default PersonCard