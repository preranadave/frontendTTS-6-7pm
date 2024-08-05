import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MnagaeTask from './MnagaeTask'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MnagaeTask></MnagaeTask>
    </>
  )
}

export default App
