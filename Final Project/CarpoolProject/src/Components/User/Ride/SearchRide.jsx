import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
//import Components
import Navbar from "../Navbar/Navbar";

//images
import RideBg from "../../../assets/images/ride-bg.png";
import axios from "axios";
import ViewRides from "./ViewRides";
function SearchRide({ onSearch }) {
  //declarations
  const Origin = useRef();
  const Destination = useRef();
  const AvailableSeats = useRef();
  //ustate variables
  
  const [availableSeatsvalue, steavailableSeatsvalue] = useState();
  const [SelectedDate, SetSelectedDate] = useState(new Date());
  const [originvalue, setOriginvalue] = useState();

  const [destinationvalue, setDestinationnvalue] = useState();

  const [Message, SetMessage] = useState(false);
  //date variables

  //appi data store variables

  const [LocationData, SetLocationData] = useState();

  //functions

  useEffect(() => {
    axios.get(`http://localhost:8000/Locations`).then((response) => {
      SetLocationData(response.data);
    });
  });

  const handleSearch = (e) => {
    e.preventDefault();
    let date = SelectedDate.toLocaleDateString();
   // let time = SelectedDate.getH();
    let fromloaction=Origin.current.value;
    let tolocation= Destination.current.value;
    let Seats=AvailableSeats.current.value
    onSearch(
      fromloaction,
      tolocation,
      date,
      Seats
    );
  };
  return (
    <>
      <div className="w-[90%] md:w-[480px] mx-auto p-4 bg-white/60  text-black  rounded-2xl shadow-md">
        <div>
          <h1 className="text-3xl text-center font-bold mb-5">
            Look For A Ride
          </h1>
          <form action="" onSubmit={handleSearch}>
            <div className="space-y-6">
              <div>
                <select
                  name="origin"
                  id="origin"
                  ref={Origin}
                  className="py-2 px-4 rounded-lg w-full bg-black/10 placeholder-black placeholder:font-bold outline-none border-none"

                >
                  {LocationData &&
                    LocationData.map((item) => {
                      return (
                        <>
                          <option
                            value={originvalue}
                            className="absolute md:w-[445px] flex w-[330px] md:h-[350px] h-[330px] shadow-2xl rounded-md  overflow-y-scroll scroll-smooth bg-yellow-100  p-2"
                          >
                            <span>{item.Address},</span>

                            <span>{item.City}</span>
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
              <div>
                <select
                  name="Destination"
                  id="Destination"
                  ref={Destination}
                  className="py-2 px-4 rounded-lg w-full bg-black/10 placeholder-black placeholder:font-bold outline-none border-none"
                >
                  {LocationData &&
                    LocationData.map((item) => {
                      return (
                        <>
                          <option
                            value={destinationvalue}
                            className="absolute md:w-[445px] flex w-[330px] md:h-[350px] h-[330px] shadow-2xl rounded-md  overflow-y-scroll scroll-smooth bg-yellow-100  p-2"
                          >
                            <span>{item.Address},</span>

                            <span>{item.City}</span>
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
              <div className="flex space-x-2">
                <DatePicker
                 
                  showIcon
                  dateFormat="dd/MM/yyyy"
                  selected={SelectedDate}
                  onChange={(date) => {
                    SetSelectedDate(date);
                  }}
                  minDate={new Date()}
                  className="h-[40px] px-4 rounded-lg w-full bg-black/10 placeholder-black placeholder:font-bold  outline-none border-none"
                ></DatePicker>

                <div className="flex space-x-2">
                  <input
                    type="number"
                    name="availableSeats"
                    id="availableSeats"
                    ref={AvailableSeats}
                    className="py-2 px-4 rounded-lg w-full bg-black/10 placeholder-black placeholder:font-bold  outline-none border-none"
                    placeholder="Available Seats"
                    min={1}
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary w-full">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchRide;
