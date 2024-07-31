
import React from 'react';
import { Container,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function AdminSidebar() {
  return (
    <div>
      
    
      <ul className='sidebar-link'>
      <li className='mt-0'><Link to=""><img src='https://png.pngtree.com/png-vector/20230316/ourmid/pngtree-admin-and-customer-service-job-vacancies-vector-png-image_6650726.png' className='img-fluid circle-rounded w-75' alt='admin images' /></Link></li>
      <li><Link to='/admin-login/admin-dashboard'> Nandani Dashboard</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/add-abstract'> Add Abstract</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/add-skills'>skills Category</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/add-portfolio'> Add Portfolio</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/add-clients'> Add Clients</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/manage-contacts'> Manage Contacts</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/manage-reviews'> Manage reviews</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li className='mt-5'><Link to='#' className='btn btn-block bg-danger w-75'> Logout ?</Link></li>

  
      </ul>
  
     
    </div>
  )
}
