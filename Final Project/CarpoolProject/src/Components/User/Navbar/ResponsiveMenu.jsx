import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

import { FaUserCircle } from "react-icons/fa";
const ResponsiveMenu = ({ showMenu }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  return (
    <>
      <div
        className={`fixed top-0 -z-50
        ${showMenu ? "left-0" : "-left-[100%]"}
        h-screen w-full  bg-white/30 z-50  transition-all duration-1000 pt-24 px-8 flex flex-col justify-between items-center md-hidden`}
      >
        {/* Navbar menu */}
        <div>
          <nav>
            <ul className="space-y-10 text-xl">
              <li>
                
                 <div>
                    <li className="cursor-pointer">
                      <span
                        
                        className="flex items-center -translate-x-3 gap-2"
                      >
                        <FaUserCircle size={40}/>
                        <span>
                        <Link to="/signup" className="font-bold">Sign-Up</Link>
                         </span>/<span>
                        <Link to="/signup" className=" font-bold">Log-In</Link>
                         </span>
                      </span>
                     
                    </li>
                  </div>
              </li>
              <li className="text-center">
                <Link to={"/"}>Home</Link>
              </li>
              <li  className="text-center">
                <Link to={"/"}>Why CarPool?</Link>
              </li>
              <li  className="text-center">
                <Link to={"/"}>How It Works?</Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link to={"/"} className="flex justify-center gap-[2px]">
                  About Us
                 
                    <FaCaretRight
                      className={`${
                        showSubMenu
                          ? "rotate-90 duration-300 ease-in-out mt-1"
                          : "-rotate-0 duration-300 ease-in-out mt-1"
                      }`}
                      onClick={toggleSubMenu}
                    />
                
                </Link>
                <div
                  className={`transition-all ease-in-out duration-1000 ${
                    showSubMenu
                      ? "transition-all visible duration-1000 ease-in-out"
                      : "hidden max-h-0 duration-1000 transition-all ease-in-out"
                  }`}
                >
                  <ul className="space-y-2 p-2 duration-700 transition-all ease-in-out">
                    <li className="p-2 hover:bg-blue-200"> Why Us?</li>

                    <li className="p-2 hover:bg-blue-200 duration-700 ease-in-out transition-all">
                      Members Story
                    </li>
                    <li className="p-2 hover:bg-blue-200 duration-700 ease-in-out transition-all">
                      Contact Us
                    </li>
                    {/* <li className="p-2 hover:bg-blue-200 duration-700 ease-in-out transition-all">
                      Privacy Policy
                    </li> */}
                  </ul>
                </div>
              </li>
              {/* <li>
                <Link to={"/"}>Home</Link>
              </li> */}
            </ul>
          </nav>
        </div>
        {/* navbar footer */}
        <div>
          <p>@2024 </p>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
