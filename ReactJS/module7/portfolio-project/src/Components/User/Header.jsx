import React from "react";
import { Row } from "react-bootstrap";
import ViewMyWorkButton from "./ViewMyWorkButton";
import HeaderImage from "../../assets/images/profile2.jpeg";
function Header() {
  return (
    <div>
      <header className="pt-5" id="header">
        <div className="container py-md-5">
          <Row>
            <div className="col-md-6 d-flex flex-column align-items-start mt-5 mt-md-0">
              <h3 className="text-secondary fw-bold lh-1 mt-3">Prerna Dave</h3>
              <h1 className="head-font text-uppercase text-start primary-font lh-2 mb-5">
                FrontEnd<br></br> Devloper
              </h1>
              <ViewMyWorkButton></ViewMyWorkButton>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end mt-md-0">
              <img
                src={HeaderImage}
                className="img-fluid w-75 rounded-circle shadow"
              ></img>
            </div>
          </Row>
        </div>
      </header>
    </div>
  );
}

export default Header;
