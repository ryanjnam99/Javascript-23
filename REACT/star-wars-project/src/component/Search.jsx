import React, {useEffect, useState} from 'react'

const Search = () => {
    return (
        <div>
            <div className="search">
                Search For:
                <select id="traits">
                    <option value="people">people</option>
                    <option value="planet">planet</option>
                    <option value="starship">starship</option>
                </select>
            </div>
            <div className="id">ID: <input type="text" /></div>
            <button>Search</button>
        </div>
    )
}

export default Search