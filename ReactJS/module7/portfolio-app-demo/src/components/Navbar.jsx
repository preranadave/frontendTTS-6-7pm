import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import { Nav} from 'react-bootstrap';
export default function Navbar() {
  return (
    <div>
    <Nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div className="container">
        <Link className="navbar-brand" to="#page-top">Nandini React Portfolio</Link>
        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">Portfolio</Link></li>
                <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/about-us">About</Link></li>
                <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/contact-with-us">Contact</Link></li>
            </ul>
        </div>
    </div>
</Nav>
<Outlet />
    </div>
  )
}