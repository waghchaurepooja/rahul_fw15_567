
import { AuthContext } from "../contexts/AuthContext";

import { useContext, useState } from "react";

export const Navbar = () =>{

    const { isAuth, Token, toggleAuth } = useContext(AuthContext);
    console.log('Token:', Token)

    return (
        <div>
            <button onClick={() =>{

                toggleAuth()

            }}>{isAuth ? "Logout" : "Login"}</button>
            {/* <p>{Token != "" ? `Token : ${Token}` : null}</p> */}
        </div>
    )
}