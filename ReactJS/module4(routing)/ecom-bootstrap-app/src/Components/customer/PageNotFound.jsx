import React from "react";
import ReactDOM from "react-dom/client"
import { Row, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import notfound from "../../assets/images/404.gif"

function PageNotFound() {
    return (
        <>
          <Header />
          <Navbar />
         

            <img src={notfound} className="card-img-top" alt="..." style={{ height: "600px" }}/>
        
        </>
    )
}
export default PageNotFound