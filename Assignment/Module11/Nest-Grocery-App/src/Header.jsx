import React from "react";
import Logo from "../src/assets/images/logo.png";

function Header() {
  return (
    <>
      <div className="header py-5 border bottom-2" id="header">
        <div className="container flex flex-row align-middle">
          <div className="basis-1/6 logo">
            <img src={Logo}></img>
          </div>
          <div className="basis-1/2 search align-middle">
            <div className="form-group relative">
              <input
                type="text"
                className="rounded px-2 py-3 border-2 absolute border-green-500 w-4/5 mt-2" placeholder="Search for products..."
              />
              <button
                type="button"
                className="rounded-md w-2/12 py-2 bg-green-500 text-white absolute mt-4 -translate-y-0.5 translate-x-3/4 ms-96"
              >
                Search
              </button>
            </div>
            <div className="basis-1/6 vendor">
          <button type="button" className="rounded border shadow text-green-500">Become Vendor</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
