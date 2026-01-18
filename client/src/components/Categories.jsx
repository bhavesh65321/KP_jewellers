import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { categories } from "../constants/data";

const Categories = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
  }, []);

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
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className={`absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? "opacity-100 hover:bg-amber-500 hover:text-white hover:shadow-xl"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <FaChevronLeft size={18} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 md:gap-6 overflow-x-auto scrollbar-hide px-2 md:px-8 py-4"
          >
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to={`/shop?category=${cat.slug}`}
                className="group flex-shrink-0"
              >
                <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60">
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-300 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-115 transition-all duration-500"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Floating Label on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-amber-700 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View All →
                    </span>
                  </div>
                </div>

                {/* Category Name */}
                <div className="mt-4 md:mt-5 text-center">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <div className="w-0 h-0.5 bg-amber-500 mx-auto mt-1 group-hover:w-12 transition-all duration-300"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? "opacity-100 hover:bg-amber-500 hover:text-white hover:shadow-xl"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <FaChevronRight size={18} />
          </button>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block"></div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All Collections
            <FaChevronRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
