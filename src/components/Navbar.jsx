import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom'; // Meka add karanna

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#0f172a] sticky top-0 z-50 border-b border-gray-800">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold">E</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">TechVault</span>
      </Link>

      <div className="hidden md:flex gap-8 text-gray-400">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <Link to="/shop" className="hover:text-white transition">Shop</Link>
        <Link to="/categories" className="hover:text-white transition">Categories</Link>
        <Link to="/deals" className="hover:text-white transition">Deals</Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="bg-[#1e293b] rounded-full py-1.5 pl-10 pr-4 text-sm w-64 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="relative cursor-pointer">
          <ShoppingCart className="w-6 h-6 text-gray-300" />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-[10px] rounded-full w-4 h-4 flex items-center justify-center text-white">3</span>
        </div>
        <button className="flex items-center gap-2 border border-gray-600 rounded-full px-4 py-1.5 text-sm text-white hover:bg-gray-800 transition">
          <User className="w-4 h-4" /> Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;