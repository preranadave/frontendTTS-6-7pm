import React from "react";
import { BiCategory } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiHeadphones } from "react-icons/fi";
import { HiOutlineFire } from "react-icons/hi2";
function HeadNavigation() {
  return (
    <>
      <div className="py-2 border bottom-3 flex flex-row justify-between">
        <div className="categories">
          <button
            type="button"
            className="text-white bg-green-500 border-none outline-none px-4 py-3 w-70 rounded-md ms-2 flex mt-1"
          >
            <BiCategory className="text-md  mt-1" />
            <label className="ms-2">Select All Categories</label>
            <RiArrowDropDownLine className="text-2xl ms-2" />
          </button>
        </div>
        <div className="navigation">
          <ul className="list-none flex flex-row mt-4 text-sm p-1">
            <li className="font-bold flex">
              <HiOutlineFire className="text-2xl mx-2 text-green-500 -translate-y-1" />
              <label>Hot Deals</label>
            </li>

            <li className="ms-10 font-bold">Home</li>

            <li className="ms-10 font-bold">About</li>
            <li className="ms-10 font-bold">Shop</li>
            <li className="ms-10 font-bold flex">
              <label htmlFor="">Vendors</label>
              <RiArrowDropDownLine className="text-xl" />
            </li>
            <li className="ms-10 font-bold flex">
              <label>Mega Menu</label>{" "}
              <RiArrowDropDownLine className="text-xl" />
            </li>
            <li className="ms-10 font-bold">Blogs</li>
            <li className="ms-10 font-bold">Contact</li>
          </ul>
        </div>
        <div className="support-center me-2 flex">
        <FiHeadphones className="text-2xl -translate-x-3 mt-3" style={{fontSize:"38px"}}/>
          <div className="flex flex-col">
            <div className="flex">
              {" "}
          
              <label htmlFor="" className="text-green-500 text-2xl">
                {" "}
                017XXXXXXX
              </label>
            </div>

            <label htmlFor="" className="text-gray-600">
              24/7 Support Center
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadNavigation;
