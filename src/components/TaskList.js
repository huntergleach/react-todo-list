import React, { useState } from 'react'
import TaskForm from './TaskForm.js';
import Task from './Task.js';

const TaskList = () => {
    const [ tasks, setTasks ] = useState([])

    const addTask = ( task ) => {
       const newTasks = [ task, ...tasks ]
       setTasks(newTasks)
    }

    const updateTask = (taskId, newValue) => {
        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)))
    }


    const removeTask = id => {
        const removeArr = [...tasks.filter(task => task.id !== id)]
        setTasks(removeArr);
    }

    const completeTask = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task
        })
        setTasks(updatedTasks);
    }

 
    return (
        <div>
            <h1>Task List</h1>

            <TaskForm onSubmit={ addTask }/> 
            
            <Task tasks={tasks} 
                  completeTask={ completeTask } 
                  removeTask={ removeTask }
                  updateTask={ updateTask }/>
        </div>
    )
}

export default TaskList;