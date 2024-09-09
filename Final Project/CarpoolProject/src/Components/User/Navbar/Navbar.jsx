import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import Logo from "../../../assets/images/carpool.png";
import { HiMenu } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import SignUp from "../SignUp";
import Modal from "react-modal";
function Navbar() {
  //destrcutring of menu variable
  const [MobileShowMenu, setMobileShowMenu] = useState(false);
  const [SignUpModalShow, setSignUpModalShow] = useState(false);

  //function to show menu
  const ToggleMenu = () => {
    setMobileShowMenu(!MobileShowMenu);
  };
  return (
    <>
      <nav className="bg-gradient-to-r w-[98%] bg-white mt-2 rounded-lg mx-auto py-2 px-3 relative z-[999]">
        <div>
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="text-3xl md:text-3xl  uppercase">
              <Link to={"/"} className="flex items-center ">
                <span className="">Car</span>
                <span className="inline-block font-bold text-primary">P</span>
                <span>
                  <img
                    src={Logo}
                    className="w-[50px] md:w[70px] --translate-y-10"
                  ></img>
                </span>
                <span className="inline-block font-bold text-primary">L</span>
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="list-none flex flex-row items-center gap-8 font-bold -translate-x-16">
                <li className="hover:text-adminprimary active:text-primary">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:text-adminprimary active:text-primary">
                  {" "}
                  <Link to="/view-rides">Search Ride</Link>
                </li>
                <li className="hover:text-adminprimary active:text-primary">
                  <Link>Why CarPool?</Link>
                </li>
                <li className="hover:text-adminprimary active:text-primary">
                  {" "}
                  <Link>How It Works?</Link>
                </li>
                <li className="group relative cursor-pointer hover:text-adminprimary active:text-primary">
                  <Link to={""} className="flex items-center gap-[2px]">
                    Contact Us{" "}
                    {/* <span>
                      <FaCaretRight className="group-hover:rotate-90 transition-all ease-in-out duration-300" />
                    </span> */}
                  </Link>
                  {/* <div className="absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700 z-50">
                    <ul className="w-40 space-y-1 bg-white p-2 shadow-md text-black rounded-md group-hover:-translate-y-2 mt-3 translate-y-3 duration-700  transition-all ease-in-out">
                      <li className="p-2 hover:bg-blue-200"> Why Us?</li>

                      <li className="p-2 hover:bg-blue-200 duration-700 ease-in-out transition-all">
                        {" "}
                        Members Story
                      </li>
                      <li className="p-2 hover:bg-blue-200 duration-700 ease-in-out transition-all">
                        Contact Us
                      </li>
                    </ul>
                  </div> */}
                </li>
              </ul>
            </div>
            <div>
              <div className="group cursor-pointer ">
                <span className=" hidden md:flex items-center gap-[2px]">
                  <FaUserCircle size={40} />
                  <span>
                    <FaCaretRight className="group-hover:rotate-90 transition-all ease-in-out duration-300" />
                  </span>
                </span>
                <div className="absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-1000 z-50">
                  <ul className="w-28 text-[14px] space-y-1 bg-primary -translate-x-10 p-2 shadow-md text-black rounded-md group-hover:-translate-y-2 mt-3 translate-y-3 duration-700  transition-all ease-in-out">
                    <li
                      className="p-2 hover:bg-white rounded-lg duration-700"
                      onClick={() => setSignUpModalShow(true)}
                    >
                      Sign-Up
                    </li>

                    <li className="p-2 hover:bg-white rounded-lg duration-700 ease-in-out transition-all">
                      {" "}
                      <Link to={"/login"}>Log-In</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden">
              {MobileShowMenu ? (
                <HiMenuAlt1
                  onClick={ToggleMenu}
                  className="cursor-pointer transition-all duration-1000 ease-in-out"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={ToggleMenu}
                  className="cursor-pointer transition-all duration-1000 ease-in-out"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* mobile menu components */}
      <ResponsiveMenu showMenu={MobileShowMenu} />
      <SignUp
        isOpen={SignUpModalShow}
        onHide={() => setSignUpModalShow(false)}
      />
    </>
  );
}

export default Navbar;
