import React from 'react'
import ReactDOM from 'react-dom/client'



import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import BootstrapApp from './BootstrapApp.jsx' 
import Header from './Header.jsx'
import './assets/css/style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BootstrapApp /> */}
    <Header></Header>
  </React.StrictMode>,
)
