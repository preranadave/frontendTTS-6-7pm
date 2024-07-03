import React from 'react'
import ReactDOM from 'react-dom/client'

import Layout from './Layout.jsx'
import ApplyNow from './Components/Apply-Now.jsx'
import Menu from './Components/Menu.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout></Layout>}>

        </Route>

        <Route path='/apply-now' element={<ApplyNow></ApplyNow>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
