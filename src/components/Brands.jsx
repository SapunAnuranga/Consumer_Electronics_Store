import React from 'react';

const brands = ["Apple", "Samsung", "Sony", "Dell", "Lenovo", "Microsoft", "Google", "Asus"];

const Brands = () => {
  return (
    <section className="px-8 py-20 text-center">
      <h2 className="text-4xl font-bold">Trusted Brands</h2>
      <p className="text-gray-400 mt-2">We partner with the world's leading tech companies</p>
      
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {brands.map((brand, i) => (
          <div key={i} className="bg-[#1e293b]/50 border border-gray-800 w-32 h-20 rounded-2xl flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition cursor-pointer">
            <span className="font-bold text-lg">{brand}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;