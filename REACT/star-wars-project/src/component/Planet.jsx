import React, { useState, useEffect } from 'react'
import {useParams} from "react-router"
import axios from 'axios'


const Planet = (props) => {
    const [planet, setPlanet] = useState([]);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${props.id}/`)
            .then(res => {
                setPlanet([res.data])
            })
            .catch(err => alert("These are not the Droids you're looking for"))
    }, [props.id]);
    return (
        <div>
            {planet.map((planet, i) => {
                return (
                    <div key={i}>
                        <p>Name: {planet.name}</p>
                        <p>Rotation Period: {planet.rotation_period}</p>
                        <p>Population: {planet.population}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p>Climate: {planet.climate}</p>
                    </div>
                )
            })}
            <button><a href="/">Back to Main Page</a></button>
        </div>
    )
}

export default Planet