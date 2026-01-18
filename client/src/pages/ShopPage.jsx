import React, { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useFilteredProducts } from "../hooks/useProducts";
import { DEFAULTS } from "../config/defaults";
import { formatPrice } from "../utils/priceCalculator";
import { prettifySlug } from "../utils/parseProduct";
import { FaTimes, FaFilter, FaThLarge, FaList, FaHeart, FaShoppingBag, FaSync } from "react-icons/fa";

// Helper to prettify names - uses DEFAULTS first, then generic prettify
const prettifyName = (slug) => {
  if (!slug) return "";
  return DEFAULTS.categoryNames[slug] || DEFAULTS.materialNames[slug] || prettifySlug(slug);
};

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const material = searchParams.get("material");
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const { products, materials, categories, loading, error, refresh } =
    useFilteredProducts(material, category, search);
  
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refresh();
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const handleMaterialChange = (m) => {
    const params = new URLSearchParams(searchParams);
    m ? params.set("material", m) : params.delete("material");
    setSearchParams(params);
  };

  const handleCategoryChange = (c) => {
    const params = new URLSearchParams(searchParams);
    c ? params.set("category", c) : params.delete("category");
    setSearchParams(params);
  };

  const clearFilters = () => setSearchParams({});
  
  const hasActiveFilters = material || category || search;
  const activeCount = [material, category].filter(Boolean).length;

  const pageTitle = useMemo(() => {
    if (search) return `Results for "${search}"`;
    const m = material ? prettifyName(material) : "";
    const c = category ? prettifyName(category) : "";
    if (m && c) return `${m} ${c}`;
    if (m) return `${m} Jewellery`;
    if (c) return c;
    return "All Jewellery";
  }, [material, category, search]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-center">
            {pageTitle}
          </h1>
          <div className="flex items-center justify-center gap-3 mt-2">
            <p className="text-gray-400 text-sm">
              {products.length} {products.length === 1 ? 'product' : 'products'} found
            </p>
            <button
              onClick={handleRefresh}
              className="p-1.5 text-gray-400 hover:text-amber-400 transition-colors"
              title="Refresh products"
              disabled={isRefreshing}
            >
              <FaSync size={12} className={isRefreshing ? "animate-spin" : ""} />
            </button>
          </div>
          
          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {material && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm">
                  {prettifyName(material)}
                  <button onClick={() => handleMaterialChange(null)} className="hover:text-white">
                    <FaTimes size={10} />
                  </button>
                </span>
              )}
              {category && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                  {prettifyName(category)}
                  <button onClick={() => handleCategoryChange(null)} className="hover:text-white">
                    <FaTimes size={10} />
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="text-sm text-gray-400 hover:text-white underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-32">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaFilter className="text-amber-500" /> Filters
              </h3>

              {/* Material Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">
                  Material
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="material"
                      checked={!material}
                      onChange={() => handleMaterialChange(null)}
                      className="w-4 h-4 text-amber-500 focus:ring-amber-500"
                    />
                    <span className="text-gray-700 group-hover:text-amber-600">All Materials</span>
                  </label>
                  {materials.map((m) => (
                    <label key={m} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="material"
                        checked={material === m}
                        onChange={() => handleMaterialChange(m)}
                        className="w-4 h-4 text-amber-500 focus:ring-amber-500"
                      />
                      <span className="text-gray-700 group-hover:text-amber-600">{prettifyName(m)}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">
                  Category
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={!category}
                      onChange={() => handleCategoryChange(null)}
                      className="w-4 h-4 text-amber-500 focus:ring-amber-500"
                    />
                    <span className="text-gray-700 group-hover:text-amber-600">All Categories</span>
                  </label>
                  {categories.map((c) => (
                    <label key={c} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={category === c}
                        onChange={() => handleCategoryChange(c)}
                        className="w-4 h-4 text-amber-500 focus:ring-amber-500"
                      />
                      <span className="text-gray-700 group-hover:text-amber-600">{prettifyName(c)}</span>
                    </label>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-3 shadow-sm">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium"
              >
                <FaFilter />
                Filters
                {activeCount > 0 && (
                  <span className="w-5 h-5 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center">
                    {activeCount}
                  </span>
                )}
              </button>

              <div className="hidden lg:block text-sm text-gray-500">
                Showing {products.length} products
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition ${viewMode === "grid" ? "bg-white shadow-sm text-amber-600" : "text-gray-500"}`}
                >
                  <FaThLarge />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition ${viewMode === "list" ? "bg-white shadow-sm text-amber-600" : "text-gray-500"}`}
                >
                  <FaList />
                </button>
              </div>
            </div>

            {/* Products */}
            {products.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShoppingBag className="text-amber-500 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition"
                >
                  View All Products
                </button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCardGrid key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <ProductCardList key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileFilters(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[80vh] overflow-y-auto animate-slideUp">
            <div className="sticky top-0 bg-white p-4 border-b flex items-center justify-between">
              <h3 className="font-bold text-lg">Filters</h3>
              <button onClick={() => setShowMobileFilters(false)} className="p-2">
                <FaTimes />
              </button>
            </div>
            
            <div className="p-4 space-y-6">
              {/* Material */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Material</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleMaterialChange(null)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      !material ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    All
                  </button>
                  {materials.map((m) => (
                    <button
                      key={m}
                      onClick={() => handleMaterialChange(m)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                        material === m ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {prettifyName(m)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryChange(null)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      !category ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => handleCategoryChange(c)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                        category === c ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {prettifyName(c)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white p-4 border-t flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 py-3 border border-gray-300 rounded-xl font-medium"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="flex-1 py-3 bg-amber-500 text-white rounded-xl font-medium"
              >
                Show {products.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Grid Card
const ProductCardGrid = ({ product }) => {
  const price = product.priceRange?.min || 0;

  return (
    <Link to={`/product/${product.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          onError={(e) => { e.target.onerror = null; e.target.src = DEFAULTS.placeholderImage; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-amber-500 hover:text-white transition">
            <FaHeart size={12} />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-[10px] font-bold text-amber-700 uppercase">
            {product.materialDisplay}
          </span>
        </div>
      </div>

      <div className="p-3">
        <p className="text-xs text-gray-500 uppercase tracking-wider">{product.categoryDisplay}</p>
        <h3 className="font-semibold text-gray-800 mt-1 line-clamp-1 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-amber-600 font-bold">{formatPrice(price)}</p>
          <p className="text-xs text-gray-400">{product.variants[0]?.weight}g</p>
        </div>
      </div>
    </Link>
  );
};

// List Card
const ProductCardList = ({ product }) => {
  const price = product.priceRange?.min || 0;

  return (
    <Link to={`/product/${product.id}`} className="group flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
      <div className="w-32 md:w-48 flex-shrink-0 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          onError={(e) => { e.target.onerror = null; e.target.src = DEFAULTS.placeholderImage; }}
        />
        <span className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-[10px] font-bold text-amber-700 uppercase">
          {product.materialDisplay}
        </span>
      </div>

      <div className="flex-1 p-4 flex flex-col justify-center">
        <p className="text-xs text-gray-500 uppercase tracking-wider">{product.categoryDisplay}</p>
        <h3 className="font-semibold text-gray-800 mt-1 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">Weight: {product.variants[0]?.weight}g</p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-lg text-amber-600 font-bold">{formatPrice(price)}</p>
          <span className="hidden md:inline-block px-4 py-1.5 border border-amber-500 text-amber-600 rounded-full text-sm font-medium group-hover:bg-amber-500 group-hover:text-white transition">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ShopPage;
