import React, { createContext, useState } from 'react';
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


    return (
        //send the state in the value of the Provider
        <TaskListContext.Provider value={{ tasks }} >
            {/* Provider wraps all child components */}
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider