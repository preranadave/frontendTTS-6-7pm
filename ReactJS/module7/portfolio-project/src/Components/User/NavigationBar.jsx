import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../scss/custom.scss';
function NavigationBar() {
  return (
    <div>
      <Navbar
        expand="lg"
        className="primary-bg fixed-top z-1 p-3"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="" className="fs-4">
            Prernaa<span className="text-dark">Dave</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 d-flex justify-content-end">
            <Nav.Item>  <Link to={"/"} className="nav-link text-white">Home</Link></Nav.Item>
            <Nav.Item>  <Link to={"/"} className="nav-link text-white">About</Link></Nav.Item>
            <Nav.Item>  <Link to={"/"} className="nav-link text-white">Projects</Link></Nav.Item>
            <Nav.Item>  <Link to={"/"} className="nav-link text-white">Contact</Link></Nav.Item>
          
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
