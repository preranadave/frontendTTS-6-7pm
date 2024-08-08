import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//component import
import TopHeader from './TopHeader'
import Header from './Header'
import HeadNavigation from './HeadNavigation'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopHeader></TopHeader>
    <Header></Header>
    <HeadNavigation></HeadNavigation>
    
    </>
  )
}

export default App
