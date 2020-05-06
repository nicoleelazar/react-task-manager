import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import Task from './Task'

const TaskList = () => {
    //desructure state from TaskListContext.js
    const { tasks } = useContext(TaskListContext)
    return (
        <div className="main-list" >
            {tasks.length ?
                <ul>
                    {tasks.map(taskItem => {

                        return <Task key={taskItem.id} task={taskItem} />

                    })}
                </ul>
                :
                <div className="alert">You have no tasks</div>
            }



        </div>
    )
}

export default TaskList
