import React from "react";
import { categories } from "../constants/data";

const Categories = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Shop by Category
      </h2>
      <div className="flex justify-center flex-wrap gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="px-6 py-3 border rounded-lg hover:bg-pink-100 cursor-pointer"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
