import React, { useState } from 'react'
import axios from 'axios';

const ManagerForm = () => {
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            Title,
            Price, 
            Description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={Title}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} value={Price}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={Description}/>
                </p>
                <button>Create</button>
            </form>
        </div>
    )
}

export default ManagerForm