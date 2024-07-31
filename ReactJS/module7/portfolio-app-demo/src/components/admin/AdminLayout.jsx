import React from 'react';
import { Container,Row} from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminDashboard from './AdminDashboard';

import AdminFooter from './AdminFooter';
export default function AdminLayout() {
  return (
    <div>
    <AdminHeader />
    <Container fluid className="m-0 p-0">
    <Row>
    <div className='col-md-3 bg-secondary'>
    <AdminSidebar />
    </div>
    <div className='col-md-8'>
    <AdminDashboard />
    </div>
    </Row>
    </Container>
    <AdminFooter />
    
    </div>
  )
}