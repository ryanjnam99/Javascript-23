import './App.css';
import {Routes, Route, Link ,useParams} from "react-router-dom";
import Character from './component/Character';
import Planet from './component/Planet';
import Starship from './component/Starship';
import All from './component/All';




function App() {
  const CharacterId = () => {
    const {id} = useParams();
    return <Character id={id}/>
  }
  const PlanetId = () => {
    const{id} = useParams();
    return<Planet id={id}/>
  }
  const StarshipId = () => {
    const {id} = useParams();
    return<Starship id={id}/>
  }
  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <h2>Disclaimer: Starship does not have an id of 1</h2>
      <All/>
      <Routes>
        <Route path="/people/:id" element={<CharacterId/>}></Route>
        <Route path="/planets/:id" element={<PlanetId/>}></Route>
        <Route path="/starships/:id" element={<StarshipId/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
