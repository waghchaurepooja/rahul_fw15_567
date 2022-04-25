
import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) =>{

    const [Language, setLanguage] = useState("en");

    const handleLanguage = () =>{
        setLanguage(Language === "en" ? "hi" : "en");
    }

    return (
        <LanguageContext.Provider value = {{Language, handleLanguage }}>{children}</LanguageContext.Provider>
    )
}