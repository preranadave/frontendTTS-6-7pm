import React from 'react';
import { Container } from 'react-bootstrap';
export default function AdminLogin() {
  return (
    <div>
    <Container className='p-5 mt-5 col-md-5 mx-auto'>
    <h1 className='text-center'>Admin Login</h1>
    <h4 className='text-center'>Nandani Portfolio Admin</h4>
    <div className='form-group mt-3'>
    <input type='text' name='email' placeholder='Enter email *' className='form-control' />
    </div>
    
    <div className='form-group mt-3'>
    <input type='password' name='pwd' placeholder='Enter password *' className='form-control' />
    </div>

    
    <div className='form-group mt-3'>
   <b>By clicking terms & conditions <input type='checkbox' name='chk' value="terms" /> and terms services</b>
    </div>


    <div className='form-group mt-3'>
    <input type='submit' name='login' placeholder='Enter email *' className='btn btn-primary text-white btn-block w-100' />
    <h2 className='text-center mt-3 hr-line'><span>OR</span></h2>
    </div>


    
    <div className='form-group mt-3'>
    <button type='button'  className='btn bg-white border border-1 border-secondary text-danger btn-block w-100'><i className='bi bi-google text-danger'></i></button>
    </div>

    
    <div className='form-group mt-3'>
    <button type='button'  className='btn bg-white border border-1 border-secondary text-white btn-block w-100'><i className='bi bi-facebook text-primary'></i></button>
    </div>

    </Container>  
    </div>
  )
}