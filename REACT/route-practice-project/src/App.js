import React from "react";
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import WordOrNumber from "./component/WordOrNumber";
    
const Main = (props) => {
  return (
    <div>
    </div>
  );
}
    
const Home = (props) => {
  return (
    <div>
        <h1>Welcome</h1>
    </div>
  );
}

    
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:wordOrNumber" element={<WordOrNumber />} />
        <Route path="/:wordOrNumber/:fontColor" element={<WordOrNumber/>}/>
        <Route path="/:wordOrNumber/:fontColor/:fontBackground" element={<WordOrNumber />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}
    
export default App




