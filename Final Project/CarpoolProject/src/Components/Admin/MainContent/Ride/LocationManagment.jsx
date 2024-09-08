import React, { useEffect, useState } from "react";
//import components
import AddLocation from "./AddLocation";

import DataTable from "react-data-table-component";
import axios from "axios";
//icons import
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
function LocationManagement() {
    const coulumns = [
        {
          name: "City",
          selector: (row) => row.City,
          sortable: true,
        },
        {
          name: "Address",
          selector: (row) => row.Address,
          sortable: true,
        },
        
        {
          name: "Action",
          cell: (row) => (
            <span>
              <button className="bg-blue-400 text-white p-2 rounded"><span><FaPencilAlt/></span></button>
              <button className="bg-red-500 text-white p-2 rounded mx-2">
                <span><MdDelete/></span>
              </button>
            </span>
          ),
        },
      ];
      
  //location data object destructring
  const [LocationData, SetLocationData] = useState();
  //functions
  const GetLocations = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/Locations`);
      SetLocationData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetLocations();
  }, [LocationData]);
  return (
    <>
      <h1 className="text-xl font-bold p-4">Location Management</h1>
      <div className="flex-col gap-3">
        <div className=" bg-white  p-4 m-2 shadow-lg">
            <AddLocation></AddLocation>
        </div>

        <div className=" bg-white  p-4 m-2 shadow-lg">
        <DataTable
          columns={coulumns}
          data={LocationData}
          pagination
          fixedHeader
          highlightOnHover
          fixedHeaderScrollHeight="380px"
          
        />
        </div>
      </div>
    </>
  );
}

export default LocationManagement;
