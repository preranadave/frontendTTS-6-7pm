import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Container, Navbar, Nav, Row, Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FlashMessage from "react-flash-message";
import "../../scss/custom.scss";
function AddAbstarctModal(props) {
  const [Message, SetMessage] = useState(false);
  const Navigate = useNavigate();
  const photo = useRef("");
  const name = useRef("");
  const email = useRef("");
  const expertise = useRef("");
  //   useEffect(() => {
  // alert(Message)
  //     // Creating a timeout within the useEffect hook
  //     if(Message==false){
  //     setTimeout(() => {

  //         SetMessage(false);
  //     }, 3000);

  // }}, []);
  const HandleFormChange = (e) => {
    e.preventDefault();
    var Info = {
      photo: photo.current.value,
      name: name.current.value,
      email: email.current.value,
      expertise: expertise.current.value,
    };
    axios.post(`http://localhost:4000/addabstract-data`, Info).then(() => {
      SetMessage(true);
      if (Message == false) {
        setTimeout(() => {
          SetMessage(false);
        }, 3000);
      }
      e.target.reset();
    });

    //Navigate("/manage-abstract");
  };
  return (
    <>
      <div className="modal">
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          backdrop="static"
          centered
        >
          {/* <Modal.Header className="border-0 d-flex justify-content-end">
     
      
        </Modal.Header> */}

          <Modal.Body>
            <div className="d-flex justify-content-between px-3">
              <h1 className="fourth-font fs-2 ms-5">Add Abstract</h1>
              <Button onClick={props.onHide} className="second-bg border-0">
                Close
              </Button>
            </div>
            <div className="container">
              {Message && (
                <div className="px-5 my-2">
                  <div className="alert alert-success">SuccessFully added!</div>
                </div>
              )}
              <form onSubmit={HandleFormChange} className="mx-5 p-2">
                <Row className="mb-4">
                  <Form.Group controlId="photo">
                    <Form.Label className="w-100 text-start fourth-font fs-5">
                      Photo URL
                    </Form.Label>
                    <input
                      type="text"
                      name="photo"
                      ref={photo}
                      placeholder="Photo URL"
                      className="form-control"
                    />
                  </Form.Group>
                </Row>
                <Row className="my-4">
                  <Form.Group controlId="name">
                    <Form.Label className="w-100 text-start fourth-font fs-5">
                      Name
                    </Form.Label>
                    <input
                      type="text"
                      name="Name"
                      ref={name}
                      placeholder="Name"
                      className="form-control"
                    />
                  </Form.Group>
                </Row>
                <Row className="my-4">
                  <Form.Group controlId="email">
                    <Form.Label className="w-100 text-start fourth-font fs-5">
                      Email
                    </Form.Label>
                    <input
                      type="email"
                      name="email"
                      ref={email}
                      placeholder="Email"
                      className="form-control"
                    />
                  </Form.Group>
                </Row>
                <Row className="my-4">
                  <Form.Group controlId="expertise">
                    <Form.Label className="w-100 text-start fourth-font fs-5">
                      Expertise In
                    </Form.Label>
                    <input
                      type="text"
                      name="expertise"
                      ref={expertise}
                      placeholder="Expertise"
                      className="form-control"
                    />
                  </Form.Group>
                </Row>
                <Row className="my-4 text-start px-2">
                  <button
                    type="submit"
                    className="border-0 outline-0 rounded py-2 second-bg first-font"
                  >
                    Add Abstract
                  </button>
                </Row>
              </form>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
        </Modal>
      </div>
    </>
  );
}

export default AddAbstarctModal;
