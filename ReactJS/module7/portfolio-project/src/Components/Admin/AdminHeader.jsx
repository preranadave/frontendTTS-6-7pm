import React from "react";
import { Container,Navbar,Nav,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function AdminHeader() {
  return (
    <header className="py-1 fourth-bg first-font" id="adminheader">
       
      <Container fluid className="mt-2 d-flex flex-row justify-content-end ">
    
        <ul className="list-unstyled d-flex flex-row flex-sm-row">
          <li className="mx-0 mx-sm-3"><a href="/"><span className="bi bi-bell-fill fs-3 first-font"></span></a></li>
          <li className="mx-0 mx-sm-3"><a href="/"><span className="bi bi-person-plus-fill fs-3 first-font"></span></a></li>
          <li className="mx-0 mx-sm-3"><a href="/"><span className="bi bi-inbox-fill fs-3 first-font"></span></a></li>
        
        </ul>
      </Container>
    </header>
  );
}

export default AdminHeader;
