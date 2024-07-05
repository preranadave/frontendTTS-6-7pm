import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EmployeeData from './Employee-List.jsx'
import EmployeeListArray from './EmployeeListArray.jsx'
import CarDisplay from './CarList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
     <CarDisplay/>
  </React.StrictMode>
)
