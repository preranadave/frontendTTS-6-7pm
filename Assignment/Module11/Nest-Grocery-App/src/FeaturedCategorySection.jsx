import React from "react";
import FeaturedCategoryCards from "./FeaturedCategoryCards";
import FeaturedItems from "./FeaturedItems";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function FeaturedCategorySection() {
    const SlideLeft=()=>{
        var slider =document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft-500;
    }
    const SlideRight=()=>{
        var slider= document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft+500;
    }
  return (
    <div className="mt-2 py-5 px-5 featured-categories group">
      <div className="flex flex-row">
        <h1 className="text-3xl">Featured Categoreis</h1>
        <ul className="list-none flex flex-row mt-2 ms-24">
          <li className="mx-2">Cake & Milk</li>
          <li className="mx-2">Coffee & Teas</li>
          <li className="mx-2">Pet foods</li>
          <li className="mx-2">Vegetables</li>
        </ul>
      </div>
      <div className="relative">
      <IoIosArrowRoundBack size={40} className="bg-gray-200 rounded-full absolute top-20 p-2 z-10 hover:bg-green-500 cursor-pointer opacity-0 group-hover:opacity-100 duration-500" onClick={SlideLeft}/>
        <div id="slider" className="grid grid-flow-col auto-cols-max items-center mt-6 w-full h-[200px] overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide">
          {FeaturedItems.map((cat) => (
            <FeaturedCategoryCards
              key={cat.id}
              catImg={cat.CategoryImage}
              catTitle={cat.CategoryTitle}
              catItemCount={cat.CategoryItemCount}
              catBgColor={cat.backgroundCol}
            />
          ))}
        </div>
        <IoIosArrowRoundForward size={40} className="bg-gray-200 rounded-full absolute top-20 right-1 translate-x-5 p-2 hover:bg-green-500 cursor-pointer opacity-0 group-hover:opacity-100 duration-500" onClick={SlideRight}/>
      </div>
    </div>
  );
}

export default FeaturedCategorySection;
