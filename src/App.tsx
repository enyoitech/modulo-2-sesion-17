import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Task } from './task/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Task/>
    </div>
  )
}

export default App
