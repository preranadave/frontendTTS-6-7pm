import React from 'react'
import AdminHeader from './AdminHeader'
import { Container,Row } from 'react-bootstrap'
import AdminSidebar from './AdminSidebar'
import AdminHome from './AdminHome'
import "../../scss/custom.scss";
function AdminDashboard() {
  return (
    <div id='adminApp'>
       
        <Container fluid className='m-0 p-0'>
            <Row>
                <div className='col-md-3 m-0 p-0'>
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className='col-md-9 m-0 p-0'>
                <AdminHeader></AdminHeader>
                    <AdminHome></AdminHome>
                </div>
            </Row>
        </Container>


    </div>
  )
}

export default AdminDashboard