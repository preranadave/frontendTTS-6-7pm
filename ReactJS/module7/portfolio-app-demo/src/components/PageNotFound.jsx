import React from 'react';
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function PageNotFound() {
  return (
    <div>
      
    <Container className='p-5 bg-light'>
    <h1 className='text-center'>Page Not Found</h1>
    <p className='text-center'><Link to='/'><button  type='button' className='text-center mx-auto btn btn-lg btn-primary'>Go to Home </button></Link></p>
    </Container>
     
    </div>
  )
}