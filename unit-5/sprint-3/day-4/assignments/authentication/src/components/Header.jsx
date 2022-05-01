
import SearchIcon from '@mui/icons-material/Search';

import { useContext, useState } from "react"

import { BasketContext } from "../contexts/BasketContext";
import { AuthContext } from "../contexts/AuthContext";

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Header.css";

import { Link } from "react-router-dom";


// npm install @mui/icons-material
// npm install @emotion/react @emotion/styled
export const Header = () =>{

    const { Basket } = useContext(BasketContext);
    const { status } = useContext(AuthContext);

    return (
        <div className="header">
            <Link to="/">
            
                <img className="header__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" />

            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className = "header__searchIcon"/>
            </div>

            <div className="header__nav">
                {/* <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div> */}

                <Link style={{textDecoration : "none"}} to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>
                </Link>

                <Link style={{textDecoration : "none"}} to="/prime">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {status === false ?
                    <Link style={{textDecoration : "none"}} to="/login">
                        <div className="header__option">
                            <span className="header__optionLineOne">Hello Guest</span>
                            <span className="header__optionLineTwo">Sign In</span>
                        </div>
                    </Link>
                :
                    <Link style={{textDecoration : "none"}} to="/logout">
                        <div className="header__option">
                            <span className="header__optionLineOne">Hello Guest</span>
                            <span className="header__optionLineTwo">User Details</span>
                        </div>
                    </Link>

                }
                

                <Link style={{textDecoration : "none"}} to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{Basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}