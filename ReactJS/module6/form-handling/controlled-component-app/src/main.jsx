import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import FormHandleExample from './components/FormHandleExample'
import EmployeeForm from './components/EmployeeForm'
import MultipleFieldForm from './components/MultipleFieldForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <EmployeeForm /> */}
    {/* <FormHandleExample></FormHandleExample> */}
    <MultipleFieldForm></MultipleFieldForm>
  </React.StrictMode>,
)
