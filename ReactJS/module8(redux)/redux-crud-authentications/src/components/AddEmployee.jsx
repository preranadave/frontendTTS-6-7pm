import React, { useRef, useState } from "react";
import Header from "../Header";
import NavbarApp from "../NavbarApp";
import axios from "axios";
import Swal from "sweetalert2";
import { Form } from "react-bootstrap";
import EmployeeList from "./EmployeeList";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
    const Navigate=useNavigate()
    //variables for form
  const Name = useRef();
  const LastName = useRef();
  const Email = useRef();
  const Salary = useRef();
  const Phone = useRef();
  const Address = useRef();

  //add function
  const AddEmployeeData=(e)=>{
    e.preventDefault()
    var InsertEmployee={
        Name:Name.current.value,
        LastName:LastName.current.value,
        Email:Email.current.value,
        Salary:Salary.current.value,
        Phone:Phone.current.value,
        Address:Address.current.value
    }
    axios.post(`http://localhost:8000/add-employee`,InsertEmployee).then(()=>{
        Swal.fire({
            title: "Employee Added!",
            text: "You clicked the button!",
            icon: "success"
          });
          Navigate("/employee-list")
    })
  }
  return (
    <div>
      <Header />
      <NavbarApp />
      <div className="App w-50 mx-auto shadow p-5 mt-5">
        <header className="App-header">
          <h2>Add Employee here</h2>
          <hr />
          <Form onSubmit={AddEmployeeData}>
            <div className="form-group mt-2">
              <input
                type="text"
                ref={Name}
                placeholder="FirstName *"
                className="form-control"
              />
            </div>

            <div className="form-group mt-2">
              <input
                type="text"
                ref={LastName}
                placeholder="LastName *"
                className="form-control"
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="text"
                ref={Email}
                placeholder="Email *"
                className="form-control"
              />
            </div>

            <div className="form-group mt-2">
              <input
                type="text"
                ref={Salary}
                placeholder="Salary *"
                className="form-control"
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="text"
                ref={Phone}
                placeholder="Phone *"
                className="form-control"
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="text"
                ref={Address}
                placeholder="Address *"
                className="form-control"
              />
            </div>

            <div className="form-group mt-2">
              <input
                type="submit"
                placeholder="Email *"
                value="AddEmployee"
                className="btn btn-lg btn-dark text-white"
              />
            </div>
          </Form>
        </header>
       
      </div>
    </div>
  );
}
