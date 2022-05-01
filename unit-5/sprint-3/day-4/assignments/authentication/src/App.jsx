
import './App.css';

import SearchIcon from '@mui/icons-material/Search';

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Checkout } from "./components/Checkout";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";

import { Routes, Route} from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "./contexts/AuthContext";
import { PrivateComponent } from "./components/PrivateComponents";

function App() {

  const { status, useremail } = useContext(AuthContext);
  // console.log('useremailapp:', useremail)
  // console.log('statusapp:', status)

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
          </>
        }></Route>
        <Route path="/checkout" element={
          <PrivateComponent>
            <>
              <Header />
              <Checkout />
            </>
          </PrivateComponent>
        }></Route>
        <Route path="/login" element={
          <>
            <Login />
          </>
        }></Route>  
        <Route path = "/logout" element={
          <>
            <Logout />
          </>
        }></Route>
        <Route path="/prime" element={
          <>
            <Header />
          </>
        }></Route>
        <Route path="/orders" element={
          <>
            <Header />
          </>
        }></Route>
     </Routes>
    </div>
  )
}

export default App;
