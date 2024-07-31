import React from "react";
import AboutImage from "../../assets/images/about.jpeg";
import ViewMyWorkButton from "./ViewMyWorkButton";
function About() {
  return (
    <div className="bg-dark py-5 text-light" id="about">
      <div className="container">
        <div className="d-flex flex-column-reverse flex-md-row row">
          <div className="col-md-6 col-sm-4 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
            <img src={AboutImage} className="img-fluid shadow"></img>
          </div>
          <div className="col-md-6 col-sm-4 d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-5 mb-sm-1">About Myself</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              velit nihil laudantium, voluptate eveniet ducimus in deleniti
              autem rem aliquid sunt necessitatibus fugit quibusdam voluptatum
              deserunt illum voluptas? Rem, harum.
            </p>
            <p className="text-center mb-5 mb-sm-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              itaque in soluta praesentium dolorum accusamus saepe architecto?
              Provident blanditiis repellendus sit. Sit maxime nulla similique
              ipsa tempora aliquam commodi quibusdam?
            </p>
            <ViewMyWorkButton></ViewMyWorkButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
