import './App.css';
// import React from 'react'
import { useState, useEffect } from 'react';
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom';

import { Header  } from './components/header';
import { Tasks } from './components/tasks';
import { AddTask } from './components/addTask';
import { Footer } from './components/footer';
import { About } from './components/about';
//function way
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  //we want to be able to use tasks in different components
  //so we set it in global state so every other component can see it
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks()

  }, [])

  //fetch tasks 
  const fetchTasks = async() => {
    const response = await fetch('http://localhost:4000/tasks');
    const data = await response.json()

    return data;
  }

  const fetchTask = async(id) => {
    const response = await fetch(`http://localhost:4000/tasks/${id}`);
    const data = await response.json()

    return data;
  }



  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'doctors appointment',
          day: 'Feb 5',
          reminder: true 
      },
      {
          id: 2,
          text: 'interview meeting',
          day: 'Feb 10',
          reminder: true 
      },
      {
          id: 3,
          text: 'changing eyeglasses',
          day: 'May 15',
          reminder: true 
      },
    ]);
  
    
  const toggleReminder = async (id) => {
    console.log(id);
    const taskToToggle = await fetchTask(id);
    const updatedTasks = {...taskToToggle, reminder: !taskToToggle.reminder}
    const response = await fetch(`http://localhost:4000/tasks/${id}`,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedTasks)
    });

    const data = await response.json();
    console.log("PUT UPDATE data");
    console.log(data);

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:data.reminder} : task))
  }
  const addTask = async (task) => {
    const response = await fetch('http://localhost:4000/tasks', {
      method: 'POST', 
      headers: {'Content-Type':'application/json'}, 
      body: JSON.stringify(task),
    })
    const data = await response.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000 + 1);
    // console.log(task);
    // console.log(id);
    // const newTask = {id, ...task};
    // setTasks([...tasks, newTask]);
  }
  const deleteTask = async (id) => {
    console.log('delete task log', id);
    await fetch(`http://localhost:4000/tasks/${id}`, {method: 'DELETE'});
    setTasks(tasks.filter((task)=> task.id !== id));
  }
  const name = 'Samer';
  const x = 'false'; //we can write js inside our div easily
  return (
    <Router>
      <div className="container">
        <h1> Hello From App.js React</h1>
        <p>hello para {name} {1+1}</p> 
        <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} title = {1}  />

        <Routes>
          <Route path='/' element={
            <>
                {showAddTask&& <AddTask onAdd={addTask} />}
                {tasks.length > 0 ?( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ): (
                  'No tasks to show'
                  )}

            </>
          }/>
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

// //class way
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
