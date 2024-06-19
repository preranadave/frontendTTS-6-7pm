import React from "react";
import ReactDOM from "react-dom/client"
import { Nav, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <Nav className="navbar navbar-expand-lg bg-dark d-flex">
                <NavbarBrand className="text-white fs-3 ms-5 me-auto p-2">FLipkart</NavbarBrand>
                <ul className="navbar-nav text-white me-5">
                    <li className="nav-item p-2 ms-5"><Link to={"/"}  className="nav-link text-white"> Home</Link></li>

                    <li className="nav-item p-2 ms-5"><Link to={"/about-us"} className="nav-link text-white"> About</Link></li>


                    <li className="nav-item p-2 ms-5"><Link to={"/products"} className="nav-link text-white"> Products</Link></li>
                    <li className="nav-item p-2 ms-5"><Link to={"/pricing"} className="nav-link text-white"> Pricing</Link></li>
                    <li className="nav-item p-2 ms-5"><Link to={"/blogs"} className="nav-link text-white"> Blogs</Link></li>
                    <li className="nav-item p-2 ms-5"><Link to={"/contact-us"} className="nav-link text-white"> Conatact Us</Link></li>






                </ul>
            </Nav>
        </>
    )
}
export default Navbar