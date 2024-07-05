import React from 'react'
import ReactDOM from 'react-dom/client'
import NameApp from './NameApp'
import CounterApp from './CounterApp'
import UpdateData from './UpdateData'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <NameApp /> */}
    {/* <CounterApp></CounterApp> */}
    <UpdateData></UpdateData>
  </React.StrictMode>,
)
