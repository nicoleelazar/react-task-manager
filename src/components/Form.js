import React, { useContext, useState } from 'react'
import { TaskListContext } from '../context/TaskListContext'


const Form = () => {
    //deconstruct context
    const { addTask, clearAll } = useContext(TaskListContext)

    const [userInput, setUserInput] = useState("")

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (userInput !== "") {
            addTask(userInput)
        }

        //clear input field
        setUserInput("")
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className="input-field" type="text" value={userInput} onChange={handleChange} placeholder="Write your task here..." />
            <div>
                <button className="button" type="submit">Add Task</button>
                <button className="button" onClick={clearAll} >Clear All Tasks</button>
            </div>

        </form>
    )
}

export default Form
