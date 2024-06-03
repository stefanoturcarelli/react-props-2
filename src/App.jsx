import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User.jsx'
import Counter from './components/Counter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <User name="John Smith" age={35} email="john@smith.com" />
    <Counter />
    </>
  )
}

export default App
