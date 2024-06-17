import React from "react";
import ReactDOM from "react-dom/client";

import { Nav, NavItem, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <>
            <Nav className="navbar navbar-expand-lg bg-dark p-4 d-flex">
                <NavbarBrand className="text-white ms-2 me-auto">Flipkart App</NavbarBrand>
                <ul className="navbar-nav">
                    <li className="nav-item p-3"><Link to={"/"} className="nav-link text-white"> Home</Link></li>
                    <li className="nav-item p-3"><Link to={"/about-us"} className="nav-link text-white"> About</Link></li>
                    <li className="nav-item p-3"><Link to={"/our-services"} className="nav-link text-white"> Our Services</Link></li>
                    <li className="nav-item p-3"><Link to={"/gallary"} className="nav-link text-white"> Gallary</Link></li>
                    <li className="nav-item p-3"><Link to={"/account"} className="nav-link text-white"> Account</Link></li>
                    <li className="nav-item p-3"><Link to={"/cart"} className="nav-link text-white"> Cart(0)</Link></li>
                </ul>

            </Nav>
            <Outlet></Outlet>
        </>
    )
}
export default Layout