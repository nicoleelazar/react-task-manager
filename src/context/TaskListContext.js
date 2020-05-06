import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

// create & export new context
export const TaskListContext = createContext();

// set initial state here
const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { title: 'Read book', id: 1 },
        { title: 'Grocery Shopping', id: 2 },
        { title: 'write some code', id: 3 }
    ])

    const addTask = (title) => {
        setTasks([
            ...tasks,
            { title: title, id: uuidv4() }
        ])
    }

    const clearAll = () => {
        setTasks([])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(item => item.id !== id
        ))
    }


    return (
        //send the state in the value of the Provider
        <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearAll }} >
            {/* Provider wraps all child components */}
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider