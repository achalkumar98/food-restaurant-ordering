import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const [btnNameReact, setBtnNameReact] = useState("Login");

  // Suscribing to the state using Selector
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md border-b border-gray-300">
      <div>
        <img className="w-32 sm:w-40" src={LOGO_URL} alt="Logo" />
      </div>
      <nav>
        <ul className="flex items-center gap-x-6 text-gray-700 font-medium">
          <li>Online: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="hover:text-green-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-500 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-green-500 transition">
              Grocery
            </Link>
          </li>
          <li className="relative">
            <Link to="/cart" className="hover:text-green-500 transition">
              Cart 🛒
            </Link>
            <div className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-2">
              <p className="text-sm">{cartItems.length}</p>
            </div>
          </li>
          <li
            className="hover:text-green-500 transition"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
