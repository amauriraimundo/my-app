import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Tasks from './components/Tasks';
import './App.css'
import AddTask from './components/AddTasks';

const App = () => {
  // let message = 'Hello World!'
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true
    },
  ]);

  const hendleTaskAddition = (tasktitle) => {
    const newTasks = [...tasks, {
      title: tasktitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks)
  }


  return (
    <>
      <div className='container'>
        <AddTask hendleTaskAddition={hendleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App;
