import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useProducts } from "../hooks/useProducts";
import { DEFAULTS } from "../config/defaults";

const Categories = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { products, loading } = useProducts();
  const [categoryData, setCategoryData] = useState([]);

  // Build categories from products
  useEffect(() => {
    if (products && products.length > 0) {
      // Get unique categories with their first product image
      const categoryMap = new Map();
      
      products.forEach((product) => {
        const category = product.category;
        if (category && !categoryMap.has(category)) {
          categoryMap.set(category, {
            name: DEFAULTS.categoryNames[category] || category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' '),
            slug: category,
            img: product.image || DEFAULTS.placeholderImage,
          });
        }
      });
      
      setCategoryData(Array.from(categoryMap.values()));
    }
  }, [products]);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [categoryData]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  // Show loading skeleton
  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 w-48 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="h-12 w-80 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          </div>
          <div className="flex gap-6 justify-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-52 h-52 rounded-full bg-gray-200 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Don't render if no categories
  if (categoryData.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4">
            Explore Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Shop by <span className="text-amber-600">Category</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exquisite range of handcrafted jewellery, designed to add elegance to every occasion
          </p>
        </div>

        {/* Categories Carousel */}
        <div className="relative">
          {/* Left Arrow - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg items-center justify-center transition-all duration-300 hidden md:flex ${
              canScrollLeft
                ? "opacity-100 hover:bg-amber-500 hover:text-white hover:shadow-xl"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-4 md:px-12 py-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categoryData.map((cat, idx) => (
              <Link
                key={idx}
                to={`/shop?category=${cat.slug}`}
                className="group flex-shrink-0 snap-center"
              >
                {/* Responsive circle sizes: 28 (112px) on mobile, 44 (176px) on sm, 52 (208px) on md, 60 (240px) on lg */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52">
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-300 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-115 transition-all duration-500"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50 p-0.5 md:p-1">
                    <div className="w-full h-full rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                      <img
                        src={cat.img}
                        alt={cat.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = DEFAULTS.placeholderImage;
                        }}
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Floating Label on Hover - Hidden on mobile */}
                  <div className="absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold text-amber-700 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View All →
                    </span>
                  </div>
                </div>

                {/* Category Name */}
                <div className="mt-3 md:mt-5 text-center">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <div className="w-8 md:w-0 h-0.5 bg-amber-500 mx-auto mt-1 md:group-hover:w-12 transition-all duration-300"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg items-center justify-center transition-all duration-300 hidden md:flex ${
              canScrollRight
                ? "opacity-100 hover:bg-amber-500 hover:text-white hover:shadow-xl"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <FaChevronRight size={16} />
          </button>

          {/* Gradient Fade Edges - Only on tablet+ */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block"></div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center gap-1 mt-4 md:hidden">
          <span className="text-xs text-gray-400">← Swipe to explore →</span>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-6 md:mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 md:gap-2 px-4 md:px-8 py-2 md:py-3 bg-gray-900 text-white rounded-full text-xs md:text-base font-medium hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All Collections
            <FaChevronRight size={8} className="md:w-3 md:h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
