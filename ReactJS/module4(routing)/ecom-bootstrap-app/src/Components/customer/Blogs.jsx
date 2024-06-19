import React from "react";
import ReactDOM from "react-dom/client"
import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import Navbar from "./Navbar";
import popular1 from "../../assets/images/Popular1.jpg"

import popular2 from "../../assets/images/popular2.jpg"

import popular3 from "../../assets/images/Popular3.jpg"

import street from "../../assets/images/steert.jpg"

import heritage from "../../assets/images/heritage.jpg"

import abstract from "../../assets/images/abstract.jpg"

function Blogs() {
    return (
        <>
            <Header />
            <Navbar />
            <Container className="mt-5 p-2">
                <Row>
                    <div className="col-md-3 p-4 shadow h-75">
                        <h5 className="text-center bg-dark p-2 text-white">Popular Posts</h5>
                        <div className="card text-white" >
                            <img className="card-img-top rounded rounded-1" src={popular1} alt="Card image" />
                            <div className="card-img-overlay bottom-0 mt-5">
                                <h4 className="card-title">Flowers of winter</h4>

                                <a href="#" className="btn btn-dark">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="card text-white" >
                            <img className="card-img-top rounded rounded-1" src={popular2} alt="Card image" />
                            <div className="card-img-overlay bottom-0 mt-5">
                                <h4 className="card-title">Flowers of winter</h4>

                                <a href="#" className="btn btn-dark">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="card text-white" >
                            <img className="card-img-top rounded rounded-1" src={popular3} alt="Card image" />
                            <div className="card-img-overlay bottom-0 mt-5">
                                <h4 className="card-title">Flowers of winter</h4>

                                <a href="#" className="btn btn-dark">
                                    Read More
                                </a>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-8 p-4 ms-2">
                        <div className="card">
                            <div className="card-body">
                                
                                <h5 className="card-title">Heritage Photography</h5>
                                
                                <h6 className="card-title">Title description, Sep 2, 2017</h6>
                                <img src={heritage} className="card-img-bottom" alt="..." />
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                               
                            </div>
                        
                           
                        </div>
                        <div className="card mt-5">
                            <div className="card-body">
                                
                                <h5 className="card-title">Street Photography</h5>
                                
                                <h6 className="card-title">Title description, Sep 2, 2017</h6>
                                <img src={street} className="card-img-bottom" alt="..." />
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                               
                            </div>
                        
                           
                        </div>
                    </div>
                </Row>
            </Container>

        </>
    )
}
export default Blogs