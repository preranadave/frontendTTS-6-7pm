import React from "react";

//image Header
import HeaderImage from "../../assets/images/header-wave.png";

function Header() {
  return (
    <>
      <div className="max-w-[1540px] h-[600px] w-full m-auto " id="header">
        <div
          style={{
            backgroundImage: `url(${HeaderImage})`,
          }}
          className="w-auto h-full bg-center bg-cover transition-all duration-1000 ease-in-out"
        >
         </div>
      </div>
    </>
  );
}

export default Header;
