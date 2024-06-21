import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Content from './Content.jsx'
import Header from './Heade.jsx'
import "bootstrap-icons/font/bootstrap-icons.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Content />
  </React.StrictMode>,
)
