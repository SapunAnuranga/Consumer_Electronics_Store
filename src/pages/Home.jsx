import React from 'react';
import Hero from '../components/Hero.jsx';
import Categories from '../components/Categories.jsx';
import FeaturedProducts from '../components/FeaturedProducts.jsx';
import SpecialOffer from '../components/SpecialOffer.jsx';
import Brands from '../components/Brands.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <SpecialOffer />
      <Brands />
    </>
  );
};

export default Home;