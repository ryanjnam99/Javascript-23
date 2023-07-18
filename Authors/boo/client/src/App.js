import React from 'react';
import { Routes, Route, useNavigate, Link, useParams } from "react-router-dom";
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';
import AuthorForm from './components/AuthorForm';
function App() {
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/authors/:id" element={<Details/>}/>
        <Route path="/authors/:id/edit" element={<Update/>}/>
        <Route path="/authors/new" element={<AuthorForm/>}/>
      </Routes>
    </div>
  );
}
export default App;

