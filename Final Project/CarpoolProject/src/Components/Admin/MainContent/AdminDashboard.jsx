import React from "react";
import { Bar } from "react-chartjs-2";
function AdminDashboard() {
  const FetchUser = () => {};
  const FetchRide = () => {};
  const statistics = {
    totalUsers: 150,
    totalRides: 300,
    totalContacts: 25,
    totalDrivers: 50,
    totalLocations: 10,
  };
  const data = {
    labels: ["Users", "Rides", "Contacts", "Drivers", "Locations"],
    datasets: [
      {
        label: "Statistics",
        data: [
          statistics.totalUsers,
          statistics.totalRides,
          statistics.totalContacts,
          statistics.totalDrivers,
          statistics.totalLocations,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
        ],
      },
    ],
  };
  return (
    <>
      <div className="h-screen">
        <h2 className="text-2xl font-bold mb-5 p-5">Dashboard Home</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          <div className="bg-yellow-300 p-5 rounded shadow-md">
            <h3 className="font-bold text-xl">Total Users</h3>
            <p className="text-3xl">150</p>
          </div>
          <div className="bg-orange-400 p-5 rounded shadow-md">
            <h3 className="font-bold text-xl">Total Rides</h3>
            <p className="text-3xl">300</p>
          </div>
          <div className="bg-green-400 p-5 rounded shadow-md">
            <h3 className="font-bold text-xl">Total Contacts</h3>
            <p className="text-3xl">25</p>
          </div>
          {/* <div className="bg-white p-5 rounded shadow-md">
          <h3 className="font-bold text-xl">Total Drivers</h3>
          <p className="text-3xl">50</p>
        </div>
        <div className="bg-white p-5 rounded shadow-md">
          <h3 className="font-bold text-xl">Total Locations</h3>
          <p className="text-3xl">10</p>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
