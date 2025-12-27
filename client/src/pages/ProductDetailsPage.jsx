import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import { products } from "../constants/data";

const FILTER_OPTIONS = ["Gold", "Silver", "Platinum"];

const ProductDetailsPage = () => {
  const { category } = useParams();
  const [filter, setFilter] = useState("");

  // Filter products by category and selected filter
  const filteredProducts = products.filter(
    (product) =>
      (!category || product.category === category) &&
      (!filter || product.material === filter)
  );

  return (
    <main className="bg-white min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title={category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : "Products"} />
        {/* Filter */}
        <div className="mb-8 flex flex-wrap gap-4 items-center justify-center">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option}
              className={`px-5 py-2 rounded-full border font-medium transition text-sm ${filter === option ? "bg-yellow-400 text-white border-yellow-400" : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-50"}`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
          {filter && (
            <button
              className="ml-2 px-3 py-2 rounded-full border border-gray-300 text-gray-500 text-xs bg-white hover:bg-gray-100"
              onClick={() => setFilter("")}
            >
              Clear
            </button>
          )}
        </div>
        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
