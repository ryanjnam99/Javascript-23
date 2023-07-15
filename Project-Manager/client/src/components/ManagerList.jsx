import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";


const ManagerList = (props) => {
    const {managers} = props;
    // console.log(managers[0]._id);
    return (
        <div>
            {managers.map( (manager, i) => 
            <Link to = {`http://localhost:3000/products/${manager._id}`}>
                <p key={i}>{manager.Title}</p>
            </Link>
            )}
        </div>
    )
}

export default ManagerList