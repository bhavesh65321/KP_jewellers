import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useProducts } from "../hooks/useProducts";
import { formatPrice } from "../utils/priceCalculator";
import { DEFAULTS } from "../config/defaults";
import { FaChevronLeft, FaChevronRight, FaHeart, FaShoppingBag } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components for desktop slider
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 group"
    aria-label="Previous"
  >
    <FaChevronLeft size={14} className="group-hover:scale-110 transition-transform" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 group"
    aria-label="Next"
  >
    <FaChevronRight size={14} className="group-hover:scale-110 transition-transform" />
  </button>
);

const BestSellerProducts = () => {
  const { products, loading } = useProducts();

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    pauseOnHover: true,
    arrows: true,
    dots: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, arrows: true },
      },
    ],
  };

  if (loading) {
    return (
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-100 rounded w-64 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 rounded-xl md:rounded-2xl h-60 md:h-80 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const bestSellers = products.slice(0, 8);

  if (bestSellers.length === 0) return null;

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-16 gap-4">
          <div>
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-amber-100 text-amber-700 text-xs md:text-sm font-medium rounded-full mb-3 md:mb-4">
              ✨ Most Loved
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900">
              Best <span className="text-amber-600">Sellers</span>
            </h2>
            <p className="text-gray-600 mt-2 md:mt-3 max-w-lg text-sm md:text-base">
              Our most cherished pieces, handpicked by thousands of happy customers
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors group"
          >
            View All
            <FaChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile: 2x2 Grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {bestSellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* View All Button */}
          <div className="mt-4 flex justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white rounded-full text-xs font-medium hover:bg-amber-600 transition-colors"
            >
              View All Products
              <FaChevronRight size={8} />
            </Link>
          </div>
        </div>

        {/* Desktop: Slider */}
        <div className="hidden md:block relative px-4 md:px-6">
          <Slider {...settings}>
            {bestSellers.map((product) => (
              <div key={product.id} className="px-2 md:px-3">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

// Elegant Product Card - Optimized for mobile
const ProductCard = ({ product }) => {
  const minPrice = product.priceRange?.min || 0;
  const maxPrice = product.priceRange?.max || 0;
  const variant = product.variants[0];
  const hasMultipleVariants = product.variants.length > 1;

  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-xl transition-all duration-500">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DEFAULTS.placeholderImage;
            }}
          />

          {/* Material Badge */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold text-gray-700 shadow-sm capitalize">
              {product.materialDisplay}
            </span>
          </div>

          {/* Wishlist Button - Always visible on mobile */}
          <button
            className="absolute top-2 sm:top-3 right-2 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm sm:opacity-0 sm:group-hover:opacity-100"
            onClick={(e) => e.preventDefault()}
          >
            <FaHeart size={12} className="sm:w-3.5 sm:h-3.5" />
          </button>

          {/* Quick View Overlay - Hidden on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
            <div className="absolute bottom-4 left-4 right-4">
              <button
                className="w-full py-2.5 sm:py-3 bg-white text-gray-900 rounded-lg sm:rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-white transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm"
                onClick={(e) => e.preventDefault()}
              >
                <FaShoppingBag size={12} />
                Quick View
              </button>
            </div>
          </div>

          {/* Variant Count Badge */}
          {hasMultipleVariants && (
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 sm:opacity-100 sm:group-hover:opacity-0 transition-opacity">
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-900/80 backdrop-blur-sm text-white text-[10px] sm:text-xs rounded-md">
                {product.variants.length} sizes
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-3 sm:p-4 md:p-5">
          {/* Category */}
          <p className="text-[10px] sm:text-xs font-medium text-amber-600 uppercase tracking-wider mb-0.5 sm:mb-1">
            {product.categoryDisplay}
          </p>

          {/* Name */}
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition-colors line-clamp-1 mb-1 sm:mb-2">
            {product.name}
          </h3>

          {/* Weight & Purity */}
          <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
            {variant?.weight}g • {variant?.purity}
          </p>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                {formatPrice(minPrice)}
              </p>
              {minPrice !== maxPrice && (
                <p className="text-[10px] sm:text-xs text-gray-400">
                  to {formatPrice(maxPrice)}
                </p>
              )}
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
              <FaChevronRight size={10} className="sm:w-3 sm:h-3 text-amber-600 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BestSellerProducts;
