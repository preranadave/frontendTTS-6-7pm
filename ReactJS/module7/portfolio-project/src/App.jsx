import { useState } from 'react'
import "./scss/custom.scss"

import NavigationBar from './Components/User/NavigationBar';
import Header from './Components/User/Header';
import About from './Components/User/About';
import Portfolio from './Components/User/Portfolio'
import Contact from './Components/User/Contact';
import Footer from './Components/User/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='userApp'>
    <NavigationBar></NavigationBar>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
