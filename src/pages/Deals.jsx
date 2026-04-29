import React from 'react';
import SpecialOffer from '../components/SpecialOffer.jsx';
import FeaturedProducts from '../components/FeaturedProducts.jsx';
import { Zap, Timer } from 'lucide-react';

const Deals = () => {
  return (
    <div className="pt-10 min-h-screen">
      {/* Header section with a glowing effect */}
      <div className="px-8 mb-12 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-blue-500/20 blur-[80px] rounded-full"></div>
        <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-yellow-500/20">
          <Zap className="w-4 h-4 fill-current" /> LIMITED TIME DEALS
        </div>
        <h1 className="text-5xl font-extrabold mb-4">Tech Vault <span className="text-blue-500">Flash Sale</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Don't miss out on these exclusive discounts. Prices are only valid until the timer runs out!
        </p>
      </div>

      {/* Main Special Offer (Countdown Section) */}
      <SpecialOffer />

      {/* Discounted Products Section */}
      <div className="mt-16">
        <div className="px-8 flex items-center gap-3 mb-2">
          <Timer className="text-blue-500 w-6 h-6" />
          <h2 className="text-2xl font-bold">Top Discounted Items</h2>
        </div>
        <FeaturedProducts />
      </div>

      {/* Promo Banner */}
      <div className="px-8 py-20">
        <div className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-[30px] p-10 flex flex-col md:flex-row items-center justify-between border border-blue-500/30">
          <div>
            <h3 className="text-3xl font-bold mb-2">Student Discount?</h3>
            <p className="text-blue-200">Get an extra 15% off with your university email.</p>
          </div>
          <button className="mt-6 md:mt-0 bg-white text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
            Verify Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deals;