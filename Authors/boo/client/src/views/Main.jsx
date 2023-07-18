import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, Routes, Route} from "react-router-dom";
import AuthorList from '../components/AuthorList';
export default () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
            });
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
        axios.delete('http://localhost:8000/api/authors/' + authorId)
        .then(res => {}
)
    }

    return (
        <div>
            <Link to="/authors/new">Add an Author</Link>
            <hr/>
            <AuthorList authors={authors} removeFromDom={removeFromDom}/>
        </div>
    )
}

