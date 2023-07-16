import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";


const ManagerList = (props) => {
    const { managers, removeFromDom } = props;
    const deleteProduct = (managerId) => {
        axios.delete('http://localhost:8000/api/products/' + managerId)
            .then(res => {
                removeFromDom(managerId)
            })
            .catch(err => console.error(err));
    }
    // console.log(managers[0]._id);
    return (
        <div>
            {managers.map((manager, i) => {
                return <p key={i}>
                    <Link to={`http://localhost:3000/products/${manager._id}`}>
                        {manager.Title}
                    </Link>
                    |
                    <button onClick={(e) => { deleteProduct(manager._id) }}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}

export default ManagerList