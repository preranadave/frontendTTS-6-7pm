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
import { CSVLink } from "react-csv";

function ManageContact() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(`http://localhost:4000/contact-data`).then((response) => {
      setData(response.data);
    });
  }, [data]);

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
                Manage Contact
              </h1>
              <CSVLink
                data={data}
                filename={"my-file.csv"}
                  className="second-bg first-font mx-5 my-2 border-0 outline-0 rounded p-2"
                target="_blank"
              >
                Download me
              </CSVLink>
              ;
            </div>
            <div
              className="table-responsive mt-5 mx-5 overflow-y-auto"
              style={{ height: "550px" }}
            >
              {" "}
              <table className="table table-bordered border border-2">
                <tr>
                  <th className="fourth-font">#</th>
                  <th className="fourth-font">First Name</th>
                  <th className="fourth-font">Last Name</th>
                  <th className="fourth-font">Email</th>
                  <th className="fourth-font">Message</th>

                  <th className="fourth-font">Action</th>
                </tr>
                {data &&
                  data.map((item) => {
                    return (
                      <>
                        <tr>
                          <td style={{ width: "50px" }}>{item.id}</td>

                          <td>{item.fname}</td>
                          <td>{item.lname}</td>

                          <td>{item.email}</td>

                          <td>{item.message}</td>
                          <td>
                            <button
                              type="button"
                              className="second-bg text-white p-2 border-0 rounded-1 mx-2"
                            >
                              <span className="bi bi-trash"></span>
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
    </div>
  );
}

export default ManageContact;
