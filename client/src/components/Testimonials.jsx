import React from "react";

const Testimonials = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">
        What Our Customers Say
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-6 md:px-24">
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="italic">"Absolutely stunning collection!"</p>
          <p className="mt-2 font-semibold">— Sarah M.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="italic">"Quality and elegance in every piece."</p>
          <p className="mt-2 font-semibold">— Priya K.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
