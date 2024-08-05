import React from "react";

function TopHeader() {
  return (
    <>
      <div
        className="container flex flex-row justify-between py-2 border-b-2"
        id="topheader"
      >
        <div className="top-menu basis-1/2">
          <ul className="list-none flex flex-row text-gray-400 text-xs">
            <li className="mx-2">About</li>|<li className="mx-2">My Account</li>
            |<li className="mx-2">Wishlist</li>|<li className="mx-2">About</li>|
            <li className="mx-2">Order Tracking</li>
          </ul>
        </div>
        <div className="top-menu basis-1/2 h-5 overflow-hidden">
          <ul className="block animate-text-slide">
            <li className="fs-l font-bold text-green-500">
              100% secure delivery without contacting the cuorier
            </li>

            <li className="fs-l font-bold text-green-500">
              Supper Value Deals - Save more with coupons
            </li>

            <li className="fs-l font-bold text-green-500">
              Trendy 25 silver jewelry, save 35% off tody
            </li>

            <li className="fs-l font-bold text-green-500 " aria-hidden="true">
              100% secure delivery without contacting the cuorier
            </li>
          </ul>
        </div>
        <div className="top-menu basis-1/3 flex flex-row text-gray-400 text-xs">
          <ul className="list-none flex flex-row text-gray-400 text-xs">
            <li className="mx-2">Need help? Call Us:+88017XXXXX</li>|
            <li className="mx-3 group relative">
              English
              <ul  className="group-hover:flex flex-col animation-menu-transtion duration-300 border-2 bg-white hidden absolute w-24 -translate-x-20 translate-y-1">
                <li className="mx-auto hover:bg-slate-200 p-2 px-7"><label>English</label></li>
                <li className="mx-auto hover:bg-slate-200 p-2 px-7">Bangali</li>
                <li className=" hover:bg-slate-200 p-2 px-8">Hindi</li>
              </ul>
            </li>
            |<li className="mx-3">Wishlist</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
