import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const ApplyNow = () => {
    return (
        <>
            <Header></Header>
            <div className="apply-now absolute">
                <div className="p-5">
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
            <Footer></Footer>
        </>
    )
}
export default ApplyNow