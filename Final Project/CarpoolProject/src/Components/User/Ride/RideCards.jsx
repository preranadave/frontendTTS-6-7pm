import React from "react";

//iocns
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";
function RideCards(props) {
  return (
    <>
      <div className="shadow-xl my-4 mx-4 p-2 rounded-xl bg-white hover:bg-blue-100">
        <div className="max-w-[98%] flex w-[98%] lg:max-w-[98%] lg:flex">
          <div className="h-48 lg:h-auto lg:w-56 md:w-[500px]  w-[full] mx-2 rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <div className="flex-col mx-auto items-center my-12">
              <img
                className="md:w-24 md:h-24 w-20 h-20 rounded-full mx-auto"
                src={props.driverprofile}
                alt="Driver"
              />
              <div className="text-md">
                <p className="text-gray-900 leading-none font-bold">
                  {props.drivername}
                </p>
              </div>
            </div>
          </div>
          <div className=" rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="flex">
              <div className="md:w-[500px] w-[full]">
                <div className="text-gray-700 text-base flex ">
                  <FaLocationDot size={20}/>
                  <span className="font-bold">From:</span>
                  <span>{props.from}</span>
                </div>
                <div className="text-gray-700 text-base my-2 flex">
                  <FaLocationDot size={20} />
                  <span className="font-bold">To:</span>
                  <span>{props.to}</span>
                </div>
                <div className="text-gray-700 text-base my-2 flex items-center">
                  <FaCalendarDays />
                  <span className="mx-1">{props.ridedate}</span>
                </div>
                <div className="text-gray-700 text-base my-2 flex items-center">
                  <FaUsers />
                  <span className="mx-1">{props.availableseats}</span>
                </div>
                <div className="text-gray-700 text-base my-2 flex items-center">
                <GrStatusInfo />
                  <span className="mx-1 font-bold">{props.status}</span>
                </div>
                
                <button className="btn-primary w-[95%] text-sm mx-auto">Book</button>
              </div>
              <p className="text-3xl font-bold text-gray-600 flex items-start">
                <FaRupeeSign size={32}/>
                {props.price}
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default RideCards;
