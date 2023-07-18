
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";


const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, [id])
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name,
        })
        .then(res => {console.log(res); navigate('/')})
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }
    return (
        <div>
            <h3>Edit this author</h3>
            <form onSubmit={updateAuthor}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </p>
                <input type="submit" />
            </form>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Update