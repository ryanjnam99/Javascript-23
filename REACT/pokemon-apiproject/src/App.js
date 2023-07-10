import React, { useState } from 'react';
import Pokemon from './component/Pokemon';

import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])
  return (
    <div className="App">
      <Pokemon/>
    </div>
  );
}

export default App;
