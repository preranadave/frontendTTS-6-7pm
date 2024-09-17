import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import SignUp from "../SignUp";
const ResponsiveMenu = ({ showMenu }) => {
  const [SignUpModalShow, setSignUpModalShow] = useState(false);

  const [showSubMenu, setShowSubMenu] = useState(false);
  const Navigate=useNavigate();

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  const toggleSignUp = () => {

    setSignUpModalShow(true);
    
  };
  return (
    <>
      <div
        className={`fixed top-0 -z-50
        ${showMenu ? "left-0" : "-left-[100%]"}
        h-screen w-full  bg-[#ecebeb] z-50  transition-all duration-1000 pt-24 px-8 flex flex-col justify-between items-center md-hidden`}
      >
        {/* Navbar menu */}
        <div>
          <nav>
            <ul className="space-y-5 text-xl">
              <li>
                <div className="flex-col  justify-center">
                  <div className=" group cursor-pointer flex items-center space-x-3">
                    <img
                      src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg"
                      className="flex justify-center w-14 h-14 rounded-full object-cover"
                    />
                    <div className="flex-auto items-center">
                      <div className="text-base text-slate-900 font-semibold dark:text-slate-200">
                        Prerna Dave
                      </div>
                    </div>
                    <FaCaretRight
                      className={`${
                        showSubMenu
                          ? "rotate-90 duration-300 ease-in-out mt-1"
                          : "-rotate-0 duration-300 ease-in-out mt-1"
                      }`}
                      onClick={toggleSubMenu}
                    />
                  </div>
                  <div>
                    {showSubMenu ? (
                      <ul className="flex-col w-full text-lg space-y-1 p-2 text-center text-black rounded-md">
                        <li
                          className="p-2 rounded-lg duration-700 hover:bg-white px-5"
                          onClick={() => Navigate("/signup")}
                        >
                          Sign-Up
                        </li>

                        <li className="p-2 hover:bg-white px-5 rounded-lg duration-700 ease-in-out transition-all" onClick={() => Navigate("/login")}>
                          {" "}
                          Log-In
                        </li>

                        <li className="p-2 px-5 hover:bg-white rounded-lg duration-700 ease-in-out transition-all">
                          {" "}
                          <Link to={"/user-rides"}>Your Rides</Link>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </li>
              <li className="flex justify-center hover:bg-white">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="flex justify-center hover:bg-white">
                  {" "}
                  <Link to="/view-rides">Search Ride</Link>
                </li>
              <li className="flex justify-center hover:bg-white">
                <Link to={"/"}>Why CarPool?</Link>
              </li>
              <li className="flex justify-center">
                <Link to={"/"}>How It Works?</Link>
              </li>
              <li className="group relative cursor-pointer flex justify-center">
                <Link to={"/"} className="flex justify-center gap-[2px]">
                  About Us
                  {/* <FaCaretRight
                    className={`${
                      showSubMenu
                        ? "rotate-90 duration-300 ease-in-out mt-1"
                        : "-rotate-0 duration-300 ease-in-out mt-1"
                    }`}
                    onClick={toggleSubMenu}
                  /> */}
                </Link>
                {/* <div
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
                  </ul>
                </div> */}
              </li>
            </ul>
          </nav>
        </div>
        {/* navbar footer */}
        <div>
          <p>@2024 </p>
        </div>
      </div>
      {/* <SignUp
        isOpen={SignUpModalShow}
        onHide={() => setSignUpModalShow(false)}
      />   */}
    </>
  );
};

export default ResponsiveMenu;
