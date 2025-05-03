import React from "react";
import { products } from "../constants/data";

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Featured Products
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 md:px-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-pink-600 mt-1">{product.price}</p>
            <button className="mt-4 w-full py-2 bg-pink-600 text-white rounded hover:bg-pink-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
