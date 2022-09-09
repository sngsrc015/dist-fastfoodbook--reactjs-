import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Checkout from "./Components/Pages/Checkout";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import MenuItem from "./Components/Pages/MenuItem";
import Card from "./Components/Tools/Card";
import Header from "./Components/Tools/Header";
import Signup from './Components/Pages/Signup';
import OrderSummery from "./Components/Pages/OrderSummery";
import {AuthProvider} from './Autoraization/auth'
import { RequireAuth } from "./Autoraization/RequiredAuth";
import { Profile } from "./Components/Pages/Profile";
import { Provider } from "react-redux";
export default function App() {

  return (
    <><AuthProvider>
      <Router>
        <Header/>
        <Routes>
          <Route element={<RequireAuth><Home/></RequireAuth>} path="/home" /> 
    <Route element={<RequireAuth><Checkout/></RequireAuth>} path="/final" /> 
          <Route element={<RequireAuth><MenuItem/></RequireAuth>} path="/card" />
          <Route element={<Login/>} path="/login" />
          <Route element={<Signup/>} path="/" />
          <Route element={"404 NOT FOUND"} path="*" />

          {/* <Route element={<RequireAuth><Profile/></RequireAuth>} path="/home" /> */}
          <Route element={<RequireAuth><OrderSummery/></RequireAuth>} path="/order" />



        </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}
