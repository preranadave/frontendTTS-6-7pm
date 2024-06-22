import React from "react";
const Footer = () => {
    return (
        <>
            <div className="footer absolute">
                <div className=" bg-gray-700 p-10 text-white">
                    <img src="https://franchise.tealogy.in/wp-content/uploads/2024/06/tealogy-logo.png">
                    </img>
                    <p className="mt-10">Contact us today to learn more about franchise opportunities and start your journey towards a rewarding tea business!</p>
                    <div className="contact-details mt-10">
                        <span className="mt-5 mb-5"><span className="bi bi-phone"></span>+9155154545415</span>
                        <hr className="w-80 mt-5 mb-5"></hr>
                        <span className="mt-10"><span className="bi bi-geo-alt-fill"></span>+Head Office - 503-A/B, 5th Floor Princess Business Sky Park Block no. 23,24 SCH No.54, PU-3 Commercial, Opp C21, AB Rd, Indore, Madhya Pradesh 452001
                        </span>
                        <hr className="w-80 mt-5 mb-5"></hr>
                        <span className="mt-10">  <span className="bi bi-geo-alt-fill"></span>+Company Outlet - UG - 7, PL-14, Airen Heights PU-3, Sch. No 54, Vijay Nagar, Indore</span>
                     
                    </div>
                </div>


            </div>
        </>)
}
export default Footer