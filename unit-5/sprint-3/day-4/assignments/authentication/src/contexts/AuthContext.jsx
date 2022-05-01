
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [status, setStatus] = useState(false);
    const [useremail, setUserEmail] = useState("");
    
    const handleStatus = (value, email) => {
        // console.log('email1:', email)
        // console.log('value1:', value)
        setStatus(value);
        
        setUserEmail(email);
    }
    
    // console.log('status2:', status)
    // console.log('useremail2:', useremail)
    return (
        <AuthContext.Provider value={{status, useremail, handleStatus}}>{ children }</AuthContext.Provider>
    )
}