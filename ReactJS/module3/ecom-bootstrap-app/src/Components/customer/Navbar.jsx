import React from "react";
import ReactDOM from "react-dom/client"
import { Nav, NavbarBrand } from "react-bootstrap";
function Navbar() {
    return (
        <>
             <Nav className="navbar navbar-expand-lg bg-dark d-flex">
                <NavbarBrand className="text-white fs-3 ms-5 me-auto p-2">FLipkart</NavbarBrand>
                <ul className="navbar-nav text-white me-5">
                <li className="nav-item p-2 ms-5"><a> Home</a></li>
                            <li className="nav-item p-2 ms-5"><a> About</a></li>
                          
                            <li className="nav-item p-2 ms-5"><a> Shop now</a></li>
                            <li className="nav-item p-2 ms-5"><a> Pricing</a></li>
                            <li className="nav-item p-2 ms-5"><a> Blogs</a></li>
                            <li className="nav-item p-2 ms-5"><a> Contact Us</a></li>

                   
                    
                </ul>
            </Nav>
        </>
    )
}
export default Navbar