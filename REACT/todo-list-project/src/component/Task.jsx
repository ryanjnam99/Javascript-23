import React, { useState } from 'react'
import './List.css'

const Task = (props) => {
    const {name, id, removeFunction} = props;
    const [isChecked, setChecked] = useState(false);
    return (
        <div className='task'>
            <div>

            {
                isChecked?
                <p style = {{textDecoration: "line-through"}}>{name}</p>:
                <p>{name}</p>
            }
            </div>
            <div>

            <input type="checkbox" checked={isChecked} onChange={e => setChecked(e.target.checked)} />
            <button className= "delete" onClick={()=>removeFunction(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Task

//Challenge
//What condition needs to be tested to 