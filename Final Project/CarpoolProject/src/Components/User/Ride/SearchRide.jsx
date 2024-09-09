import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import Components
import Navbar from "../Navbar/Navbar";

//images
import RideBg from "../../../assets/images/ride-bg.png";
import axios from "axios";
function SearchRide() {
  //form object
  const Origin = useRef();
  const Destination = useRef();
  const [SelectedDate, SetSelectedDate] = useState(new Date());
  const AvailableSeats = useRef();
  const Price = useRef();
  const UserID = "2a8c";
  const DriverProfilePic =
    "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg";
  const DriverName = "prerna";
  //declaration

  const [Message, SetMessage] = useState(false);
  //date variables
  const today = new Date().toISOString().split("T")[0];
  const RideDate = useRef();
  //price variables

  const [pricevalue, setPricevalue] = useState();
  //location variables
  const [ShowOriginList, setOriginList] = useState(false);

  const [ShowDestinationList, setShowDestinationList] = useState(false);

  const [LocationData, SetLocationData] = useState();

  const [originvalue, setOriginvalue] = useState();

  const [destinationvalue, setDestinationnvalue] = useState();
  //functions
  useEffect(() => {
    axios.get(`http://localhost:8000/Locations`).then((response) => {
      SetLocationData(response.data);
    });
  });
  const SetOrigin = (e) => {
    Origin.current.value = e.id;
    setOriginvalue(e.City + "," + e.Address);
    console.log(Origin.current.value);
  };
  const SetDestination = (e) => {
    Destination.current.value = e.id;
    setDestinationnvalue(e.City + "," + e.Address);
    console.log(Origin.current.value);
  };
  // const PrintDate=()=>{
  //   console.log(SelectedDate.toLocaleDateString())

  //   console.log(SelectedDate.toLocaleTimeString())

  // }
  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPricevalue(value);
  };
  //send form data to api
  const CreateRide = (e) => {
    e.preventDefault();
    var RideDetails = {
      Origin: Origin.current.value,
      Destination: Destination.current.value,
      RideDate: SelectedDate.toLocaleDateString(),
      RideTime: SelectedDate.toLocaleTimeString(),
      AvailableSeats: AvailableSeats.current.value,
      Price: Price.current.value,
      Status: "Available",
      CreatedBy: UserID,
      DriverProfile: DriverProfilePic,
      DriverName: DriverName,
    };
    axios.post(`http://localhost:8000/Rides`, RideDetails).then(() => {
      SetMessage(true);
      if (Message == false) {
        setTimeout(() => {
          SetMessage(false);
        }, 3000);
      }
      e.target.reset();
      Origin.current.value.reset, setDestinationnvalue("");
      SetSelectedDate(new Date()), setPricevalue("");
    });
  };
  return (
    <>
      <div className="w-[90%] md:w-[480px] mx-auto p-4 bg-white/60  text-black  rounded-2xl shadow-md">
        <div>
          <h1 className="text-3xl text-center font-bold mb-5">
            Look For A Ride
          </h1>
          <form action="" onSubmit={CreateRide}>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="origin"
                  id="origin"
                  className="py-2 px-4 rounded-lg w-full bg-black/10 placeholder-black placeholder:font-bold outline-none border-none"
                  placeholder="Origin"
                  ref={Origin}
                  value={originvalue}
                  onFocus={() => {
                    setOriginList(true);
                  }}
                  onBlur={() => {
                    setOriginList(false);
                  }}
                />
                <div
                  className={`absolute md:w-[545px] w-[435px] md:h-[350px] h-[330px] shadow-2xl rounded-md  overflow-y-scroll scroll-smooth bg-yellow-100  p-2 ${
                    ShowOriginList
                      ? "opacity-100 z-[1040] duration-1000"
                      : "opacity-0 duration-1000 -z-[1040]"
                  } transition-all duration-1000`}
                >
                  <ul className="">
                    {LocationData &&
                      LocationData.map((item) => {
                        return (
                          <>
                            <li
                              className=" hover:bg-adminprimary/30 duration-700 my-2 p-2 text-black rounded-md flex flex-col cursor-pointer"
                              onClick={() => {
                                SetOrigin(item);
                              }}
                            >
                              <span className="font-bold">{item.City}</span>

                              <span>{item.Address}</span>
                            </li>
                          </>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="Destination"
                  id="Destination"
                  className="py-2 px-4 rounded-lg w-full bg-black/10 placeholder-black placeholder:font-bold outline-none border-none"
                  placeholder="Destination"
                  ref={Destination}
                  value={destinationvalue}
                  onFocus={() => {
                    setShowDestinationList(true);
                  }}
                  onBlur={() => {
                    setShowDestinationList(false);
                  }}
                />
                <div
                  className={`absolute md:w-[545px] w-[435px] md:h-[350px] h-[330px] shadow-2xl rounded-md  overflow-y-scroll scroll-smooth bg-yellow-100  p-2 ${
                    ShowDestinationList
                      ? "opacity-100 z-[1040] duration-700"
                      : "opacity-0 duration-700 -z-[1040]"
                  } transition-all duration-700`}
                >
                  <ul className="">
                    {LocationData &&
                      LocationData.map((item) => {
                        return (
                          <>
                            <li
                              className=" hover:bg-adminprimary/30 duration-700 my-2 p-2 text-black rounded-md flex flex-col cursor-pointer"
                              onClick={() => {
                                SetDestination(item);
                              }}
                            >
                              <span className="font-bold">{item.City}</span>

                              <span>{item.Address}</span>
                            </li>
                          </>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <DatePicker
                showTimeSelect
                showIcon
                dateFormat="dd/MM/yyyy h:mm aa"
                selected={SelectedDate}
                onChange={(date) => {
                  SetSelectedDate(date);
                }}
                minDate={new Date()}
                className="form-control form-control-solid w-250px px-4 rounded-lg md:w-[448px] w-[405px] bg-black/10 outline-none"
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
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={pricevalue}
                  ref={Price}
                  className="py-2 px-4 rounded-lg w-full bg-black/10 placeholder-black placeholder:font-bold  outline-none border-none"
                  placeholder="Price"
                  onChange={handlePriceChange}
                />
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
