import React from "react";

function FeaturedCategoryCards(props) {
  return (
    <>
      <div className="w-[140px] rounded-lg mx-4 px-3 py-2 ease-in-out duration-500 hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: `${props.catBgColor}` }}>
        <img
          className="w-[90px] mx-auto hover:scale-125 ease-in-out duration-300"
          src={props.catImg}
          alt="Sunset in the mountains"
        />
        <div className="py-4">
          <div class="font-bold text-[12px] mb-2 text-center">
            {props.catTitle}
          </div>
          <p className="text-gray-700 text-base text-center">
            {props.catItemCount}
          </p>
        </div>
      </div>
    </>
  );
}

export default FeaturedCategoryCards;
