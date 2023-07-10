import React, { useState } from 'react'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const getPokemon = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
            const data = await response.json();
            const name = data.results.map(pokemon => pokemon.name);
            setPokemon(name);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            <ul>
                {pokemon.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pokemon