import React from "react";
import PortfolioCards from "./PortfolioCards";
import PortfolioItems from "./PortfolioItems.js";
function Portfolio() {
  return (
    <div className="py-5" id="project">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="mb-5 ">Portfolio</h2>
        <div className="row g-4">
          {PortfolioItems.map((project) => (
            <PortfolioCards
              key={project.id}
              projectImg={project.ProjectImg}
              Description={project.ProjectDesceription}
              projectName={project.ProjectTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
