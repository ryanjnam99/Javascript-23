import React, { useState, useEffect } from 'react'
import { useParams } from "react-router"
import axios from 'axios'

const Character = (props) => {
    const [character, setCharacter] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(res => { setCharacter(res.data) })
            .catch(err => alert("These are not the Droids you're looking for"))
    }, [id]);
    return (
        <div>
            <p>Name: {character.name}</p>
            <p>Height: {character.height}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Mass: {character.mass}</p>
            <p>Skin: {character.skin_color}</p>
            <button><a href="/">Back to Main Page</a></button>
        </div>
    )
}

export default Character


