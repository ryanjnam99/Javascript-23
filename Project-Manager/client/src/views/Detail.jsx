import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import ManagerList from '../components/ManagerList';

const Detail = (props) => {
    const [manager, setManager] = useState({});
    const { removeFromDom } = props;
    const { id } = useParams();
    const deleteProduct = (managerId) => {
        axios.delete('http://localhost:8000/api/products/' + managerId)
            .then(res => {
                removeFromDom(managerId)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setManager(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
        <div>
            <p>Title: {manager.Title}</p>
            <p>Price: ${manager.Price}</p>
            <p>Description: {manager.Description}</p>
            <Link to={"/products/" + manager._id + "/edit"}>Edit</Link>
            <Link to={"/"}>
                <button onClick={(e) => { deleteProduct(manager._id) }}>
                Delete
                </button>
            </Link>
        </div>
    )
}

export default Detail;