import React from "react";
import { Container, Row, Nav, NavItem, NavbarBrand } from "react-bootstrap";
function Navbar() {
    return (
        <>


            <Nav className="navbar navbar-expand-lg bg-dark ">

                <NavbarBrand className="fs-3 text-white ms-5">MyAPP</NavbarBrand>
                <ul className="navbar-nav text-white d-flex justify-content-end">
                    <li className="nav-item p-3"><a> Home</a></li>
                    <li className="nav-item p-3"><a> Men</a></li>
                    <li className="nav-item  p-3"><a> Women</a></li>
                    <li className="nav-item  p-3"><a> Kids</a></li>
                    <li className="nav-item  p-3"><a> Electronics</a></li>
                    
                    <li className="nav-item  p-3"><a> Electronics</a></li>
                    
                    <li className="nav-item  p-3"><a> Electronics</a></li>
                 
                    
                </ul>
            </Nav>


        </>
    )

}
export default Navbar