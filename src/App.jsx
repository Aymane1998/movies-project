import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Aymane"

  return (
    <div className="App">
      <h2>Hello {name}</h2>
    </div>
  )
}

export default App
