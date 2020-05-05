import React from 'react'
import TaskList from './TaskList'
import TaskListContextProvider from '../context/TaskListContext'

const App = () => {
  return (
    // wrap whole app with provider
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <TaskList />

        </div>
      </div>


    </TaskListContextProvider>
  )
}

export default App
