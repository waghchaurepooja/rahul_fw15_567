
import { Link, useNavigate, Navigate } from "react-router-dom";

import { useContext, useState } from "react";

import { AuthContext } from "../contexts/AuthContext";

import "./Login.css"

export const Login = () => {

    const { handleStatus } = useContext(AuthContext);

    const [registerdata, setRegisterData] = useState({
        name : "",
        mobile : "",
        email : "",
        password : "",
    })
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true);

    const navigate = useNavigate();
    
    // console.log('password:', password)
    // console.log('email:', email)

    const signIn = async (event) => {
        event.preventDefault();
        const data = await fetch("http://localhost:8080/register").then((data) =>
        data.json(),
        )
        // console.log('data:', data)

        if(data.length === 0) {
            alert("You do not have any account Please register your self Thank You");
            return;
        }

        for(var i = 0; i<=data.length; i++) {
            // console.log('data1:', data)
            if(data[i].email === email) {
                handleStatus(true,email);
                navigate("/", {replace : false})
            }
            else {
                alert("You do not have any account please register your self Thank You")
            }
        }
        
    }

    const register = (event) => {

        event.preventDefault();
        setLogin(!login);
    }


    const handleChange = (e) =>{
        const { name , value } = e.target;
        // console.log('value:', value)
        // console.log('name:', name)
        setRegisterData({
            ...registerdata,
            [name] : value,
        })
    }


    const signUp = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/register", {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body :  JSON.stringify(registerdata)
        })
        .then(() =>{
            setLogin(!login);
        })
    }

    return (
        login ? 
            <div className="login">
                <Link to = "/">
                    <img className="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" />
                </Link>

                <div className="login__container">
                    <h1>Sign-in</h1>
                    <form onSubmit={signIn} action="">
                        <h5>E-mail</h5>
                        <input onChange={(event) =>{
                            setEmail(event.target.value);
                        }} value={email} name="email" type="text" />

                        <h5>Password</h5>
                        <input onChange={(event) =>{
                            setPassword(event.target.value);
                        }} value={password} type="password" name="password" id="" />

                        <button className="login__signInButton" type="Submit">Sign in</button>
                    </form>

                    <p>
                        By signing-in you agree to the AMAZON CLONE conditons of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and our Interest-Based
                        Ads Notice.
                    </p>

                    <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
                </div>
            </div> : 
        
            <div className="login">
            <Link to = "/">
                <img className="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-up</h1>
                <form onSubmit={signUp} action="">
                    <h5>Your Name</h5>
                    <input onChange={handleChange} name="name" type="text" />

                    <h5>Mobile</h5>
                    <input onChange={handleChange} name="mobile" type="number" />

                    <h5>E-mail</h5>
                    <input onChange={handleChange} name="email" type="text" />

                    <h5>Password</h5>
                    <input onChange={handleChange} type="password" name="password" id="" />

                    <button className="login__signInButton" type="Submit">Sign Up</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON CLONE conditons of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based
                    Ads Notice.
                </p>

                <button onClick={register} className="login__registerButton">You have account keep login</button>
            </div>
        </div>
    )
}