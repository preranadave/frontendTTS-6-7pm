import React from 'react'
import Header from '../Header'
import NavbarApp from '../NavbarApp'
export default function Login() {
return (
<div>
<Header />
<NavbarApp />
<div className = "App w-50 mx-auto shadow p-5 mt-5">
<header className = "App-header">
<h2>Login Form</h2>
<hr />
<div className='form-group mt-2'>
    <input type='text' placeholder='Email *' className='form-control' />
</div>

<div className='form-group mt-2'>
    <input type='password' placeholder='Password *' className='form-control' />
</div>


<div className='form-group mt-2'>
    <input type='submit' placeholder='Email *' value="Login" className='btn btn-lg btn-dark text-white' />
</div>

</header>
</div>
</div>
)
}
