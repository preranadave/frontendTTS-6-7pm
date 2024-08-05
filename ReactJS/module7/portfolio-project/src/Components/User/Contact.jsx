import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="bg-dark text-light py-3" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-center">
            <h2 className="mb-5 text-center">Let's Talk</h2>
            <p>prern@gmail.com</p>
            <p>150 ring road</p>
            <p>6545456456456</p>
            <hr className="w-50 mx-auto" />
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <a href="/">
                  <span className="bi bi-facebook m-2 fs-2 primary-font"></span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="bi bi-instagram m-2 fs-2 primary-font"></span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="bi bi-linkedin m-2 fs-2 primary-font"></span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="bi bi-youtube m-2 fs-2 primary-font"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center mt-5 mt-md-0">
<ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
