import React from "react";
import ReactDOM from "react-dom/client"
import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import Navbar from "./Navbar";
import product1 from "../../assets/images/cloth-product1.webp"
import product2 from "../../assets/images/cloth-product2.webp"

import product3 from "../../assets/images/cloth-product3.webp"

import product4 from "../../assets/images/cloth-product4.webp"

import product5 from "../../assets/images/cloth-product5.jpg"

import product6 from "../../assets/images/cloth-product6.jpeg"
import signupimg from "../../assets/images/register.gif"
function Products() {
    return (
        <>
            <Header />
            <Navbar />
            <Container className="mt-5 p-2">
                <Row>
                    <div className="col-md-3 p-4 shadow h-75">
                        <h1 className="text-center bg-dark p-2 text-white">Filters</h1>
                        <h5 className="mt-5">Gender</h5>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Men
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Women
                            </label>
                        </div>
                        <h5 className="mt-5">Type</h5>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Top Wear
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Bottom Wear
                            </label>
                        </div>
                        <h5 className="mt-5">Colors</h5>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Black
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckChecked"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Red
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckChecked"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Blue
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckChecked"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Green
                            </label>
                        </div>
                        <h5 className="mt-5">Size</h5>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                S
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckChecked"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                M
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckChecked"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                L
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckChecked"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                               XL
                            </label>
                        </div>
                        <h5 className="mt-5">Price range</h5>
                        <span id="demo" className="MS-3">0 <label>RS</label></span>
                        <input type="range" class="form-range" min="0" max="5" id="customRange2"></input>
                    </div>

                    <div className="col-md-8 ms-2">

                        <Row className="">
                            <div className="col-md-5 shadow ms-5 p-5">


                                <p className="text-center">

                                    <img src={product2} className="card-img-top" alt="..." style={{ height: "300px" }}/>
                                    <div className="card-body">
                                        <h1>Tailored Jeans</h1>
                                        <p className="price">$19.99</p>
                                        <p>Some text about the jeans..</p>
                                        <p>
                                            <a href="#" className="btn btn-dark">
                                                Add To Cart
                                            </a>
                                        </p>
                                    </div>

                                </p>
                            </div>

                            <div className="col-md-5 shadow ms-3 p-3">
                                <p className="text-center">

                                    <img src={product1} className="card-img-top" alt="..." style={{ height: "330px" }}/>
                                    <div className="card-body">
                                        <h1>Tailored Jeans</h1>
                                        <p className="price">$19.99</p>
                                        <p>Some text about the jeans..</p>
                                        <p>
                                            <a href="#" className="btn btn-dark">
                                                Add To Cart
                                            </a>
                                        </p>
                                    </div>

                                </p>
                            </div>


                        </Row>
                        <Row className="mt-5">
                            <div className="col-md-5 shadow ms-5 p-5">


                                <p className="text-center">

                                    <img src={product4} className="card-img-top" alt="..." style={{ height: "300px" }}/>
                                    <div className="card-body">
                                        <h1>Tailored Jeans</h1>
                                        <p className="price">$19.99</p>
                                        <p>Some text about the jeans..</p>
                                        <p>
                                            <a href="#" className="btn btn-dark">
                                                Add To Cart
                                            </a>
                                        </p>
                                    </div>

                                </p>
                            </div>

                            <div className="col-md-5 shadow ms-3 p-3">
                                <p className="text-center">

                                    <img src={product3} className="card-img-top" alt="..." style={{ height: "330px" }}/>
                                    <div className="card-body">
                                        <h1>Tailored Jeans</h1>
                                        <p className="price">$19.99</p>
                                        <p>Some text about the jeans..</p>
                                        <p>
                                            <a href="#" className="btn btn-dark">
                                                Add To Cart
                                            </a>
                                        </p>
                                    </div>

                                </p>
                            </div>


                        </Row>
                        <Row className="mt-5">
                            <div className="col-md-5 shadow ms-5 p-5">


                                <p className="text-center">

                                    <img src={product5} className="card-img-top" alt="..." style={{ height: "300px" }}/>
                                    <div className="card-body">
                                        <h1>Tailored Jeans</h1>
                                        <p className="price">$19.99</p>
                                        <p>Some text about the jeans..</p>
                                        <p>
                                            <a href="#" className="btn btn-dark">
                                                Add To Cart
                                            </a>
                                        </p>
                                    </div>

                                </p>
                            </div>

                            <div className="col-md-5 shadow ms-3 p-3">
                                <p className="text-center">

                                    <img src={product6} className="card-img-top" alt="..." style={{ height: "330px" }}/>
                                    <div className="card-body">
                                        <h1>Tailored Jeans</h1>
                                        <p className="price">$19.99</p>
                                        <p>Some text about the jeans..</p>
                                        <p>
                                            <a href="#" className="btn btn-dark">
                                                Add To Cart
                                            </a>
                                        </p>
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
export default Products