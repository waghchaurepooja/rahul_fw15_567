
import { useContext } from "react";

import { Navigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export const PrivateComponent = ({children}) =>{
    const { status } = useContext(AuthContext);

    if(!status)
    {
        
        return (
            <Navigate to = "/login" replace = {false}  />
        )
    }

    return children;
}