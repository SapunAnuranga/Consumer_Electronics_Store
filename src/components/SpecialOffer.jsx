import React from 'react';
import { ArrowRight } from 'lucide-react';

const SpecialOffer = () => {
  return (
    <section className="px-8 py-12">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[40px] p-12 relative overflow-hidden flex flex-col md:flex-row justify-between items-center">
        <div className="z-10">
          <p className="uppercase tracking-widest text-sm font-bold opacity-80">Special Offer</p>
          <h2 className="text-5xl font-bold mt-4">Up to 50% OFF</h2>
          <p className="mt-2 text-lg opacity-90">On Selected Electronics</p>
          
          <div className="flex gap-4 mt-8">
            {['02', '14', '34', '10'].map((time, i) => (
              <div key={i} className="text-center">
                <div className="bg-[#0f172a]/40 backdrop-blur-md rounded-xl w-14 h-14 flex items-center justify-center text-xl font-bold">
                  {time}
                </div>
                <span className="text-[10px] uppercase mt-1 block opacity-70">
                  {['Days', 'Hours', 'Mins', 'Secs'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <button className="mt-10 md:mt-0 bg-white text-blue-600 px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition shadow-xl">
          Shop Deals <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default SpecialOffer;