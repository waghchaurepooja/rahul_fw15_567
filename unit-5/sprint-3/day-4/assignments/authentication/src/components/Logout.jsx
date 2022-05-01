
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../contexts/AuthContext";

import { useNavigate, Link } from "react-router-dom";

export const Logout = () => {

    const { handleStatus, status, useremail } = useContext(AuthContext);
    console.log('useremail:', useremail)
    const [userlogin, setUserLogin] = useState({});
    useEffect(() => {
        getData()
    },[])
    
    const getData = async () => {
        const data = await fetch("http://localhost:8080/register").then((data) =>
        data.json()
        )
        
        console.log('data:', data)
        for(var i = 0; i<data.length; i++) {
            if(data[i].email === useremail) {
                console.log('data[i]:', data[i])
                setUserLogin(data[i]);
            }
        }
    }

    const navigate = useNavigate();
    
    console.log('userlogin:', userlogin)
    return (
        <div>
            
            <Link to = "/">
                <button>Go To Home</button>
            </Link>
            <h3>Name : {userlogin.name}</h3>
            <h3>Email : {userlogin.email}</h3>
            <button onClick={() => {
                handleStatus(false,"")
                navigate("/", {replace : false});
            }}>Logout</button>
        </div>
    )
}