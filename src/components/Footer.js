import { Link } from "react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-700 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left - Brand Info */}
        <p className="text-sm text-gray-600 text-center md:text-left">
          &copy; {new Date().getFullYear()} SpicyFood Ordering Restaurant. All rights reserved.
        </p>

        {/* Middle - Navigation Links */}
        <nav className="flex gap-6 text-sm">
          <Link to="/about" className="hover:text-orange-500 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
          <Link to="/cart" className="hover:text-orange-500 transition-colors">Cart</Link>
        </nav>

        {/* Right - Social Media */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <Facebook size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <Instagram size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
