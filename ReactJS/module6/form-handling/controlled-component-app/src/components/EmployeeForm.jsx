import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Swal from 'sweetalert2'
function EmployeeForm() {
    const[data,setData]=useState({
        name:"",
        email:"",
        number:""
    })
  const FormHandler = (e) => {
    e.preventDefault();
    const{name,value}=e.target;
    setData({
        ...data,[name]:value
    })
   // this.DisplayData()
  };
  const DisplayData=(e)=>{
    e.preventDefault();
    console.log("Suucessfully submitted",data)
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });

  }
  
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <div className="col-md-4">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <h1>Form Handling</h1>
            <form onSubmit={DisplayData}>
              <div className="input-group m-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={data.name}
                  id=""
                  onChange={FormHandler}
                  placeholder="Name"
                />
              </div>
              <div className="input-group m-3">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id=""
                  onChange={FormHandler}
                  value={data.email}
                  placeholder="Eamail"
                />
              </div>
              <div className="input-group m-3">
                <input
                  type="text"
                  className="form-control"
                  value={data.number}
                  name="number"
                  id=""
                  onChange={FormHandler}
                  placeholder="Mobile"
                />
              </div>
              <button type="submit" className="btn btn-success m-3">
                Apply
              </button>
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default EmployeeForm;
