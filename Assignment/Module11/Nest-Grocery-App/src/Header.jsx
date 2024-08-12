import React from "react";
import Logo from "../src/assets/images/logo.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdSync } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <>
      <div className="header py-8 pb-10 border bottom-2" id="header">
        <div className="container flex flex-row align-middle">
          <div className="basis-1/4 logo">
            <img src={Logo} className="w-48"></img>
          </div>
          <div className="basis-3/4 ms-4 search align-middle relative">
           
              <input
                type="text"
                className="rounded px-3 py-3 border-2 outline-green-500 border-green-500 w-[650px] mt-2 absolute"
                placeholder="Search for products..."
              />
              <button
                type="button"
                className="rounded-md w-1/5 py-2 bg-green-500 text-white absolute mt-4 ms-[535px] -translate-y-0.5"
              >
                Search
              </button>
         
          </div>
          <div className="basis-1/6 vendor">
            <button
              type="button"
              className="rounded w-44 border text-green-500 mt-3 ms-44 flex py-2 align-middle shadow-lg hover:-translate-y-2 duration-500"
            >
              <span className="ms-4">Become Vendor</span>
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>
          <div className="basis-2/5 ms-8 header-side mt-6">
            <ul className="list-none flex flex-row  text-gray-500">
              <li className=" flex"><IoMdSync className="text-2xl"/><span className="bg-green-500 rounded-full w-4 h-4 text-[12px] px-[4px] -translate-x-3 -translate-y-2 text-white">0</span><label className="text-md -translate-x-4">Compare</label></li>
              <li className="flex"><IoIosHeartEmpty  className="text-2xl"/><span className="bg-green-500 rounded-full w-4 h-4  text-[12px] px-[4px] -translate-x-3 -translate-y-2 text-white">0</span><label className="text-md -translate-x-3">Wishlist</label></li>
              <li className=" flex"><IoCartOutline  className="text-2xl"/><span className="bg-green-500 rounded-full w-4 h-4  text-[12px] px-[4px] -translate-x-3 -translate-y-2 text-white">3</span><label className="text-md -translate-x-3">Cart</label></li>
              <li className=" flex"><IoIosHeartEmpty  className="text-2xl"/><label className="text-md  mx-1">Account</label></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
