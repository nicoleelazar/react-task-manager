import React from 'react'

const Task = () => {
    return (
        <li>
            <span>Task Title</span>
            <div>
                <button><i className="fas fa-trash-alt"></i></button>
                <button><i className="fas fa-pencil-alt"></i></button>
            </div>
        </li>
    )
}

export default Task
