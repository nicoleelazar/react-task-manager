import React from 'react'
import TaskList from './TaskList'
import Form from './Form'
import Header from './Header'
import TaskListContextProvider from '../context/TaskListContext'

const App = () => {
  return (
    // wrap whole app with provider
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Form />
          <TaskList />

        </div>
      </div>


    </TaskListContextProvider>
  )
}

export default App
