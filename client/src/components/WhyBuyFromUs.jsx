// import SectionHeading from "./SectionHeading";
// import { featuresData } from "../constants/featureData";

// const WhyBuyFromUs = () => {
//   return (
//     <section className="bg-amber-50 py-12 text-white relative">
//       {/* Background overlay for image */}
//       <div className="absolute inset-0 bg-amber-50 bg-opacity-60 z-0"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
//         <SectionHeading title="Why Buy From Us" />

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
//           {featuresData.map((feature, idx) => (
//             <div
//               key={idx}
//               className="bg-yellow-400 text-black p-6 rounded-lg flex flex-col items-center justify-center shadow-lg hover:scale-105 transition transform duration-300"
//             >
//               <div className="mb-3">{feature.icon}</div>
//               <p className="text-center font-semibold">{feature.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyBuyFromUs;

import SectionHeading from "./SectionHeading";
import { featuresData } from "../constants/featureData";

const WhyBuyFromUs = () => {
  return (
    <section className="bg-amber-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-serif font-bold mb-10 text-gray-800">
          Why Buy From Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-amber-200 rounded-xl shadow-md p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-amber-400 cursor-pointer"
            >
              <div className="mb-4 text-4xl text-amber-500">{feature.icon}</div>
              <p className="text-center font-semibold text-lg text-gray-700 mb-2">{feature.title}</p>
              {feature.description && (
                <p className="text-center text-sm text-gray-500">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuyFromUs;
