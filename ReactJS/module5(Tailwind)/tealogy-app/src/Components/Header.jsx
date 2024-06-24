import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/images/banner-1.jpg"
const Header = () => {
    return (
        <>

            <div className="Header">
                {/* <img src={banner1} style={{ "width": "1700px", "height": "700px" }}></img>
 */}

                <div className="header-menu container bg-gray-700 p-3 mx-auto">
                    <div className="flex flex-row">
                        <div className="Logo basis-1/5 ms-8">
                            <img src="https://franchise.tealogy.in/wp-content/uploads/2024/06/tealogy-logo.png" width={"70%"}></img>
                        </div>
                        <div className="Navigation-Menu basis-1/1 ms-19 p-2">
                            <ul className="uppercase text-sm">
                                <li><Link to="/">Home</Link></li>

                                <li><Link to="">About Us</Link></li>
                                <li><Link to="">Our Presence</Link></li>
                                <li><Link to="">Our Menu</Link></li>
                                <li><Link to="">Benefits</Link></li>

                                <li><Link to="">Outlets</Link></li>

                                <li><Link to="/apply-now">Apply Now</Link></li>
                            </ul>
                        </div>
                        <div className="Apply-now basis-1/12 ms-28 p-2">
                            <Link to="/apply-now"><button type="button" className="bg-yellow-400 rounded rounded-3xl p-3 w-32 uppercase"> Apply Now</button></Link>
                        </div>
                    </div>
                </div>

            </div>


        </>)
}
export default Header