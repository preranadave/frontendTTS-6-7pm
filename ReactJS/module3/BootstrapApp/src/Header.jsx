import React from "react";
import { Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
function Header() {
    return (
        <>
            <Container fluid className="p-3 shadow">

                <Row>
                    <div className="col-md-3"><span className="bi bi-telephonr"></span><label>Contact Us:545611654654</label></div>
                    <div className="col-md-5">
                        <div className="input-group">
                            <input type="text" name="search" placeholder="search here" className="form-control"></input>
                            <button type="button" className="btn btn-sm btn-dark"><span className="bi bi-search"></span></button>
                        </div>

                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                     
                            <span className="bi bi-facebook fs-3 ms-2"></span>
                            <span className="bi bi-twitter fs-3 ms-3"></span>
                            <span className="bi bi-instagram fs-3 ms-3"></span>

                            <span className="bi bi-whatsapp fs-3 ms-3"></span>
                      
                    </div>
                </Row>
            </Container >
            
        </>
    )

}
export default Header