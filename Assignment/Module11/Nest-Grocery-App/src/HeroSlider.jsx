import React from "react";
import FirstSlider from "../src/assets/images/slider1.jpg";

import SecondSlider from "../src/assets/images/slider2.jpg";
function HeroSlider() {
  const Slides = [
    {
      url: "../src/assets/images/slider1.jpg",
    },
    {
      url: "../src/assets/images/slider2.jpg",
    },
  ];

  return (
    <div className="hero-section mt-2 max-width-[1440px] h-[780px] w-full m-auto px-4">
      <div
        style={{ backgroundImage: `url(${Slides[0].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <h1>Don't Miss amazing Grocery Deals</h1>
      <h2>Sign Up For Daily Newspaper</h2>
    </div>
  );
}

export default HeroSlider;
