import React from "react";
import ReactDOM from "react-dom/client"
import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import Navbar from "./Navbar";
import signupimg from "../../assets/images/register.gif"
function Pricing() {
    return (
        <>
            <Header />
            <Navbar />
            <Container className="mt-5 d-flex">
               
                <Row className="justify-content-center mb-5">
                <h1 className="text-center mb-3">Our Pricing</h1>
                    <div className="col-md-3 ms-5 p-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title bg-dark rounded rounded-5 text-white p-2 text-center">Regular</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi ut eveniet rerum sed reprehenderit atque suscipit aliquid, impedit, hic nemo! Commodi rerum provident ab quasi nostrum quam omnis dignissimos.</p>
                                <h1>Rs.-25000</h1>
                                <ul className="navbar-nav lh-lg">
                                    <li><span className="bi bi-check"></span>100 Orders permonth</li>
                                    <li><span className="bi bi-check"></span>Basic Route Optimization</li>
                                    
                                    <li><span className="bi bi-check"></span>Quick delivery</li>
                                    
                                    <li><span className="bi bi-check"></span>Easy payment</li>
                                </ul>
                                <a href="#" className="btn btn-lg rounded rounded-3 w-75 border border-2 border-black ms-4 mt-4">
                                  Get started
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3 ms-5 p-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title bg-dark rounded rounded-5 text-white p-2 text-center">Regular</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi ut eveniet rerum sed reprehenderit atque suscipit aliquid, impedit, hic nemo! Commodi rerum provident ab quasi nostrum quam omnis dignissimos.</p>
                                <h1>Rs.-25000</h1>
                                <ul className="navbar-nav lh-lg">
                                    <li><span className="bi bi-check"></span>100 Orders permonth</li>
                                    <li><span className="bi bi-check"></span>Basic Route Optimization</li>
                                    
                                    <li><span className="bi bi-check"></span>Quick delivery</li>
                                    
                                    <li><span className="bi bi-check"></span>Easy payment</li>
                                </ul>
                                <a href="#" className="btn btn-lg rounded rounded-3 w-75 border border-2 border-black ms-4 mt-4">
                                  Get started
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3  ms-5 p-2">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title bg-dark rounded rounded-5 text-white p-2 text-center">Regular</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi ut eveniet rerum sed reprehenderit atque suscipit aliquid, impedit, hic nemo! Commodi rerum provident ab quasi nostrum quam omnis dignissimos.</p>
                                <h1>Rs.-25000</h1>
                                <ul className="navbar-nav lh-lg">
                                    <li><span className="bi bi-check"></span>100 Orders permonth</li>
                                    <li><span className="bi bi-check"></span>Basic Route Optimization</li>
                                    
                                    <li><span className="bi bi-check"></span>Quick delivery</li>
                                    
                                    <li><span className="bi bi-check"></span>Easy payment</li>
                                </ul>
                                <a href="#" className="btn btn-lg rounded rounded-3 w-75 border border-2 border-black ms-4 mt-4">
                                  Get started
                                </a>
                            </div>
                        </div>

                    </div>
                  
               


                </Row>
            </Container>

        </>
    )
}
export default Pricing