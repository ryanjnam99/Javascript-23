import React, { useState } from 'react'
import axios from 'axios'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const getPokemonAxios = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(res=>setPokemon(res.data.results))
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <button onClick={getPokemonAxios}>Fetch Pokemon</button>
            <ul>
                {pokemon.map((pokemon, i) => {
                    return (
                        <li>{pokemon.name}</li>
                        // the name comes from res.data.results
                    )
                })}
            </ul>
        </div>
    )
}



export default Pokemon