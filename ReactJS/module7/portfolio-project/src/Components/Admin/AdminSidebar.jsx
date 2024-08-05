import React from "react";
import { Container,Navbar,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminProfile from "../../assets/images/adminprofile.jpeg"
function AdminSidebar() {
  return (
    <aside className="third-bg first-font vh-100">
      
      <div className="" id="adminsidebar">
        
        
        <Container className="d-flex flex-column justify-content-center">
        <Navbar.Brand href="" className="fs-2 ms-2 my-3">
          <Link to="/admin-dashboard" className="text-decoration-none first-font"> Admin Dashboard</Link>
          </Navbar.Brand>
         <img src={AdminProfile} className="rounded-circle w-50 d-flex mx-auto"></img>
         
            <ul className="list-unstyled d-flex flex-column first-font ms-5 fs-4 text-start">
            <li className="my-4">  <Link to={"/manage-abstract"} className="nav-link">Manage Abstract</Link></li>
       
            <li  className="my-4">  <Link to={"/add-skill"} className="nav-link">Manage Skill</Link></li>
            <li  className="my-4">  <Link to={"/add-projects"} className="nav-link">Manage Projects</Link></li>
            <li  className="my-4">  <Link to={"/add-clients"} className="nav-link">Manage Clients</Link></li>
          
          
            </ul>
            
          </Container>
      
      </div>
    </aside>
  );
}

export default AdminSidebar;
