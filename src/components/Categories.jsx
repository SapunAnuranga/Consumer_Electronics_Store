import React from 'react';
import { Smartphone, Laptop, Headphones, Cpu } from 'lucide-react';

const categories = [
  { name: 'Smartphones', count: '120+ Products', icon: <Smartphone className="w-6 h-6 text-blue-500" /> },
  { name: 'Laptops', count: '85+ Products', icon: <Laptop className="w-6 h-6 text-blue-500" /> },
  { name: 'Accessories', count: '240+ Products', icon: <Headphones className="w-6 h-6 text-blue-500" /> },
  { name: 'Smart Devices', count: '95+ Products', icon: <Cpu className="w-6 h-6 text-blue-500" /> },
];

const Categories = () => {
  return (
    <section className="px-8 py-16 text-center">
      <h2 className="text-4xl font-bold">Shop by Category</h2>
      <p className="text-gray-400 mt-2">Find exactly what you need</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {categories.map((cat, i) => (
          <div key={i} className="bg-[#1e293b]/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition cursor-pointer group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/20">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold">{cat.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{cat.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;