import React from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("demo"));
root.render(
    <>
        <h1 style={{ color: "red" }}>hi</h1>
        <h1>Addition of number:{10 + 20}</h1>
        
        <h1>Sub of number:{10 - 20}</h1>
        
        <h1>multi  of number:{10 * 20}</h1>
        
        <h1>div of number:{10 / 20}</h1>
    </>

)