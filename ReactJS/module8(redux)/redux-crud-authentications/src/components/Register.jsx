import React from 'react'
import Header from '../Header'
import NavbarApp from '../NavbarApp'
export default function Register() {
return (
<div>
<Header />
<NavbarApp />
<div className = "App w-50 mx-auto shadow p-5 mt-5">
<header className = "App-header">
<h2>Register Form</h2>
<hr />
<div className='form-group mt-2'>
    <input type='text' placeholder='Email *' className='form-control' />
</div>

<div className='form-group mt-2'>
    <input type='password' placeholder='Password *' className='form-control' />
</div>


<div className='form-group mt-2'>
    <input type='submit' placeholder='Email *' className='btn btn-lg btn-dark text-white' value="Register" />
</div>

</header>
</div>

</div>
)
}
