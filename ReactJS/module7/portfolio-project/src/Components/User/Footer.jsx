import React from "react";
//import { Link } from "react-router-dom";

import { HashLink as Link } from 'react-router-hash-link';
function Footer() {
  return (
    <div className="primary-bg text-light py-3">
      <div className="container">
        {" "}
        <ul className="list-unstyled d-flex flex-column flex-sm-row justify-content-center">
          <li className="mx-0 mx-sm-3 my-2 my-sm-0"><Link to={"/#header"} className="nav-link text-white">Home</Link></li>
          <li className="mx-0 mx-sm-3 my-2 my-sm-0"><Link to={"/#about"} className="nav-link text-white">About</Link></li>
          <li className="mx-0 mx-sm-3 my-2 my-sm-0"><Link to={"/#project"} className="nav-link text-white">Projects</Link></li>
          <li className="mx-0 mx-sm-3 my-2 my-sm-0"><Link to={"/#contact"} className="nav-link text-white">Contact</Link></li>
        </ul>
        <hr className="w-50 mx-auto"/>
        <p className="mb-0">Copyright <span className="bi bi-c-circle mx-1"></span>Prerna Dave</p>
      </div>
    </div>
  );
}

export default Footer;
