import React, { useState } from 'react'

function FormHandleExample() {
    const [username,SetName]=useState("");
  return (
    <div>
        
        Enter Your Name
        <input type="text" value={username} onChange={(e)=>SetName(e.target.value)}/>
        <label>{username}</label>
    </div>
  )
}

export default FormHandleExample