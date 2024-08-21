import React from "react";
import { Modal } from "react-bootstrap";

function UpdateAbstractModal() {
  const photo = useRef("");
  const name = useRef("");
  const email = useRef("");
  const expertise = useRef("");

  return (
    <>
      <div className="modal">
        <Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          backdrop="static"
          centered
        >
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
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default UpdateAbstractModal;
