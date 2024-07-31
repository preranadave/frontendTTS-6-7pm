import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";

function Create() {
  const [FormData, SetFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
  });
  const [FormErrors, SetErrors] = useState({});
  const HandleFormChange = (e) => {
    const { name, value } = e.target;
    SetFormData({
      ...FormData,
      [name]: value,
    });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    var FormvalidtionErrors = {};
    if (!FormData.name) {
      FormvalidtionErrors.name = "Please Enter Username";
    }

    if (!FormData.email) {
      FormvalidtionErrors.email = "Please Enter email";
    }
    if (!FormData.phone) {
      FormvalidtionErrors.phone = "Please Enter Password";
    }
    if (!FormData.address) {
      FormvalidtionErrors.address = "Please Enter Password";
    }
    if (!FormData.pincode) {
      FormvalidtionErrors.pincode = "Please Enter Password";
    }
    SetErrors(FormvalidtionErrors);
    if (Object.keys(FormvalidtionErrors).length == 0) {
        Swal.fire({
            title: 'Success!',
            text: 'Data Suucessfully added',
            icon: 'success'
          
          })
        FormData.name= "";
        FormData.email= "";
        FormData.phone= "";
        FormData.address= "";
        FormData.pincode= "";
    }
  };

  return (
    <>
      <Container className="mt-5 shadow p-3">
        <Row>
          <div className="col-md-4">
            <img
              src="https://media.iqonic.design/iqonic-design/wp-content/uploads/2021/06/1_lGuOoHqUt4KyFjHxH07k4w.gif"
              className="img-fluid"
            ></img>
          </div>
          <div className="col-md-6">
            <h1>Add Data Here</h1>
            <form onSubmit={HandleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  value={FormData.name}
                  className="form-control m-2"
                  onChange={HandleFormChange}
                />
                {FormErrors.name && 
                  <span className="text-danger">{FormErrors.name} </span>
                }
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Email*"
                  name="email"
                  value={FormData.email}
                  className="form-control m-2"
                  onChange={HandleFormChange}
                />
                {FormErrors.email && 
                  <span className="text-danger">{FormErrors.email} </span>
                }
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Phone*"
                  name="phone"
                  value={FormData.phone}
                  className="form-control m-2"
                  onChange={HandleFormChange}
                />
                {FormErrors.phone && 
                  <span className="text-danger">{FormErrors.phone} </span>
                }
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Address*"
                  name="address"
                  value={FormData.address}
                  className="form-control m-2"
                  onChange={HandleFormChange}
                />
                {FormErrors.address && 
                  <span className="text-danger">{FormErrors.address} </span>
                }
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Pincode*"
                  name="pincode"
                  value={FormData.pincode}
                  className="form-control m-2"
                  onChange={HandleFormChange}
                />
                {FormErrors.pincode && 
                  <span className="text-danger">{FormErrors.pincode} </span>
                }
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-dark px-3 ms-2 text-white my-3 d-flex justify-content-start "
              >
                Add Data
              </button>
            </form>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Create;
