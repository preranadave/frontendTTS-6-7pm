import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
        <Container className="mt-5 shadow p-3">
        <h1>Page Can't Be Found</h1>
        <Link to="/"> <button type="button" className="btn btn-lg btn-dark px-3 text-white my-3 ">
          Go Back To Home
        </button></Link>
        </Container>
     
    </div>
  );
}

export default PageNotFound;
