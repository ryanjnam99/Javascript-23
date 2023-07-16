import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const navigator = useNavigate();
    const [Title, setTitle] = useState('');
    const [Price, setPrice] = useState('');
    const [Description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.Title);
                setPrice(res.data.Price);
                setDescription(res.data.Description);
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            Title,
            Price,
            Description
        })
            .then(res => console.log(res), navigator("/"))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" name="Title" value={Title} onChange={(e) => { setTitle(e.target.value) }}/>
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" name="Price" value={Price} onChange={(e) => { setPrice(e.target.value) }}/>
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" name="Description" value={Description} onChange={(e) => { setDescription(e.target.value) }}/>
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}


export default Update

