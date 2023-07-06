import React from 'react';
import './App.css';
import PersonCard from './component/PersonCard';

function App() {
  return (
      <div className="App">
          <PersonCard firstname = {"Jane"} lastname = {"Doe"} age = {"45"} haircolor = {"Brown"}/>
          <PersonCard firstname = {"John"} lastname = {"Smith"} age = {"88"} haircolor = {"Brown"}/>
          <PersonCard firstname = {"Millard"} lastname = {"Fillmore"} age = {"50"} haircolor = {"Brown"}/>
          <PersonCard firstname = {"Maria"} lastname = {"Smith"} age = {"62"} haircolor = {"Brown"}/>
      </div>
  );
}



export default App;
