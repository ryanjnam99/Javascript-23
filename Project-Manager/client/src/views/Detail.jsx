import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Detail = (props) => { 
    const [manager, setManager] = useState({})
    const {id} = useParams();

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setManager(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
        <div>
            <p>Title: {manager.Title}</p>
            <p>Price: ${manager.Price}</p>
            <p>Description: {manager.Description}</p>
        </div>
    )
}

export default Detail;