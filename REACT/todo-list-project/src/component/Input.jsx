import React, { useState } from 'react'

const Input = (props) => {
    const {list} = props;
    const [input, setInput] = useState(
        {
            task: ""
        }
    );

    
    const submitList = (e) => {
        e.preventDefault();
        list(input);
        setInput (
            {
                task: ""
            }
        )

    }

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInput(currentData => ({...currentData, [name]:value }))
    }

    return (
        <div>
            <form onSubmit={submitList}>
                <label>Task: </label>
                <input type="text" onChange={handleInput} name="task" value={input.task}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Input