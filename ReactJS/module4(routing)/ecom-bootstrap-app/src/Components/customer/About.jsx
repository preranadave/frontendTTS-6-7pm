import React from "react";
import ReactDOM from "react-dom/client"
import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import Navbar from "./Navbar";
import aboutus from "../../assets/images/about-us.png"

function AboutUs() {
    return (
        <>
            <Header />
            <Navbar />
            <Container className="mt-5 p-2">
                <Row>

                    <div className="col-md-5 mt-5 p-4 ms-2">
                        <h1 className="mt-2">About Us</h1>
                        <p className="mt-3 lh-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ducimus vel magnam fuga error quo earum sequi reprehenderit minima modi, amet nostrum. Corporis, tempore illum. Voluptas esse neque libero sunt!</p>
                        <button type="submit" className="btn btn-dark btn-lg mb-3 w-50 pb-3 pt-3">Learn More</button>
                    </div>
                    <div className="col-md-6 p-4 mt-5 ms-2">
                        <img src={aboutus}></img>

                    </div>
                </Row>
            </Container>

        </>
    )
}
export default AboutUs