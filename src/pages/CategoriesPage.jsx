import React from 'react';
import Categories from '../components/Categories.jsx';
import { ChevronRight } from 'lucide-react';

const CategoriesPage = () => {
  const allCategories = [
    { title: "Computers & Laptops", items: ["Gaming Laptops", "MacBooks", "Workstations", "PC Parts"] },
    { title: "Mobile & Tablets", items: ["Smartphones", "iPads", "Android Tablets", "Cases"] },
    { title: "Audio & Sound", items: ["Headphones", "Earbuds", "Bluetooth Speakers", "Soundbars"] },
    { title: "Gaming Gear", items: ["Consoles", "Controllers", "Gaming Chairs", "Monitors"] },
  ];

  return (
    <div className="pt-10 min-h-screen">
      {/* Reusing the visual component from Home */}
      <Categories />

      {/* Detailed List Section */}
      <div className="px-8 py-16 bg-[#1e293b]/20">
        <h2 className="text-3xl font-bold mb-10">Browse Deeply</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {allCategories.map((cat, i) => (
            <div key={i}>
              <h3 className="text-blue-500 font-bold text-lg mb-4 border-b border-gray-800 pb-2">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 group transition">
                      <ChevronRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;