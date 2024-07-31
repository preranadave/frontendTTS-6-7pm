import React from 'react';
import { Container,Row} from 'react-bootstrap';

export default function AdminFooter() {
  return (
    <div>
    <Container fluid className='p-3 shadow admin-footer bg-secondary text-white'>
    <p className='text-center'>Copyright @ 2023 All right reserved certified company</p>
    </Container>
    </div>
  )
}