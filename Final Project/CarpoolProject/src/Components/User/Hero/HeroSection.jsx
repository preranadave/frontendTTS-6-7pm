import React, { useEffect, useState } from "react";
// Hero Images
import HeroImage from "../../../assets/images/hero-image1.jpg";
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
//components
import SearchRide from "../Ride/SearchRide";
import axios from "axios";
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
  
  const Navigate = useNavigate();
  const [RideDetails, setRideDetails] = useState([]);
  //fetch ride details
  const GetRides = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/Rides`);
      setFilteredRides(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetRides();
  }, [RideDetails]);
  const [filteredRides, setFilteredRides] = useState(RideDetails);

  const handleSearch = (originvalue, destinationvalue, SelectedDate, availableSeatsvalue) => {
    const results = rides.filter((ride) => {
      const matchesLocation = ride.location
        .toLowerCase()
        .includes(location.toLowerCase());
      const matchesDate = date ? ride.date === date : true; // If no date is provided, match all
      return matchesLocation && matchesDate;
    });
    setFilteredRides(results);
  };
  return (
    <>
      <div
        style={HeroBgStyle}
        className="md:mt-5 mt-2 md:w-[80%]  mx-auto rounded-2xl"
      >
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
                <button
                  className="btn-primary text-xl flex gap-2"
                  onClick={() => {
                    Navigate("/crate-driver-account");
                  }}
                >
                  <span>
                    <CiCirclePlus size={26} />
                  </span>
                  Publish A Ride
                </button>
              </div>
              {/* Hero Passenger Ride */}
              <SearchRide onSearch={handleSearch} ></SearchRide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
