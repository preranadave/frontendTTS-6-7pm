import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/customer/Header";
import Navbar from "./Components/customer/Navbar";
import Content from "./Components/customer/Content";

function Layout() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <Content></Content>
        </>
    )
}
export default Layout