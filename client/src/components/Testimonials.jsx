import React from "react";
import SectionHeading from "./SectionHeading";

const Testimonials = () => {
  return (
    <section className="bg-amber-50 py-20">
      <h2 className="text-center text-3xl font-serif font-bold mb-10 text-gray-800">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
        <div className="bg-white border border-amber-200 rounded-xl shadow-md p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-amber-400 cursor-pointer">
          <p className="italic text-lg text-gray-700">"Absolutely stunning collection!"</p>
          <p className="mt-4 font-semibold text-amber-600">— Sarah M.</p>
        </div>
        <div className="bg-white border border-amber-200 rounded-xl shadow-md p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-amber-400 cursor-pointer">
          <p className="italic text-lg text-gray-700">"Quality and elegance in every piece."</p>
          <p className="mt-4 font-semibold text-amber-600">— Priya K.</p>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </section>
  );
};

export default Testimonials;
