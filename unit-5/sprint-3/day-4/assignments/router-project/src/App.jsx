
import './App.css';

import SearchIcon from '@mui/icons-material/Search';

import { Header } from "./components/Header";

import { Home } from "./components/Home";

import { Checkout } from "./components/Checkout";

import { Routes, Route } from "react-router-dom";

function App() {
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
          <>
            <Header />
            <Checkout />
          </>
        }></Route>
     </Routes>
    </div>
  )
}

export default App;
