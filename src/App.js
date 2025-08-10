import { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Search from "./components/Search";
import Footer from "./components/Footer";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <Provider store={appStore}>
      <div className="app flex flex-col min-h-screen">
        <Header searchText={searchText} setSearchText={setSearchText} />
        <main className="flex-grow">
          <Outlet context={{ searchText }} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Body /> },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> },
      { path: "search", element: <Search /> }, 
      {
        path: "grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "restaurants/:resId", element: <RestaurantMenu /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
