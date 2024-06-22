import React from "react";
function Header() {
    return (
        <>
            <div className="w-full p-4 bg-neutral-900 text-yellow-300 flex flex-row">
                <div className="basis-1/3 ms-5 m-4">
                    <label>Callus: (+91)545115451</label>
                </div>

                <div class="basis-1/3 ms-10">
                    <input type="text" placeholder="search anything here!" className="w-96 p-4 rounded rounded-sm"></input></div>
                <div class="basis-1/4 ms-56">
                    <span className="bi bi-facebook text-3xl text-yellow-300"></span>
                    <span className="bi bi-twitter text-3xl text-yellow-300 ms-3"></span>
                    <span className="bi bi-instagram text-3xl text-yellow-300 ms-3"></span>
                    <span className="bi bi-youtube text-3xl text-yellow-300 ms-3"></span>
                    
                </div>
            </div>
        </>
    )
}
export default Header