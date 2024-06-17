import React from "react";
import { MDBContainer, MDBCard, MDBRow, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBBtn } from "mdb-react-ui-kit";
export default function ContainerApp() {
    return (
        <>
            <MDBContainer className="p-5 shadow mt-5">
                <MDBRow>
                    <div className="col-md-3">
                        <MDBBtn className="btn btn-lg btn-primary">
                            Register HERE
                        </MDBBtn>
                    </div>
                    <div className="col-md-3">
                        <MDBBtn className="btn btn-lg btn-danger">
                            Login
                        </MDBBtn>
                    </div>
                    <div className="col-md-3">
                        <MDBBtn className="btn btn-lg btn-dark">
                            Login<span className="fa fa-users"></span>
                        </MDBBtn>
                    </div>
                </MDBRow>
            </MDBContainer>
            <MDBContainer fluid className="mt-5 bg-info p-4">

                <MDBCard className="w-25">
                    <MDBCardHeader className="bg-danger">OUR TEAM</MDBCardHeader>
                    <MDBCardBody>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit iste sapiente, excepturi voluptates possimus assumenda, temporibus autem nulla doloribus ipsam ducimus vitae. Alias tempora architecto nam qui aperiam reprehenderit laudantium.
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </>
    )
}