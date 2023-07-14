import React from 'react'
import axios from 'axios';


const ManagerList = (props) => {
    return (
        <div>
            {props.managers.map( (manager, i) => 
            <p key={i}>{manager.Title}</p>
            )}
        </div>
    )
}

export default ManagerList