import './App.css';
import React from 'react';
import TaskList from './components/TaskList.js';

function App() {

  return (
    <div className="App">
        <h1>Todo App</h1>
        <TaskList/>
    </div>
  );
}

export default App;
