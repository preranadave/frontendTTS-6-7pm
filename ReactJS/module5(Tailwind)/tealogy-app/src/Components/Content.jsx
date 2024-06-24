import React from "react";
import { Link } from "react-router-dom";
const Content = () => {
    return (
        <>

            <div className="frenchise-form p-5 ms-28 me-28">
                <div className="flex flex-row">
                    <div className="basis-1/2 p-5">
                        <h1 className="text-5xl font-bold">TEALOGY</h1>
                        <p className="text-justify mt-5">Tealogy is an Indian cafe chain that focuses on tea-based beverages. Tealogy was founded in 2018 in Indore, India. Now we have 320+ tea cafe outlets across India. We offer a variety of tea and beverages with some snacks as well. We provide the best taste of the kulhad tea & coffee at pocket prices. We always try to provide the best experience and complete satisfaction to our customers through our services with our variety of foods, beverages.
                        </p>
                        <p className="text-justify mt-5">We provide the best place for sitting in our cafe where you can enjoy yourself with your family and friends and can make some unforgettable memories with them. At Tealogy, we are not only serving food and beverages. But we also try to make our customers happy by serving tastes that rejuvenate the mood.</p>
                        <div className="flex flex-row mt-10">

                            <div className="basis-1/3">
                                <h1 className="text-6xl font-bold">140+</h1>
                                <h6 className="text-xl font-bold">Cities</h6>
                            </div>
                            <div className="basis-1/3">
                                <h1 className="text-6xl font-bold">140+</h1>
                                <h6 className="text-xl font-bold">Cities</h6>
                            </div>
                            <div className="basis-1/3 text-5xl font-bold">
                                <h1 className="text-6xl font-bold">140+</h1>
                                <h6 className="text-xl font-bold">Cities</h6>
                            </div>
                        </div>

                        <Link to=""><button type="button" className="bg-yellow-400 rounded rounded-3xl p-3 w-32 uppercase mt-16"> Apply Now</button></Link>

                    </div>
                    <div className="basis-1/2 p-5">
                        <div className="reg-form bg-yellow-400 p-12 rounded rounded-2xl ">
                            <h1 className="text-4xl font-bold">READY TO BREW UP SUCCESS WITH TEALOGY?</h1>
                            <form className="mt-10">
                                <div className="flex flex-row">
                                    <input type="text" className="basis-1/2 p-2 m-2 rounded rounded-xl border border-none outline-none" placeholder="Name*"></input>

                                    <input type="email" className="basis-1/2 p-2 m-2 rounded rounded-xl border border-none outline-none" placeholder="Email*"></input>

                                </div>
                                <div className="flex flex-col">
                                    <input type="text" className="p-2 m-2 rounded rounded-xl border border-none outline-none" placeholder="Contact Number*"></input>


                                </div>
                                <div className="flex flex-row">
                                    <input type="text" className="basis-1/2 p-2 m-2 rounded rounded-xl border border-none outline-none" placeholder="City*"></input>

                                    <input type="text" className="basis-1/2 p-2 m-2 rounded rounded-xl border border-none outline-none" placeholder="Zip / Postal code*"></input>

                                </div>
                                <div className="flex flex-col">
                                    <select className="p-2 m-2 rounded rounded-xl border border-none outline-none">
                                        <option>1 Lakh</option>
                                        <option>5 Lakh</option>
                                        <option>10 Lakh</option>
                                    </select>


                                </div>
                                <div className="flex flex-col">
                                    <input type="text" className="p-2 m-2 rounded rounded-xl border border-none outline-none" placeholder="Yor message*"></input>


                                </div>
                                <button type="submit" className="bg-gray-800 text-white font-bold uppercase p-2 m-5">Request a call back!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-presence p-5 ms-28 me-28">
                <div className="flex flex-row">
                    <div className="basis-1/2 p-5 mt-32">
                        <h1 className="text-5xl font-bold">Our Presence</h1>
                        <p className="text-justify mt-14">We have 320+ outlets all over India and more than 15+ outlets only at Indore. We offer franchise opportunities all over India. If you are passionate about business or want to be an entrepreneur! fill the below mention franchise details form and complete the first step towards your dream business. This is not only the café franchise but also a platform to connect passionate Entrepreneurs like you.</p>

                        <Link to=""><button type="button" className="bg-yellow-400 rounded rounded-3xl p-3 w-32 uppercase mt-16"> Apply Now</button></Link>

                    </div>
                    <div className="basis-1/2 p-5">
                        <img src="https://franchise.tealogy.in/wp-content/uploads/2024/04/outlet-map-tealogy.jpeg"></img>
                    </div>
                </div>
            </div>
        </>)
}
export default Content