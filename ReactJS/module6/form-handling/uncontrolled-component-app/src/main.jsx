import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import UncontrolledApp from '../UncontrolledApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UncontrolledApp />
  </React.StrictMode>,
)
