
import "./Home.css";

import { Product } from "./Product";

export const Home = () =>{

    return (
        <div className="home">
            <div className="home__container">
                <img className="home_image" src="https://m.media-amazon.com/images/I/61fEincAu0L._SX3000_.jpg" alt="" />
            

                <div className="home__row">
                    <Product id="12321341" title="The lean startup" price={29999.99} image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/UHI/D44040375_IN_PC-Electronics-BAU-GW-Creatives_758x608_dbcc._SY304_CB621866240_.jpg" rating={5} />
                    <Product id="49538094" title="Mens Track Pants" price={239.0} image="https://m.media-amazon.com/images/I/71Kkz+1ZxvL._AC_UL320_.jpg" rating={4} />
                </div>

                <div className="home__row">
                    <Product id="4903850" title="boAt Airdopes 141 True Wireless Earbuds with 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)" price={1499} rating={4} image="https://m.media-amazon.com/images/I/51HBom8xz7L._SY450_.jpg" />
                    <Product id="23445930" title="iQOO 9 SE 5G (Sunset Sierra, 8GB RAM, 128GB Storage) | Qualcomm Snapdragon 888 | 66W Flash Charge | Upto 12 Months No Cost EMI" price={33950} image="https://m.media-amazon.com/images/I/51OYalGc88L._SY741_.jpg" rating={4} />
                    <Product id="3254354345" title="HP 245 G8 AMD Ryzen 5 - 3500U 14 inch Laptop (8GB RAM/1TB HDD/Windows 10 /Radeon Vega 8 Graphics/NO ODD) 365R8PA (1.52kg, Dark ash Silver)" price={37990} image="https://m.media-amazon.com/images/I/71HVv3+S1vS._SX679_.jpg" rating={5} />
                    <Product id="3654354345" title="HP 245 G8 AMD Ryzen 5 - 3500U 14 inch Laptop (8GB RAM/1TB HDD/Windows 10 /Radeon Vega 8 Graphics/NO ODD) 365R8PA (1.52kg, Dark ash Silver)" price={37990} image="https://m.media-amazon.com/images/I/71HVv3+S1vS._SX679_.jpg" rating={5} />
                </div>

                <div className="home__row">
                    <Product id="90829332" title="Lenovo Casual Laptop Backpack B210 15.6-inch Water Repellent Black" price={719} image="https://m.media-amazon.com/images/I/61MUbvslk2L._SX569_.jpg" rating={5} />
                </div>

                <div className="home__row">
                    <Product id="49056850" title="boAt Airdopes 141 True Wireless Earbuds with 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)" price={1499} rating={4} image="https://m.media-amazon.com/images/I/51HBom8xz7L._SY450_.jpg" />
                    <Product id="2334223430" title="iQOO 9 SE 5G (Sunset Sierra, 8GB RAM, 128GB Storage) | Qualcomm Snapdragon 888 | 66W Flash Charge | Upto 12 Months No Cost EMI" price={33950} image="https://m.media-amazon.com/images/I/51OYalGc88L._SY741_.jpg" rating={4} />
                    <Product id="325435345345" title="HP 245 G8 AMD Ryzen 5 - 3500U 14 inch Laptop (8GB RAM/1TB HDD/Windows 10 /Radeon Vega 8 Graphics/NO ODD) 365R8PA (1.52kg, Dark ash Silver)" price={37990} image="https://m.media-amazon.com/images/I/71HVv3+S1vS._SX679_.jpg" rating={5} />
                    <Product id="3654353242345" title="HP 245 G8 AMD Ryzen 5 - 3500U 14 inch Laptop (8GB RAM/1TB HDD/Windows 10 /Radeon Vega 8 Graphics/NO ODD) 365R8PA (1.52kg, Dark ash Silver)" price={37990} image="https://m.media-amazon.com/images/I/71HVv3+S1vS._SX679_.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}