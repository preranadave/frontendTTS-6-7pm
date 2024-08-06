import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//component import
import TopHeader from './TopHeader'
import Header from './Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopHeader></TopHeader>
    <Header></Header>
    
    </>
  )
}

export default App
