import React from 'react'
import { Link } from 'react-router-dom'
function ViewMyWorkButton() {
  return (
    <div>

        <Link to=""><button type="button" className="rounded border-0 outline-0 primary-bg p-1 px-3 py-2 text-white"> View My Work</button></Link>
    </div>
  )
}

export default ViewMyWorkButton