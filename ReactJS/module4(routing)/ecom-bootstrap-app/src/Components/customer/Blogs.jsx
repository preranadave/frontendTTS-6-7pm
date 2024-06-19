import React from "react";
import ReactDOM from "react-dom/client"
import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import Navbar from "./Navbar";
import signupimg from "../../assets/images/register.gif"
function Blogs() {
    return (
        <>
            <Header />
            <Navbar />
            <Container className="mt-5 p-2">
                <Row>
                    <div className="col-md-3 p-4 shadow">
                        <ul className="navbar-nav">
                            <h5 className="text-center bg-dark p-2 text-white">Why Register?</h5>
                            <li className="nav-item p-2 ms-5"><a> Customer Support</a></li>

                            <li className="nav-item p-2 ms-5"><a> Free Return</a></li>


                            <img src={signupimg} className="w-75"></img>

                        </ul>
                    </div>

                    <div className="col-md-8 p-4 shadow ms-2">

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                               Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                            />
                        </div>
                        <button type="submit" class="btn btn-dark mb-3">Submit</button>
                    </div>
                </Row>
            </Container>

        </>
    )
}
export default Blogs