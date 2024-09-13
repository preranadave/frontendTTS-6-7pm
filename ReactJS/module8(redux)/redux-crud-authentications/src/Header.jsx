import React from 'react'
import { Container,Row } from 'react-bootstrap'

export default function Header() {
  return (
    
    <Container fluid  className='shadow p-5'>
        <Row>
            <div className='col-md-3'>Call Us <span className='bi bi-telephone'></span> (+91)9998003879</div>
            <div className='col-md-6'>
                <input type='text' placeholder='search anything else...' className='form-control' />
            </div>
            <div className='col-md-3'>
                <span className='bi bi-facebook ms-5 fs-4'></span>
                <span className='bi bi-twitter fs-4'></span>
                <span className='bi bi-whatsapp fs-4'></span>
                <span className='bi bi-youtube fs-4'></span>
            </div>
        </Row>
    </Container>
  
  )
}
