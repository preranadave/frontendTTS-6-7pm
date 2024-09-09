import React, { useEffect, useRef, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
//import Components
import Navbar from "../Navbar/Navbar";
import SearchRide from "./SearchRide";
import RideCards from "./RideCards";

//images

function ViewRides() {
  const today = new Date().toISOString().split("T")[0];
  const [RideDetails, setRideDetails] = useState([]);
  //fetch ride details
  const GetRides = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/Rides`);
      setRideDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetRides();
  }, [RideDetails]);
  return (
    <>
      <Navbar></Navbar>
      <div className="md:mt-5 mt-2 md:w-[95%] w-[95%]  mx-auto rounded-2xl">
        <div className="min-h-[600px] md:min-h-[200px] rounded-2xl ">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-2  gap-1  text-white">
            {/* Driver Left Side */}
            <div className="h-[400px] md:h-full rounded-tl-[16px] rounded-tr-[16px] md:rounded-tr-[0px] md:rounded-tl-[16px] md:rounded-bl-[16px] text-center  lg:text-left lg:max-w-[66%]">
              <SearchRide />
            </div>
            {/* Driver  Account Form */}

            <div className="md:h-[660px] md:w-[800px] lg:w-[900px] w-[99%] md:-translate-y-5  md:-translate-x-44 overflow-y-auto scroll-smooth">
              {/* {RideDetails.map((ride)=>(
                
              <div className="grid grid-cols-1 lg:grid-cols-2">

              </div>
              ))} */}
              <div className="flex-col p-2">
              {RideDetails &&
                RideDetails.map((ride) => (
                
                    
                    <RideCards
                    key={ride.id}
                    from={ride.Origin}
                    to={ride.Destination}
                    ridedate={ride.RideDate}
                    availableseats={ride.AvailableSeats}
                    price={ride.Price}
                    status={ride.Status}
                    driverprofile={ride.DriverProfile}
                    drivername={ride.DriverName}
                    />

                  
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewRides;
