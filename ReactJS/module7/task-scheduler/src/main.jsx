import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import DeleteTask from './DeleteTask.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>

    <Route path='/' index element={<App></App>}></Route>
    
    
    <Route path='/deletetask/:id' index element={<DeleteTask></DeleteTask>}></Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
