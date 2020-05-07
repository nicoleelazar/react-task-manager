import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'


const Form = () => {
    //deconstruct context
    const { addTask, clearAll, editItem, editTask } = useContext(TaskListContext)

    const [userInput, setUserInput] = useState("")

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (userInput !== "") {
            if (!editItem) {
                addTask(userInput)

                //clear input field
                setUserInput("")
            } else {
                editTask(userInput, editItem.id)
            }
        }



    }

    //only run hook if edit item is updated
    useEffect(() => {
        if (editItem) {
            setUserInput(editItem.title)
            // console.log(editItem)
        } else {
            setUserInput("")
        }
    }, [editItem])

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className="input-field" type="text" value={userInput} onChange={handleChange} placeholder="Write your task here..." />
            <div>
                <button className="button" type="submit">{editItem ? 'Edit Task' : 'Add Task'} </button>
                <button className="button" onClick={clearAll} >Clear All Tasks</button>
            </div>

        </form>
    )
}

export default Form
