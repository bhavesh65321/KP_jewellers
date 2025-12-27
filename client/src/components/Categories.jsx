import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { categories } from "../constants/data";
import SectionHeading from "./SectionHeading";

const Categories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 bg-slate-50 py-10">
      <SectionHeading title="Categories" />

      <div className="relative w-full px-4 py-6">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:cursor-pointer hover:bg-amber-200"
        >
          <FaArrowLeft size={24} color="goldenrod" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-8"
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer transition-transform duration-300"
            >
              <div className="w-60 h-60 rounded-full overflow-hidden shadow-md">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-2xl font-semibold text-amber-800 flex items-center gap-8">
                {cat.name}
                <FaArrowRight size={24} />
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:cursor-pointer hover:bg-amber-200"
        >
          <FaArrowRight size={24} color="goldenrod" />
        </button>
      </div>
    </div>
  );
};

export default Categories;
