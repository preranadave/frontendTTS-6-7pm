import React from 'react'
import ReactDOM from 'react-dom/client'
import Inline from './Inline'
import Internal from './Internal'
import External from './external'
import "./assets/style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Internal />
  </React.StrictMode>,
)
