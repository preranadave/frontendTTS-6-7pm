import { useState } from 'react'
import "./scss/custom.scss"

import NavigationBar from './Components/User/NavigationBar';
import Header from './Components/User/Header';
import About from './Components/User/About';
import Portfolio from './Components/User/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavigationBar></NavigationBar>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
    </>
  )
}

export default App
