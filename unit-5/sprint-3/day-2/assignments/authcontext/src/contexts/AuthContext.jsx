
import { createContext, useState } from "react";

import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{

    const [isAuth, setIsAuth] = useState(false)
    const [Token, setToken] = useState("");

    const toggleAuth = () =>{

        if(isAuth === false)
        {
            axios.post('https://reqres.in/api/login', {
                email: "eve.holt@reqres.in",
                password: "pistol"
            })
            .then(function (response) {
              console.log('response:', response)
              console.log(response.data);

              setToken(response.data.token);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        else{
            setToken("");
        }
        setIsAuth(!isAuth)
    }

    return (
        <AuthContext.Provider value={{isAuth, Token, toggleAuth}}>{children}</AuthContext.Provider>
    )
}