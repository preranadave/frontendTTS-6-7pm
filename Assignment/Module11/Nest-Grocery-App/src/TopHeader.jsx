import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
function TopHeader() {
  return (
    <>
      <div
        className="container flex flex-row justify-between py-3 border-b-2"
        id="topheader"
      >
        <div className="top-menu basis-1/2">
          <ul className="list-none flex flex-row text-gray-400 text-xs">
            <li className="mx-2">About</li>|<li className="mx-2">My Account</li>
            |<li className="mx-2">Wishlist</li>|<li className="mx-2">About</li>|
            <li className="mx-2">Order Tracking</li>
          </ul>
        </div>
        <div className="top-menu basis-1/2 h-6 overflow-hidden">
          <ul className="block animate-text-slide">
            <li className="fs-l text-green-500">
              100% secure delivery without contacting the cuorier
            </li>

            <li className="fs-l text-green-500">
              Supper Value Deals - Save more with coupons
            </li>

            <li className="fs-l text-green-500">
              Trendy 25 silver jewelry, save 35% off tody
            </li>

            <li className="fs-l  text-green-500 " aria-hidden="true">
              100% secure delivery without contacting the cuorier
            </li>
          </ul>
        </div>
        <div className="top-menu basis-1/3 flex flex-row text-gray-400 text-xs">
          <ul className="list-none flex flex-row text-gray-400 text-xs">
            <li className="mx-2">Need help? Call Us:+88017XXXXX</li>|
            <li className="mx-3 group relative flex">
              <label className="cursor-pointer">English</label><MdKeyboardArrowDown size={16}/>

              <div className="group-hover:opacity-100 z-10 opacity-0">
              <ul className="group-hover:-translate-y-2 flex flex-col animation-menu-transtion ease-in-out duration-700 border-2 bg-white absolute w-24 -translate-x-20 mt-8">
                <li className="mx-auto p-2 px-7 cursor-default">English</li>
                <li className="mx-auto p-2 px-7 cursor-default">Bangali</li>
                <li className="mx-auto p-2 px-7 cursor-default">Hindi</li>
              </ul>
              </div>
            </li>
            |
            <li className="mx-3 group relative flex">
            <label className="cursor-pointer">USD</label><MdKeyboardArrowDown size={16}/>
              <div className="group-hover:opacity-100 opacity-0">
              <ul className="group-hover:-translate-y-2 flex flex-col animation-menu-transtion  ease-in-out duration-700 border-2 bg-white absolute w-24 -translate-x-20 mt-8">
                <li className="mx-auto p-2 px-7 flex cursor-default"><FaDollarSign />USD</li>
                <li className="mx-auto  p-2 px-7 flex cursor-default"><FaBangladeshiTakaSign />BDT</li>
                <li className="mx-auto p-2 px-8 flex cursor-default"><LuIndianRupee />INR</li>
              </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
