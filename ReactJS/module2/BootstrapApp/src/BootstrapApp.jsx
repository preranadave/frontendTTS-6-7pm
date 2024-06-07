import React from "react";

import { Container,Row,Button } from "react-bootstrap";
function BootstrapApp()
{
    return(
        <>
           
            <Container fluid className="bg-dark">

                <Row>
                    <div className="col-md-4 bg-info">
                        <Button type="button" className="btn btn-danger">Register<span className="bi bi-person"></span>

                        </Button>
                    </div>
                    
                    <div className="col-md-8 bg-white"></div>
                </Row>
            </Container>
        </>
    )
}
export default BootstrapApp