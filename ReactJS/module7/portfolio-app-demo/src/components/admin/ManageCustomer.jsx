
import React from 'react';
import { Container,Row} from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
export default function ManageCustomer() {
  return (
    <div>
    <AdminHeader />
    <Container fluid className="m-0 p-0">
    <Row>
    <div className='col-md-3 bg-secondary'>
    <AdminSidebar />
    </div>
    <div className='col-md-8'>
<h4 className='text-dark mt-5'>&nbsp;Manage Customers</h4>
<hr className='border border-1 border-secondary w-50' />
  <table className="table table-responsive ms-3 mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
    
    </div>
    </Row>
    </Container>
    <AdminFooter />
    </div>
  )
}
