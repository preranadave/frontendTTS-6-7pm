import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarApp() {
  return (
    <div>
       <Nav className='navbar bg-dark text-white p-2'>
       <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Counter</Link></li>
        <li><Link to='/employee-list'>Employees</Link></li>
        <li className='ms-5'><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
 
       </ul>
       </Nav>
    </div>
  )
}
