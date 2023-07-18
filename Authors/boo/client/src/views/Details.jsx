import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";


const Details = (props) => {
    const [author, setAuthor] = useState({})
    const {id} = useParams();
    useEffect (() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
        <div>
            <p>
                Name: {author.name}
            </p>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Details