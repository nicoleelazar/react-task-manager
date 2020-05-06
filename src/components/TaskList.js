import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import Task from './Task'

const TaskList = () => {
    //desructure state from TaskListContext.js
    const { tasks } = useContext(TaskListContext)
    return (
        <div >
            <ul>
                {tasks.map(taskItem => {
                    return <Task key={taskItem.id} task={taskItem} />
                })}
            </ul>
        </div>
    )
}

export default TaskList
