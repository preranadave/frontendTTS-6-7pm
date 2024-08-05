import React from "react";
import { useRef, useEffect, useState } from "react";
import "../../scss/custom.scss";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { Container, Button, Row, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import FlashMessage from "react-flash-message";
import AddAbstarctModal from "./AddAbstractModal";
import axios from "axios";

function ManageAbstract() {
  const [data, setData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  //const [deleteMsg, seteDeleteMsg] = useState(false);
  //Add Modal
  const [AddAbstractModalShow, setAddAbstractModalShow] = useState(false);
  //Add Modal End
  useEffect(() => {
    axios.get(`http://localhost:4000/addabstract-data`).then((response) => {
      setData(response.data);
    });
  });
  const HandleDelete = (e) => {
   
    navigate(`/delete-abstract/${e}`);
    //seteDeleteMsg(true);
    // if (deleteMsg == false) {
    //   setTimeout(() => {
    //     seteDeleteMsg(false);
    //   }, 3000);
    // }
  };
  return (
    <div className="adminpages">
      <Container fluid className="m-0 p-0">
        <Row>
          <div className="col-md-3 m-0 p-0">
            <AdminSidebar></AdminSidebar>
          </div>
          <div className="col-md-9 m-0 p-0">
            <AdminHeader></AdminHeader>
            <div className="container d-flex flex-row justify-content-between">
              {" "}
              <h1 className="fourth-font text-start fs-2 ms-3 my-2">
                Manage Abstract
              </h1>
              <button
                className="second-bg first-font mx-5 my-2 border-0 outline-0 rounded p-2"
                variant="primary"
                onClick={() => setAddAbstractModalShow(true)}
              >
                Add Abstract
              </button>
            </div>
            {/* {deleteMsg && (
              <div className="px-5 my-2">
                <FlashMessage duration={5000}><div className="alert alert-success">SuccessFully Deleted!</div></FlashMessage>
                
              </div>
            )} */}
            <div
              className="table-responsive mt-5 mx-5 overflow-y-auto"
              style={{ height: "550px" }}
            >
              {" "}
              <table className="table table-bordered border border-2">
                <tr>
                  <th className="fourth-font">#</th>
                  <th className="fourth-font">Photo</th>
                  <th className="fourth-font">Name</th>
                  <th className="fourth-font">Email</th>
                  <th className="fourth-font">Expertise</th>
                  <th className="fourth-font">Action</th>
                </tr>
                {data &&
                  data.map((item) => {
                    return (
                      <>
                        {" "}
                        <tr>
                          <td style={{ width: "50px" }}>{item.id}</td>
                          <td style={{ width: "250px" }}>
                            <img src={item.photo} className="w-25"></img>
                          </td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>

                          <td>{item.expertise}</td>
                          <td>
                            <button
                              type="button"
                              className="second-bg text-white p-2 border-0 rounded-1 mx-2"
                              onClick={() => HandleDelete(item.id)}
                            >
                              <span className="bi bi-trash"></span>
                            </button>
                            <button
                              type="button"
                              className="success-bg text-white p-2 border-0 rounded-1 mx-2"
                            >
                              <span className="bi bi-pencil"></span>
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </table>
            </div>
          </div>
        </Row>
      </Container>
      <AddAbstarctModal
        show={AddAbstractModalShow}
        onHide={() => setAddAbstractModalShow(false)}
      />
    </div>
  );
}

export default ManageAbstract;
