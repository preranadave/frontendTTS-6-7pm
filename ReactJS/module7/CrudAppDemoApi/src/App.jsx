import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Edit from './Components/Edit'
import PageNotFound from './Components/PageNotFound'
import DeleteData from './Components/DeleteData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}></Route>
      
      <Route path='deletedata/:id' element={<DeleteData/>}></Route>
      <Route path='adddata' element={<Create></Create>}></Route>
      <Route path='editdata/:id' element={<Edit></Edit>}></Route>
      <Route path="*" element={<PageNotFound />} ></Route>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
