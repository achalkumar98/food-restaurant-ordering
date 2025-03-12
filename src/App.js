
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router"; 
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";

const AppLayout = () => {
  const [searchText, setSearchText] = useState("");

return (
    <div className="app">
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Outlet context={{ searchText }} />
    </div>
  );
};


const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Body />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="grocery" element={<Grocery />} />
        <Route path="restaurants/:resId" element={<RestaurantMenu />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
);

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
