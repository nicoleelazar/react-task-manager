import React from 'react'
import { TaskListContext } from '../context/TaskListContext'


const Task = ({ task }) => {
    return (
        < li className="list-item" >

            <div>{task.title}</div>
            <div >
                <button className="edit-btn" ><i className="fas fa-trash-alt"></i></button>
                <button className="edit-btn"><i className="fas fa-pencil-alt"></i></button>
            </div>
        </li>
    )
}

export default Task
