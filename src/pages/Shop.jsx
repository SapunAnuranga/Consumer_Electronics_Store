import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts.jsx';

const Shop = () => (
  <div className="pt-10 min-h-screen">
    <div className="px-8 mb-4">
      <h1 className="text-4xl font-bold uppercase tracking-widest">Store</h1>
      <p className="text-gray-400">Browse our latest technology products.</p>
    </div>
    <FeaturedProducts />
  </div>
);

export default Shop;