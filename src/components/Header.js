import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { MapPin, Search, Info, ShoppingCart, User } from "lucide-react";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [btnNameReact, setBtnNameReact] = useState("Sign In");

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Section - Logo + Location */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link to="/">
            <img src={LOGO_URL} alt="Logo" className="w-18 sm:w-22" />
          </Link>

          {/* Location Selector */}
          <div className="flex items-center gap-2 cursor-pointer">
            <MapPin size={18} className="text-orange-500" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-gray-800">Other</span>
              <span className="text-xs text-gray-500 truncate max-w-[180px]">
                Bhilai Steel Plant, Bhilai, Chhattisgarh...
              </span>
            </div>
            <span className="text-orange-500 font-bold text-lg">▾</span>
          </div>
        </div>

        {/* Right Section - Menu Icons */}
        <nav className="flex items-center gap-6 text-gray-700 font-medium">
          <Link
            to="/search"
            className="flex items-center gap-2 hover:text-orange-500"
          >
            <Search size={18} />{" "}
            <span className="hidden sm:inline">Search</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-orange-500"
          >
            <Info size={18} /> <span className="hidden sm:inline">About</span>
          </Link>
          <Link
            to="/grocery"
            className="flex items-center gap-2 hover:text-orange-500"
          >
            <ShoppingCart size={18} />{" "}
            <span className="hidden sm:inline">Grocery</span>
          </Link>
          <button
            onClick={() =>
              setBtnNameReact((prev) =>
                prev === "Sign In" ? "Sign Out" : "Sign In"
              )
            }
            className="flex items-center gap-2 hover:text-orange-500"
          >
            <User size={18} />{" "}
            <span className="hidden sm:inline">{btnNameReact}</span>
          </button>
          <Link
            to="/cart"
            className="flex items-center gap-2 hover:text-orange-500 relative"
          >
            <ShoppingCart size={18} />{" "}
            <span className="hidden sm:inline">Cart</span>
            {cartItems.length > 0 && (
              <div className="bg-orange-500 text-white w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-3 text-xs">
                {cartItems.length}
              </div>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
