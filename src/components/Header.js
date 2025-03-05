import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div>
        <img className="w-32 sm:w-40" src={LOGO_URL} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex items-center gap-x-6 text-gray-700 font-medium">
          <li>Online: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-blue-500 transition">Grocery</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-500 transition">Cart 🛒</Link>
          </li>
        </ul>
      </nav>

      {/* Login Button */}
      <button
        className="px-5 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition"
        onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
      >
        {btnNameReact}
      </button>
    </header>
  );
};

export default Header;
