import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-gray-800 px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold">E</div>
            <span className="text-xl font-bold">TechVault</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Your trusted tech partner. Premium electronics for the modern lifestyle.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <div key={i} className="w-10 h-10 bg-[#1e293b] rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="text-gray-400 space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Categories</h4>
          <ul className="text-gray-400 space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">Smartphones</a></li>
            <li><a href="#" className="hover:text-white">Laptops</a></li>
            <li><a href="#" className="hover:text-white">Gaming</a></li>
            <li><a href="#" className="hover:text-white">Audio</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive deals and new arrivals.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-[#1e293b] rounded-xl py-3 px-4 text-sm focus:outline-none"
            />
            <button className="w-full mt-4 bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 text-gray-500 text-xs">
        <p>© 2026 TechVault. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;