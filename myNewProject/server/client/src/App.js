import React from 'react';
import { Routes, Route, Link, useParams } from "react-router-dom";
import Main from './views/Main';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}
export default App;

