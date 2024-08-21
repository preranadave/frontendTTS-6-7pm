import React from "react";

//image Header
import HeaderImage from "../../assets/images/carpool-header.jpg";

function Header() {
  return (
    <>
      <div className="max-w-[1540px] h-[600px] w-full m-auto " id="header">
        <div
          style={{
            backgroundImage: `url(${HeaderImage})`,
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-1000 ease-in-out"
        >
          {" "}
          <div
            className="slider-heading w-[560px] ms-32 pt-48 "
            style={{ filter: "brightness(1.5)" }}
          >
            <h1 className="text-[60px] text-gray-800  duration-1000">
              <h1>j</h1>
            </h1>

            <h2 className="text-[30px] text-gray-600   duration-1000">
             <h1 className="text-green-600">n</h1>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
