import React, {useState} from 'react';
import axios from 'axios';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

const AuthorForm = (props) => {
    const {initialName} = props;
    const [name, setName] = useState(initialName);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
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
            <h3>Add a new Author</h3>
            <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name</label><br />
                    <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default AuthorForm