
import './App.css';

import { Navbar } from "./components/Navbar";

import { UserStatus } from "./components/UserStatus"

import { AuthContext } from "./contexts/AuthContext";

import { useState, useContext } from "react";

function App() {

  const { isAuth } = useContext(AuthContext);
  return (
    <div className="App">
      <Navbar />
      {isAuth ? <UserStatus /> : null}
    </div>
  );
}


export default App;
