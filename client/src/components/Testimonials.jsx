import React from "react";
import SectionHeading from "./SectionHeading";

const Testimonials = () => {
  return (
    <section className="py-12 bg-amber-50 text-center">
      <SectionHeading title="What Our Customers Say" />

      <div className="flex flex-col md:flex-row justify-center gap-8 px-6 md:px-24">
        <div className="bg-amber-100 p-6 rounded-lg">
          <p className="italic">"Absolutely stunning collection!"</p>
          <p className="mt-2 font-semibold">— Sarah M.</p>
        </div>
        <div className="bg-amber-100 p-6 rounded-lg">
          <p className="italic">"Quality and elegance in every piece."</p>
          <p className="mt-2 font-semibold">— Priya K.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
