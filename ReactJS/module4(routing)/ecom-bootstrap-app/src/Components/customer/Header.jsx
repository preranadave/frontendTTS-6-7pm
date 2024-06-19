import React from "react";
import ReactDOM from "react-dom/client"
import { Row, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <Container className="p-3">
                <Row>
                    <div className="col-md-3 p-3">
                        <strong>
                            <span className="bi bi-telephone"></span>6545645465461
                        </strong>
                    </div>

                    <div className="col-md-6 p-2">
                        <div className="input-group">
                            <input className="form-control" type="text" name="search" placeholder="Search here..."></input>
                            <button type="button" className="btn btn-md btn-dark"><span className="bi bi-search" ></span></button>
                        </div>
                    </div>

                    <div className="col-md-3 d-flex justify-content-end p-2">

                        <Link to="/Register"><Button className="btn btn-md btn-dark">Account<span className="bi bi-person"></span></Button></Link>
                        <span className="bi bi-facebook fs-2 ms-5"></span>
                        
                        <span className="bi bi-twitter fs-2 ms-2"></span>
                        
                        <span className="bi bi-youtube fs-2 ms-2"></span>
                        
                        <span className="bi bi-instagram fs-2 ms-2"></span>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Header