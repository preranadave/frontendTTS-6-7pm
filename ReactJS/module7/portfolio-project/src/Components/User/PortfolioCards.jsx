import React from "react";
import { Card, Button } from "react-bootstrap";
function PortfolioCards(props) {
  return (
    <div className="col-md-6">
      <Card className="h100 shadow">
        <Card.Img varient="top" src={props.projectImg}>
          <Card.Body className="p-5">
            <Card.Title className="fw-bold text-uppercase mb-4 fs-3">{props.projectName}

            </Card.Title>
            <Card.Text>{props.Description}</Card.Text>
            <Button className="shadow tex-uppercase" varient="outline-primary" >View Project</Button>
          </Card.Body>
        </Card.Img>
      </Card>
    </div>
  );
}

export default PortfolioCards;
