import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
import AppLayout from "./layout/AppLayout";
import { replace } from "react-router";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import User from "./Pages/User";
import Cart from "./Pages/Cart";
import Likes from "./Pages/Likes";
import Checkout from "./Pages/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/edit_profile" element={<User />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/log_in" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
