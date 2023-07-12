import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Starship = (props) => {
    const [starship, setStarship] = useState([]);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${props.id}/`)
            .then(res => {setStarship([res.data])})
            .catch(err => alert("These are not the Droids you're looking for"))
    }, [props.id]);
    return (
        <div>
            {starship.map((starship, i) => {
                return (
                    <div key={i}>
                        <p>Name: {starship.name}</p>
                        <p>Model: {starship.model}</p>
                        <p>Manufacturer: {starship.manufacturer}</p>
                        <p>Class: {starship.starship_class}</p>
                        <p>Crew: {starship.crew}</p>
                    </div>
                )
            })}
            <button><a href="/">Back to Main Page</a></button>
        </div>
    )
}

export default Starship