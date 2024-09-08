import React from "react";
// Hero Images
import HeroImage from "../../../assets/images/hero-image1.jpg";
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
function HeroSection() {
  //declarations
  const HeroBgStyle = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    width: "98%",
    position: "relative",
  };
  const Navigate= useNavigate();
  
  const today = new Date().toISOString().split('T')[0];
  return (
    <>
      <div style={HeroBgStyle} className="md:mt-5 mt-2 md:w-[80%]  mx-auto rounded-2xl">
        <div className="min-h-[600px] md:min-h-[200px] rounded-2xl pb-10 md:pt-10 bg-gradient-to-tl from-black/100 via-black-500/50 to-primary/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:gap-48  gap-5 text-white">
              {/* Hero Left Side */}
              <div className="flex flex-col items-center mt-5 text-center md:gap-5 gap-5 px-3 lg:items-start lg:text-left lg:max-w-[450px]">
                <h1 className="text-5xl lg:text-7xl font-bold">
                  Join us, As a Driver.
                </h1>
                <p className="hidden md:block">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum porro quos architecto adipisci earum quis illum fugit
                  cum labore voluptate? Cum beatae perspiciatis nemo repellat
                  nobis quis, possimus est delectus!
                </p>
                <button className="btn-primary text-xl flex gap-2" onClick={()=>{Navigate("/crate-driver-account")}}>
                  <span>
                    <CiCirclePlus size={26} />
                  </span>
                  Publish A Ride
                </button>
              </div>
              {/* Hero Passenger Ride */}
              <div className="w-[90%] md:w-[480px] mx-auto p-4 bg-white/60  text-black  rounded-2xl shadow-2xl">
                <div>
                  <h1 className="text-3xl text-center font-bold mb-5">
                    Look For A Ride
                  </h1>
                  <div className="space-y-6">
                    <input
                      type="text"
                      name="origin"
                      id="origin"
                      className="py-2 px-4 rounded-lg w-full bg-black/10 placeholder-black placeholder:font-bold outline-none border-none"
                      placeholder="Origin"
                    />
                    <input
                      type="text"
                      name="destination"
                      id="destination"
                      className="py-2 px-4 rounded-lg w-full bg-black/10 placeholder-black placeholder:font-bold  outline-none border-none"
                      placeholder="destination"
                    />
                    <input
                      type="date"
                      name="ridedate"
                      id="ridedate"
                      min={today}
                      className="py-2 px-4 rounded-lg w-full bg-black/10 placeholder-black placeholder:font-bold  outline-none"
                    />
                    <input
                      type="number"
                      name="passenger"
                      id="passenger"
                      className="py-2 px-4 rounded-lg w-full bg-black/10 placeholder-black placeholder:font-bold  outline-none border-none"
                      placeholder="Passenger"
                      min={1}
                      max={5}
                    />
                    <button className="btn-primary w-full">Search</button>
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

export default HeroSection;
