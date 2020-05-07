import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

// create & export new context
export const TaskListContext = createContext();

// set initial state here
const TaskListContextProvider = (props) => {
    // Moved to local storage 
    // const [tasks, setTasks] = useState([
    //     { title: 'Read book', id: 1 },
    //     { title: 'Grocery Shopping', id: 2 },
    //     { title: 'write some code', id: 3 }
    // ])


    // define initial value of state where array can be stored in local storage
    const initialState = JSON.parse
        //if no tasks in storage then set to empty array
        (localStorage.getItem('tasks')) || []


    const [tasks, setTasks] = useState(initialState)
    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))

    }, [tasks])

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


    const findItem = (id) => {
        //find item to edit
        let currentItem = tasks.find(task => task.id === id)

        //make editable
        setEditItem(currentItem)
    }

    // replace current array with new edited one
    const editTask = (title, id) => {
        let editedTask = tasks.map(task => (task.id === id ? { title, id } : task))

        setTasks(editedTask)
        setEditItem(null)
    }


    return (
        //send the state in the value of the Provider
        <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearAll, findItem, editTask, editItem }} >
            {/* Provider wraps all child components */}
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider