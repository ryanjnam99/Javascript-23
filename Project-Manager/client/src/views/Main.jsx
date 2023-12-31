import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import ManagerForm from '../components/ManagerForm';
import ManagerList from '../components/ManagerList';


const Main = (props) => {
    const [managers, setManagers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
            .then(res =>{
                setManagers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);
    const removeFromDom = managerId => {
        setManagers(managers.filter(manager => manager._id !== managerId));
    }
    return (
        <div>
            <ManagerForm/>
            <hr/>
            <h2>All Products</h2>
            {loaded &&
                <ManagerList managers={managers} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main