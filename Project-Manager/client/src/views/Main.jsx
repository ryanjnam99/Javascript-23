import React, { useEffect, useState } from 'react'
import axios from 'axios';
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
    return (
        <div>
            <ManagerForm/>
            <hr/>
            {loaded && <ManagerList managers={managers}/>}
        </div>
    )
}

export default Main