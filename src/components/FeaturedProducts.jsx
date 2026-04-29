import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';

const products = [
  { name: "iPhone 15 Pro Max", price: 1199, oldPrice: 1299, rating: 4.9, tag: "Best Seller", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400" },
  { name: "MacBook Pro 16\" M3", price: 2499, oldPrice: 2799, rating: 4.8, tag: "New", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" },
  { name: "Sony WH-1000XM5", price: 348, oldPrice: 399, rating: 4.7, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
  { name: "Samsung Galaxy S24 Ultra", price: 1299, oldPrice: 1399, rating: 4.8, img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400" },
  { name: "iPad Pro 12.9\" M2", price: 1099, oldPrice: 1199, rating: 4.9, tag: "Hot", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400" },
  { name: "Dell XPS 15", price: 1899, oldPrice: 2099, rating: 4.6, img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400" },
  { name: "Apple Watch Ultra 2", price: 799, oldPrice: 899, rating: 4.8, img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400" },
  { name: "AirPods Pro 2", price: 249, oldPrice: 299, rating: 4.7, tag: "Sale", img: "https://images.unsplash.com/photo-1588423770d14-b29392b70339?w=400" },
];

const FeaturedProducts = () => {
  return (
    <section className="px-8 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Featured Products</h2>
        <a href="#" className="text-blue-400 flex items-center gap-1 hover:underline">View All <Star className="w-4 h-4" /></a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <div key={i} className="bg-[#1e293b]/30 rounded-3xl p-4 border border-gray-800 relative group">
            {p.tag && (
              <span className="absolute top-6 left-6 z-10 bg-blue-600 text-[10px] px-2 py-0.5 rounded-md font-bold uppercase">
                {p.tag}
              </span>
            )}
            <button className="absolute top-6 right-6 z-10 text-gray-400 hover:text-white">
              <Heart className="w-5 h-5" />
            </button>
            <div className="bg-white rounded-2xl h-48 flex items-center justify-center overflow-hidden mb-6">
              <img src={p.img} alt={p.name} className="h-full w-full object-contain p-4 group-hover:scale-110 transition duration-500" />
            </div>
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <div className="flex items-center gap-1 text-yellow-500 my-2">
              {[...Array(4)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              <Star className="w-3 h-3" />
              <span className="text-gray-500 text-xs ml-1">({p.rating})</span>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-blue-500">${p.price}</span>
              <span className="text-gray-500 line-through text-sm">${p.oldPrice}</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-2.5 rounded-xl flex items-center justify-center gap-2 font-medium transition">
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;