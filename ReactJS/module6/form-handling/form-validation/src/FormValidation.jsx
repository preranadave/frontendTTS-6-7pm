import React, { useState } from "react";
import { Container } from "react-bootstrap";

function FormValidation() {
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, SetErrors] = useState({});
  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    var FormvalidtionErrors = {};
    if (!FormData.username) {
      FormvalidtionErrors.username = "Please Enter Username";
    }

    if (!FormData.email) {
      FormvalidtionErrors.email = "Please Enter email";
    }
    if (!FormData.password) {
      FormvalidtionErrors.password = "Please Enter Password";
    }
    SetErrors(FormvalidtionErrors);
    if (Object.keys(FormvalidtionErrors).length === 0) {
      alert("Form Submitted Succesfully!");
      FormData.username="";
      FormData.email="";
      FormData.password="";
    } 
  };
  return (
    <>
      <Container fluid className="mx-auto w-25 shadow border border-1 mt-5 p-3">
        <h1 className="fs-3">Employee Form</h1>
        <form onSubmit={HandleSubmit}>
          <div className="input-group flex-column">
            <label className="mt-2">UserName</label>
            <input
              type="text"
              name="username"
              id="uname"
              value={FormData.username}
              className="form-control w-100 mt-2"
              onChange={HandleInputChange}
            />
            {errors.username && (
              <span className="text-danger">{errors.username} </span>
            )}
          </div>
          <div className="input-group flex-column">
            <label className="mt-2">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={FormData.email}
              className="form-control w-100 mt-2"
              onChange={HandleInputChange}
            />

            {errors.email && (
              <span className="text-danger">{errors.email} </span>
            )}
          </div>
          <div className="input-group flex-column">
            <label className="mt-2">Password</label>
            <input
              type="password"
              name="password"
              id="pass"
              value={FormData.password}
              className="form-control w-100 mt-2"
              onChange={HandleInputChange}
            />

            {errors.password && (
              <span className="text-danger">{errors.password} </span>
            )}
          </div>
          <button type="submit" className="btn btn-lg btn-info px-3 my-3">
            {" "}
            Submit
          </button>
        </form>
      </Container>
    </>
  );
}

export default FormValidation;
