import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  
  return (
    <>
      <TodoInput />
      <TodoList/>
    </>
  )
}

export default App
