import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
function ContactForm() {
  return (
    <div>
      <form
        action=""
        className="bg-light text-dark p-5 rounded rounded-4 shadow"
      >
        <div className="row">
          <Form.Group className="mb-3 col-lg-6" controlId="firstName">
            <Form.Label className="w-100 text-start text-uppercase">
              First Name
            </Form.Label>
            <input
              type="text"
              name="firstname"
              value={""}
              className="form-control"
            ></input>
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="lastname">
            <Form.Label className="w-100 text-start text-uppercase">
              Last Name
            </Form.Label>
            <input
              type="text"
              name="lastname"
              value={""}
              className="form-control"
            ></input>
          </Form.Group>
        </div>
        <div className="row">
          <Form.Group className="mb-3" controlId="emailid">
            <Form.Label className="w-100 text-start text-uppercase">
              Email
            </Form.Label>
            <input
              type="email"
              name="email"
              value={""}
              className="form-control"
            ></input>
          </Form.Group>
        </div>
        <div className="row">
          <Form.Group className="mb-3" controlId="message">
            <Form.Label className="w-100 text-start text-uppercase">
              message
            </Form.Label>
            <textarea
             
              name="message"
              value={""}
              className="form-control"
              rows={3}
            ></textarea>
          </Form.Group>
        </div>
        <button type="submit" className="primary-bg px-2 py-1 rounded text-white">Contact</button>
      </form>
    </div>
  );
}

export default ContactForm;
