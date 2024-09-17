import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
//icons import

import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaArrowsAltV } from "react-icons/fa";
//import Components
import Navbar from "../Navbar/Navbar";
function BookRide() {
  const { id } = useParams();
  const [RideData, SetRideData] = useState();
  const [isExpanded, setExpanded] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:8000/Rides/${id}`).then((response) => {
      SetRideData(response.data);
    });
  });
  const toggleExpand = () => {
    isExpanded ? setExpanded(false) : setExpanded(true);
  };
  return (
    <>
      <Navbar></Navbar>
      {RideData && (
        <div className="scroll-smooth mt-5 md:max-w-[98%] lg:max-w-[50%]  mx-auto overflow-hidden">
          <div className="grid md:grid-cols-1 sm:grid-cols-1 p-2  ">
            <div
              className={`bg-adminprimary w-[97%] hidden md:flex items-center justify-between  p-2  text-sm cursor-pointer mx-auto rounded-md text-white px-5 overflow-hidden transition-all duration-500`}
              onClick={toggleExpand}
            >
              <div className="mx-1 basis-1/4">
                
                  {RideData.RideDate},{RideData.RideTime}
                
              </div>

              <div className="ms-5 basis-1/2">
                <div className="flex items-center w-[450px] mx-auto">
                  {RideData.Origin}
                  <FaArrowRight className="mx-2" />
                  {RideData.Destination}
                </div>
              </div>
              <div>
                <FaChevronDown
                  className={`transition-all duration-500 w-full basis-1/12${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            <div
              className={`text-sm leading-6 mx-3 my-3 transition-all duration-500 ${
                isExpanded
                  ? "opacity-100 max-h-[280px]"
                  : "opacity-0 max-h-[0px]"
              }`}
            >
              <figure className="relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                <div className="mt-2 text-slate-700 dark:text-slate-300  ">
                  <div className="text-gray-700 text-base flex ">
                    <FaLocationDot size={20} />
                    <span className="font-bold">From:</span>
                    <span>{RideData.Origin}</span>
                  </div>
                  <div className="text-gray-700 text-base my-2 flex">
                    <FaLocationDot size={20} />
                    <span className="font-bold">To:</span>
                    <span>{RideData.Destination}</span>
                  </div>
                  <div className="text-gray-700 text-base my-2 flex items-center">
                    <FaCalendarDays />
                    <span className="mx-1">
                      {RideData.RideDate},{RideData.RideTime}
                    </span>
                  </div>
                  <div className="text-gray-700 text-base my-2 flex items-center">
                    <FaUsers />
                    <span className="mx-1">{RideData.AvailableSeats}</span>
                  </div>
                  <div className="text-gray-700 text-base my-2 flex items-center">
                    <GrStatusInfo />
                    <span className="mx-1 font-bold">{RideData.Status}</span>
                  </div>

                  <div className="text-gray-700 text-base my-2 flex items-center">
                    <FaRupeeSign size={25} />
                    <span className="text-xl"> {RideData.Price}</span>
                  </div>
                </div>
                <figcaption className="flex items-center space-x-4">
                  <img
                    src={RideData.DriverProfile}
                    alt=""
                    className="flex-none w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex-auto justify-between items-center">
                    <div className="text-base text-slate-900 font-semibold dark:text-slate-200">
                      {RideData.DriverName}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="w-[50%] md:w-[90%] mx-auto lg:w-[50%]">
            <button
              onClick={() => Navigate(`/book-ride/${props.id}`)}
              className="btn-primary w-full text-sm mx-auto mt-5"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BookRide;
