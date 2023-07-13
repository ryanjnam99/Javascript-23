import React, { useState, useEffect } from 'react'
import { useParams } from "react-router"
import axios from 'axios'


const Starship = (props) => {
    const [starship, setStarship] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}/`)
            .then(res => { setStarship(res.data) })
            .catch(err => alert("These are not the Droids you're looking for"))
    }, [id]);
    return (
        <div>
            <p>Name: {starship.name}</p>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Class: {starship.starship_class}</p>
            <p>Crew: {starship.crew}</p>
            <button><a href="/">Back to Main Page</a></button>
        </div >
    )
}

export default Starship