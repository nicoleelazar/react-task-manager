import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import Task from './Task'

const TaskList = () => {
    //desructure state from TaskListContext.js
    const { tasks } = useContext(TaskListContext)
    return (
        <div>
            <ul>
                {tasks.map(item => {
                    return <Task key={item.id} />
                })}
            </ul>
        </div>
    )
}

export default TaskList
