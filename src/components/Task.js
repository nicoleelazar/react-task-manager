import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'


const Task = ({ task }) => {
    const { removeTask } = useContext(TaskListContext)

    return (
        < li className="list-item" >

            <div>{task.title}</div>
            <div >
                <button className="edit-btn" onClick={() => removeTask(task.id)} ><i className="fas fa-trash-alt"></i></button>
                <button className="edit-btn"><i className="fas fa-pencil-alt"></i></button>
            </div>
        </li>
    )
}

export default Task
