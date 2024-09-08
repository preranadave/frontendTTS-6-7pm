import React, { useRef, useState } from "react";
import { Modal } from "react-modal";
//import navbar
import Navbar from "./Navbar/Navbar";

import { Link, useNavigate } from "react-router-dom";
import SignUpImage from "../../assets/images/sign-up.jpg";
import UserImage from "../../assets/images/user.png";
import axios from "axios";

import { IoIosCloseCircleOutline } from "react-icons/io";
function SignUp(props) {
  //declarations
  // const SignUpBGStyle = {
  //   backgroundImage: `url(${SignUpImage})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",

  //   width: "100%",
  //   position: "relative",
  // };

  const ProfileImage = useRef(null);
  const [Message, SetMessage] = useState(false);

  const navigate = useNavigate();

  //form input object destructuring
  const UserName = useRef("");
  const Email = useRef("");
  const Password = useRef("");
  const Role = useRef("");
  const IsDriver = useRef("");

  //functions
  const handleImageClick = (e) => {
    ProfileImage.current.click();
  };

  //user Registration
  const RegisterUser = (event) => {
    event.preventDefault();
    var UserDetails = {
      UserName: UserName.current.value,
      Email: Email.current.value,
      Password: Password.current.value,
      Role: "user",
      IsDriver: false,
    };
    axios.post(`http://localhost:8000/Users`, UserDetails).then(() => {
      SetMessage(true);
      if (Message == false) {
        setTimeout(() => {
          SetMessage(false);

          props.onHide();
        }, 3000);
      }
      e.target.reset();
    });
  };
  return (
    <>
      <div
        {...props}
        className={`fixed ${
          props.isOpen
            ? "top-0 opacity-100 z-[1000] backdrop-blur-lg pt-24"
            : "-top-[100%] z-[1000] opacity-0 duration-300"
        } transition-all duration-700`}
      >
        <div className=" mt-2 md:w-[70%] flex items-center  bg-white md:mx-56 rounded-2xl ">
          <div className="min-h-[600px] md:min-h-[200px] rounded">
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
                {/* Left Side */}
                <div className="bg-primary h-full p-20 rounded-tl-[16px] rounded-bl-[16px]">
                  <div className=" px-3 lg:items-start lg:text-left lg:max-w-[450px] ">
                    <h1 className="text-5xl lg:text-7xl font-bold text-adminprimary">
                      Your Ride,At Low Price.
                    </h1>
                    <p className="hidden md:block">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum porro quos architecto adipisci earum quis illum
                      fugit cum labore voluptate? Cum beatae perspiciatis nemo
                      repellat nobis quis, possimus est delectus!
                    </p>
                  </div>
                </div>
                {/*Sign Up Form */}
                <div>
                  {/* absolute -translate-y-6 w-[30%] mx-5 */}

                  <div
                    className={`px-5 w-[80%] mx-auto text-center bg-yellow-100 border border-primary text-adminprimary rounded-md p-2 ${
                      Message ? "opacity-100" : "opacity-0"
                    } duration-700 transition-all`}
                  >
                    <div className="">You Are Registerd Successfully!</div>
                  </div>

                  <IoIosCloseCircleOutline
                    size={30}
                    className="cursor-pointer fixed right-60 top-28  mx-3"
                    onClick={props.onHide}
                  />
                  <div className="w-[90%] md:w-[full] mx-4 p-4 bg-white/60 mb-10 md:mt-10  text-black  rounded-2xl shadow-2xl">
                    <div>
                      <h1 className="text-4xl text-center font-semibold mb-5 text-adminprimary">
                        Sign Up
                      </h1>
                      <form action="" onSubmit={RegisterUser}>
                        <div className="space-y-6 flex-col justify-center items-center">
                          {/* user Image Upload  */}
                          {/* <div onClick={handleImageClick} className="flex justify-center">
                      <img src={UserImage} className="w-20"></img>
                      <input
                        id="fileInput"
                        type="file"
                        className="w-full max-w-md overflow-clip hidden rounded-lg bg-gray-400/20 text-md text-white file:mr-4 file:cursor-pointer file:border-none file:bg-neutral-50 file:px-4 file:py-2 file:font-medium file:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-75 dark:border-neutral-700 dark:bg-neutral-900/50 dark:file:bg-neutral-900 dark:file:text-white dark:focus-visible:outline-white"
                        ref={ProfileImage}
                        
                      />
                    </div> */}

                          <input
                            type="text"
                            name="naame"
                            id="name"
                            className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none border-none"
                            placeholder="Name"
                            ref={UserName}
                          />
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none border-none"
                            placeholder="Email"
                            ref={Email}
                          />
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none"
                            placeholder="Password"
                            ref={Password}
                          />
                          <div className="flex justify-center">
                            <button
                              type="submit"
                              className="btn-primary w-[50%]"
                            >
                              Sign-Up
                            </button>
                          </div>
                          <div className="text-center">
                            <span className="">
                              Already Have Account?
                              <Link
                                to="/login"
                                className="text-xl ms-2 text-primary"
                              >
                                Log-In
                              </Link>
                            </span>
                          </div>
                        </div>
                      </form>
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

export default SignUp;
