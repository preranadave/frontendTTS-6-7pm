import axios from "axios";
import { React, useRef,useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
function ContactForm() {
  const [Message, SetMessage] = useState(false);
  const fname = useRef("");
  const lname = useRef("");
  const email = useRef("");
  const message = useRef("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    const insert = {
      fname: fname.current.value,
      lname: lname.current.value,
      email: email.current.value,
      message: message.current.value,
    };
    axios.post("http://localhost:4000/contact-data", insert).then(() => {
      SetMessage(true);
      if (Message == false) {
        setTimeout(() => {
          SetMessage(false);
        }, 3000);
      }
      e.target.reset();
    });
  };

  return (
    <div>
      {Message && (
        <div className="px-5 my-2">
          <div className="alert alert-success">Your Query is Successfully Sent.One of our cutomer care will contact you back.</div>
        </div>
      )}
      <form
        action=""
        className="bg-light text-dark p-5 rounded rounded-4 shadow"
        onSubmit={HandleSubmit}
      >
        <div className="row">
          <Form.Group className="mb-3 col-lg-6" controlId="firstName">
            <Form.Label className="w-100 text-start text-uppercase">
              First Name
            </Form.Label>
            <input
              type="text"
              name="firstname"
           
              className="form-control"
              ref={fname}
            ></input>
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="lastname">
            <Form.Label className="w-100 text-start text-uppercase">
              Last Name
            </Form.Label>
            <input
              type="text"
              name="lastname"
              
              className="form-control"
              ref={lname}
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
             
              className="form-control"
              ref={email}
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
            
              className="form-control"
              rows={3}
              ref={message}
            ></textarea>
          </Form.Group>
        </div>
        <button
          type="submit"
          className="primary-bg px-2 py-1 rounded text-white"
        >
          Contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
