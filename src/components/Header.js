import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaSearch } from "react-icons/fa";

const Header = ({ searchText, setSearchText }) => {
  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md border-b border-gray-300">
      {/* Logo */}
      <div>
        <img className="w-32 sm:w-40" src={LOGO_URL} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex items-center gap-x-6 text-gray-700 font-medium">
          <li>Online: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-blue-500 transition">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-500 transition">
              Cart 🛒
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-500 transition">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-blue-500 transition">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          className="px-4 py-2 pr-10 border border-gray-300 rounded-lg shadow-md outline-none w-56 sm:w-72 focus:ring-2 focus:ring-green-400"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
