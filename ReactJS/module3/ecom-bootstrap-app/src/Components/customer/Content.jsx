import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import ReactDOM from "react-dom/client"
import product1 from "../../assets/images/product1.webp"

function Content() {
    return (
        <>
            <Container className="mt-5 p-2">
                <Row>
                    <div className="col-md-4 shadow p-3">
                        <h5 className="text-center bg-dark p-2 text-white">Select Category</h5>
                        <ul className="navbar-nav">
                            <li className="nav-item p-2 ms-5"><a> Home</a></li>
                            <li className="nav-item p-2 ms-5"><a> About</a></li>
                            <li className="nav-item p-2 ms-5"><a> Our Services</a></li>
                            <li className="nav-item p-2 ms-5"><a> Shop now</a></li>
                            <li className="nav-item p-2 ms-5"><a> Pricing</a></li>
                            <li className="nav-item p-2 ms-5"><a> Blogs</a></li>


                        </ul>
                        <h5 className="text-center bg-dark p-2 text-white">offer zone</h5>
                        <Row className="mt-5 p-3">
                            <div className="col shadow">
                                <p className="text-center">

                                    <img src={product1} className="card-img-top w-25" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Producct1</h5>
                                        <p className="card-text">

                                        </p>
                                        <a href="#" className="btn btn-dark">
                                            Add To Cart
                                        </a>
                                    </div>

                                </p>
                            </div>
                        </Row>
                    </div>

                    <div className="col-md-7 ms-5 shadow p-3">
                        <h5 className="text-center bg-dark p-2 text-white">Hurry 50% off</h5>
                        <Row className="mt-5">
                            <div className="col-md-5 shadow ms-5 p-3">
                                <p className="text-center">

                                    <img src={product1} className="card-img-top w-50" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Producct1</h5>
                                        <p className="card-text">

                                        </p>
                                        <a href="#" className="btn btn-dark">
                                            Add To Cart
                                        </a>
                                    </div>

                                </p>
                            </div>

                            <div className="col-md-5 shadow ms-3 p-3">
                                <p className="text-center">

                                    <img src={product1} className="card-img-top w-50" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Producct1</h5>
                                        <p className="card-text">

                                        </p>
                                        <a href="#" className="btn btn-dark">
                                            Add To Cart
                                        </a>
                                    </div>

                                </p>
                            </div>


                        </Row>
                        <Row className="mt-3">
                            <div className="col-md-5 shadow ms-5 p-3">
                                <p className="text-center">

                                    <img src={product1} className="card-img-top w-50" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Producct1</h5>
                                        <p className="card-text">

                                        </p>
                                        <a href="#" className="btn btn-dark">
                                            Add To Cart
                                        </a>
                                    </div>

                                </p>
                            </div>

                            <div className="col-md-5 shadow ms-3    p-3">
                                <p className="text-center">

                                    <img src={product1} className="card-img-top w-50" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Producct1</h5>
                                        <p className="card-text">

                                        </p>
                                        <a href="#" className="btn btn-dark">
                                            Add To Cart
                                        </a>
                                    </div>

                                </p>
                            </div>


                        </Row>

                    </div>
                </Row>
            </Container>

        </>
    )
}
export default Content