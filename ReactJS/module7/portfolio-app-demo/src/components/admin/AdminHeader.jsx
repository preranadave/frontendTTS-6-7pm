import React from 'react';
import { Container,Row} from 'react-bootstrap';
export default function AdminHeader() {
  return (
    <div>
    <Container fluid className='m-0 p-0 bg-white shadow-lg border border-bottom-1 border-secondary'>
     <Row>
     <div className='col-md-3 bg-secondary p-4'>
     <h4 className='text-white'>Nandni Dashboard <i className='bi bi-grid-3x3-gap'></i></h4>
     </div>
     <div className='col-md-6 bg-white p-4'>
     <h4 className='text-dark'><i className='bi bi-gear ms-2'></i>&nbsp;Dashboard Admin Setting</h4>
     </div>
     <div className='col-md-3 bg-white p-4'>
     <span className="btn btn-white position-relative">
     <i className='bi bi-bell fs-4 text-dark'></i>
     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
       99+
       <span className="visually-hidden">unread messages</span>
     </span>
     </span>
     
     <span className="ms-4 btn btn-white position-relative">
     <i className='bi bi-inbox text-dark fs-4'></i>
     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
       99+
     <span className="visually-hidden">unread messages</span>
     </span>
     </span>
     <span className="ms-4 btn btn-white position-relative">
     <i className='bi bi-person-add text-dark fs-4'></i>
     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
       99+
     <span className="visually-hidden">unread messages</span>
     </span>
     </span>
     </div>
     </Row> 
    </Container>  
      
    </div>
  )
}