import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Menu() {
    const MenuItems = [
        {
            id: 101,
            name: "coffe",
            photo: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?cs=srgb&dl=pexels-chevanon-312418.jpg&fm=jpg",
            price: 225
        }, {
            id: 101,
            name: "tea",
            photo: "https://media.istockphoto.com/id/864607392/photo/image-of-a-glass-of-tea-in-street-market.webp?b=1&s=170667a&w=0&k=20&c=rOYheUoYiyQojSZidQLVcpQaWt9H8fnORYsWUMm8uZY=",
            price: 225
        }, {
            id: 101,
            name: "mojito",
            photo: "https://cookieandkate.com/images/2020/08/best-mojito-recipe-2.jpg",
            price: 225
        }, {
            id: 101,
            name: "lemonade",
            photo: "https://media.istockphoto.com/id/185285647/photo/lemonade.jpg?s=612x612&w=0&k=20&c=ZrOxo14Q-6-RI2Rzz8eWtbvr6x14upffYjPx7YRgnKY=",
            price: 225
        }

    ]
    return (
        <>
            <Header></Header>
            <div className="container mt-10">
                <h1 className="text-5xl font-bold text-center">Our Menu</h1>

                <div class="flex flex-row">
                    {MenuItems && MenuItems.map((items) => {
                        return (
                            <>

                                <div className="basis-1/4 m-5">
                                    <img src={items.photo} style={{ "width": "100%", "height": "300px" }}></img>
                                    <p className="text-center text-2xl">Coffe</p>
                                    <p className="text-center text-2xl">RS{items.price}</p>
                                </div>

                            </>
                            // <div className="basis-1/4 m-5">
                            //     <img src={items.photo} style={{"width":"100%","height":"300px"}}></img>
                            //     <p className="text-center text-2xl">Coffe</p>
                            //     <p className="text-center text-2xl">RS{items.price}</p>
                            // </div>
                        )
                    })}
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}
export default Menu