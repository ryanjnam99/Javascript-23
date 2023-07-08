import Task from './component/Task';
import Input from './component/Input';
import React, { useState } from 'react'
import './App.css';



function App() {
  const [tasks, setTask] = useState([]);
  
  const addtoTask = oneTask => {
    setTask(currentTask => ([...currentTask, oneTask ]))
  }

  const deleteTask = id => {
    let left = tasks.slice(0,id)
    let right = tasks.slice(id+1)

    setTask(left.concat(right))
  }
  return (
    <div className="App">
      <Input list = {addtoTask}/>
      {
        tasks.map((index, i) => {
          return (
            <Task id={i} removeFunction={deleteTask} name={index.task}/>
          )
        })
      }
    </div>
  );
}

export default App;
