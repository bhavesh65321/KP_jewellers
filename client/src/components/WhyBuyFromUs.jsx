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
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center">
        {/* Left Side - KP Jewellers */}
        <div className="flex items-center justify-center h-full">
          <h1
            className="font-extrabold text-amber-600 opacity-30 leading-tight text-center
                text-4xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-[6rem]
            "
          >
            KP <br /> Jewellers
          </h1>
        </div>

        {/* Right Side - Heading + Cards */}
        <div className="text-center md:text-left">
          <SectionHeading title="Why Buy From Us" />

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {featuresData.map((feature, idx) => (
              <div
                key={idx}
                className="bg-yellow-400 text-black p-6 rounded-lg flex flex-col items-center justify-center shadow-lg hover:scale-105 transition transform duration-300 hover:cursor-pointer"
              >
                <div className="mb-3 text-3xl">{feature.icon}</div>
                <p className="text-center font-semibold">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuyFromUs;
