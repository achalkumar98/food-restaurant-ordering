import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet }  from "react-router";
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

// Define AppLayout
const AppLayout = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="app">
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Outlet context={{ searchText }} /> {/* Ensures nested routes work */}
    </div>
  );
};

// Create Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Body />, errorElement: <Error /> }, // Default Route
      { path: "about", element: <AboutUs />, errorElement: <Error /> },
      { path: "contact", element: <ContactUs />, errorElement: <Error /> },
      { path: "grocery", element: <Grocery />, errorElement: <Error /> },
      { path: "restaurants/:resId", element: <RestaurantMenu />, errorElement: <Error /> },
      { path: "login", element: <Login />, errorElement: <Error /> },
      { path: "signup", element: <SignUp />, errorElement: <Error /> },
    ],
  },
]);

// Render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
