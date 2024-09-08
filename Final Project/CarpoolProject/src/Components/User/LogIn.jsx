import React from "react";
import { Link } from "react-router-dom";
//import navbar
import Navbar from "./Navbar/Navbar";

import LogInImage from "../../assets/images/sign-up.jpg";
function LogIn() {
  
  // const LoginBgStyle = {
  //   backgroundImage: `url(${LogInImage})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   width: "100%",
  //   position: "relative",
  // };
  return (
    <>
      <Navbar></Navbar>
      <div style={LoginBgStyle} className="-translate-y-24">
        <div className="min-h-[736px] md:min-h-[810px]  rounded pb-10 pt-3 md:pt-32 bg-gradient-to-tl from-black/100 via-black/70  to-primary/50">
          <div className="container pt-24">
            <div className="grid grid-cols-1 items-center gap-12 text-white">
              {/*Sign Up Form*/}
              <div className="w-[90%] md:w-[480px] mx-auto p-4  text-black  rounded-2xl bg-black/10 shadow-2xl shadow-white/50">
                <div>
                  <h1 className="text-4xl text-center font-semibold mb-5 text-white">
                    Log-In
                  </h1>
                  <div className="space-y-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="py-2 px-4 rounded-lg w-full bg-gray-400/20 placeholder-white outline-none border-none"
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="py-2 px-4 rounded-lg w-full bg-gray-400/20 placeholder-white outline-none"
                      placeholder="Password"
                    />

                    <button className="btn-primary w-full">Log-In</button>
                    <div className="text-center">
                      <span className="text-white">
                        Don't have account?
                        <Link to="/signup" className="text-xl ms-2 text-primary">
                          Sign-Up
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
