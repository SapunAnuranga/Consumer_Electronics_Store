import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative px-8 py-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      <div className="max-w-xl z-10">
        <span className="bg-blue-600/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
          New Arrival
        </span>
        <h1 className="text-6xl font-bold mt-6 leading-tight">
          Discover Latest <br />
          <span className="text-blue-500">Tech</span>
        </h1>
        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          Experience innovation with cutting-edge devices. <br />
          Premium electronics curated for the modern lifestyle.
        </p>
        <div className="mt-10 flex items-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition shadow-lg shadow-blue-600/20">
            Shop Now <ArrowRight className="w-5 h-5" />
          </button>
          <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">
            View All Products <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      <div className="relative mt-12 md:mt-0">
        <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full"></div>
        <img 
          src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800" 
          alt="Product" 
          className="relative w-[450px] transform -rotate-6 rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;