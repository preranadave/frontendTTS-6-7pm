import React from 'react'
import ReactDOM from 'react-dom/client'
import NameApp from './NameApp'
import CounterApp from './CounterApp'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <NameApp /> */}
    <CounterApp></CounterApp>
  </React.StrictMode>,
)
