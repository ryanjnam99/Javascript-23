import './App.css';
import {Routes, Route, Link ,useParams} from "react-router-dom";
import Character from './component/Character';
import Planet from './component/Planet';
import Starship from './component/Starship';
import All from './component/All';




function App() {
  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <h2>Disclaimer: Starship does not have an id of 1</h2>
      <All/>
      <Routes>
        <Route path="/people/:id" element={<Character/>}></Route>
        <Route path="/planets/:id" element={<Planet/>}></Route>
        <Route path="/starships/:id" element={<Starship/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
