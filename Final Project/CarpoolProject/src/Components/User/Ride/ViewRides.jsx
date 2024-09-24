import React, { useEffect, useRef, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
//import Components
import Navbar from "../Navbar/Navbar";
import SearchRide from "./SearchRide";
import RideCards from "./RideCards";
import SearchedRideList from "./SearchedRideList";

//images

function ViewRides() {
  const today = new Date().toISOString().split("T")[0];

  const [RideDetails, setRideDetails] = useState([]);

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
  const [filteredRides, setFilteredRides] = useState(RideDetails);

  const handleSearch = (fromloaction, tolocation, date, Seats) => {
    const results = RideDetails.filter((ride) => {
      const matchesOrigin = ride.Origin.toLowerCase().includes(
        fromloaction.toLowerCase()
      );

      const matchesDestination = ride.Destination.toLowerCase().includes(
        tolocation.toLowerCase()
      );

      const matchesDate = date ? ride.RideDate === date : true; // If no date is provided, match all
      console.log(matchesDate);
      console.log(ride.RideDate);
      
      console.log(ride.date);
      // const matchesTIme = time ? ride.RideTime == time : true; // If no date is provided, match all
      const matchesSeats = ride.AvailableSeats == Seats; // If no date is provided, match all

      return matchesOrigin && matchesDestination && matchesDate && matchesSeats;
    });

    console.log(date);
    setFilteredRides(results);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="md:mt-5 mt-2 md:max-w-[95%] w-[95%] mx-auto rounded-2xl">
        <div className="min-h-[600px] md:min-h-[200px] rounded-2xl ">
          <div className="grid grid-cols-1 lg:grid-cols-2  text-white">
            {/* Search Ride form */}
            <div className="h-[400px] md:h-full rounded-tl-[16px] rounded-tr-[16px] md:rounded-tr-[0px] md:rounded-tl-[16px] md:rounded-bl-[16px] text-center  lg:text-left lg:max-w-[66%]">
              <SearchRide onSearch={handleSearch} />
            </div>

            <div className="md:h-[660px] md:max-w-[98%] lg:w-[98%] w-[98%] overflow-y-auto scroll-smooth">
              {/* {RideDetails.map((ride)=>(
                
              <div className="grid grid-cols-1 lg:grid-cols-2">

              </div>
              ))} */}
              {/* List of rides */}
              <SearchedRideList rides={filteredRides}></SearchedRideList>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewRides;
