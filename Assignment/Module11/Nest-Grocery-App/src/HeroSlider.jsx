import React, { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Slides = [
    {
      url: "../src/assets/images/slider1bg.jpg",
      maintext: "Don't Miss amazing Grocery Deals",
      subtext: "save upto 50% on your first order",
    },
    {
      url: "../src/assets/images/slider2bg.jpg",
      maintext: "Sign Up For Daily Newspaper",
      subtext: "sign up for daily newsletter",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      const IsFirsst = currentIndex === 0;
      const newvalue = IsFirsst ? 1 : 0;
      setCurrentIndex(newvalue);
    }, 3000);
  });
  const ChangeSlide = () => {
    const IsFirsstSlide = currentIndex === 0;
    const newIndex = IsFirsstSlide ? 1 : 0;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="hero-section mt-2 max-w-[1540px] h-[600px] w-full m-auto px-4 group">
      <div
        style={{ backgroundImage: `url(${Slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-1000 ease-in-out"
      >
        <div
          className="slider-heading w-[560px] ms-32 pt-48 "
          style={{ filter: "brightness(1.5)" }}
        >
          <h1 className="text-[60px] text-gray-800  duration-1000">
            {Slides[currentIndex].maintext}
          </h1>

          <h2 className="text-[30px] text-gray-600   duration-1000">
            {Slides[currentIndex].subtext}
          </h2>
        </div>
        <div className="subscribe-button relative group">
          <input
            type="text"
            className="rounded-3xl p-4 w-[560px] ms-32 mt-5"
            placeholder="Your Email Address"
          />
          <button className="absolute bg-green-500 rounded-[50px]  ease-in-out duration-500 py-4 px-8 text-white -translate-x-[130px] mt-5 group-hover:-translate-x-[50px]">
            {" "}
            Subscribe
          </button>
        </div>
      </div>
      <div className="opacity-0 group-hover:opacity-100  duration-700 ease-in-out absolute -translate-y-[810%]  p-1  cursor-pointer">
        <IoChevronBack
          className="p-1 group-hover:translate-x-10 -translate-x-[10px] duration-500 text-black bg-white rounded-full "
          size={30}
          onClick={ChangeSlide}
        />
      </div>
      <div className="opacity-0 group-hover:opacity-100  duration-700 ease-in-out absolute -translate-y-[810%] p-1 ms-5 right-5 cursor-pointer">
        <IoChevronForward
          className="p-1  text-black bg-white rounded-full group-hover:-translate-x-10 translate-x-[10px] duration-500"
          size={30}
          onClick={ChangeSlide}
        />
      </div>
      {/* <h1>Don't Miss amazing Grocery Deals</h1>
      <h2>Sign Up For Daily Newspaper</h2> */}
    </div>
  );
}

export default HeroSlider;
