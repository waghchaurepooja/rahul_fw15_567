
import { AuthContext } from "../contexts/AuthContext";

import { useState, useContext } from "react";

export const UserStatus = () =>{

    const { Token } = useContext(AuthContext);

    return (
        
        <div>
            <p>{Token !== "" ? "User Loged" : null}</p>
            <p>{Token !== "" ? `Token : ${Token}` : null}</p>
        </div>
       
    )
}