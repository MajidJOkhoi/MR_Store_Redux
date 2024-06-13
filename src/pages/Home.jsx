import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 ">Welcome to the Mr Store </h2>

      <section>
        <h3 className="text-xl font-bold mb-4">Products</h3>
        <ProductCard />
      </section>
    </div>
  );
};

export default Home;
