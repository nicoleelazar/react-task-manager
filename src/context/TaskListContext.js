import React, { createContext, useState } from 'react';
import TaskList from '../components/TaskList';

// create & export new context
export const TaskListContext = createContext();

// set initial state here
const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { task: 'Read book', id: 1 },
        { task: 'Grocery Shopping', id: 2 },
        { task: 'write some code', id: 3 }
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