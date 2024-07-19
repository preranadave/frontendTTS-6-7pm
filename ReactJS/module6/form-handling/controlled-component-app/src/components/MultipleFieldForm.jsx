import React, { useState } from "react";
import Swal from "sweetalert2";
function MultipleFieldForm() {
  const [inputs, SetInputs] = useState({});
  const HandleChange = (eve) => {
    const name = eve.target.name;
    const value = eve.target.value;
    SetInputs( {...inputs, [name]: value });
  };
  const HandleSubmit = (eve) => {
    eve.preventDefault();
  };

  return (
    <div className="container-fluid w-50 p-5">
      <form action="" className="p-5" onSubmit={HandleSubmit}>
        <input
          type="text"
          name="username"
          value={inputs.username}
          className="m-5 form-control"
          onChange={HandleChange}
          placeholder="User Name"
        />

        <input
          type="email"
          name="email"
          value={inputs.email}
          className="m-5  form-control"
          placeholder="Email"
          onChange={HandleChange}
        />
        <button
          type="submit"
          className="btn btn-lg bg-black text-white ms-5"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Submit
        </button>
      </form>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">{inputs.username}{inputs.username}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultipleFieldForm;
