import React, { useRef } from "react";
import { Container } from "react-bootstrap";

function UncontrolledApp() {
    const name=useRef("");
    const email=useRef("");
    const address=useRef("");
    const HandleFormData=(eve)=>
    {
        eve.preventDefault();
        var Info={
            name:name.current.value,
            email:email.current.value,
            address:address.current.value
        }
        console.log("Suucess",Info)
    }
     return (
    <>
      <Container fluid className="w-50 p-3 shadow border border-1 mt-5">
        <form action=""onSubmit={HandleFormData}>
          <div className="input-group m-2">
            <input type="text" name="username" ref={name} placeholder="Username"  className="form-control"/>
          </div>
          <div className="input-group m-2">
            <input type="text" name="email" ref={email} placeholder="Email"  className="form-control"/>
          </div>
          <div className="input-group m-2">
            <textarea name="address" ref={address} placeholder="Address"  className="form-control"></textarea>
          </div>
          <button type="submit" className="btn btn-lg btn-dark text-white px-3 m-2">Submit</button>
        </form>
      </Container>
    </>
  );
}

export default UncontrolledApp;
