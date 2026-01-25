import { FaCertificate, FaRedo, FaStore, FaAward, FaGem, FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: FaCertificate,
    title: "100% Certified",
    description: "Every piece comes with authenticity certificate and hallmark",
    color: "from-amber-400 to-amber-600",
    shadowColor: "shadow-amber-200",
  },
  {
    icon: FaRedo,
    title: "Lifetime Exchange",
    description: "Exchange your old jewellery at best market rates anytime",
    color: "from-emerald-400 to-emerald-600",
    shadowColor: "shadow-emerald-200",
  },
  {
    icon: FaStore,
    title: "Physical Store",
    description: "Visit our store to experience our collection in person",
    color: "from-blue-400 to-blue-600",
    shadowColor: "shadow-blue-200",
    link: "https://www.google.com/maps/place/K+P+jewellers/@24.7525243,71.7754785,17z/data=!3m1!4b1!4m6!3m5!1s0x3944a525ea6a553b:0x64b7e8b9f45b420f!8m2!3d24.7525243!4d71.7754785!16s%2Fg%2F11y3ywskdf",
  },
  {
    icon: FaAward,
    title: "BIS Hallmarked",
    description: "All gold jewellery is BIS hallmarked for purity assurance",
    color: "from-purple-400 to-purple-600",
    shadowColor: "shadow-purple-200",
  },
];

const WhyBuyFromUs = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Decorations - Hidden on mobile for performance */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 hidden md:block">
        <div className="absolute top-20 left-20 w-40 h-40 border border-amber-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-amber-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-amber-400/50 rounded-full"></div>
      </div>

      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-amber-500/20 text-amber-400 text-xs md:text-sm font-medium rounded-full mb-3 md:mb-4 border border-amber-500/30">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2 md:mb-4">
            The KP <span className="text-amber-400">Promise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-4 md:px-0">
            Three decades of trust, craftsmanship, and customer satisfaction.
          </p>
        </div>

        {/* Features Grid - 2x2 on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const CardWrapper = feature.link ? 'a' : 'div';
            const wrapperProps = feature.link ? { href: feature.link, target: "_blank", rel: "noopener noreferrer" } : {};
            
            return (
              <CardWrapper
                key={idx}
                {...wrapperProps}
                className="group relative block"
              >
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-500 h-full">
                  {/* Icon Container */}
                  <div className={`w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg md:rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 md:mb-5 shadow-lg ${feature.shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <feature.icon className="text-white text-lg md:text-2xl lg:text-3xl" />
                  </div>

                  {/* Content */}
                  <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-white mb-1 md:mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm lg:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                    {feature.description}
                  </p>
                  
                  {/* Click hint for linked cards - hidden on mobile */}
                  {feature.link && (
                    <p className="hidden md:flex text-xs text-amber-400/70 mt-3 items-center gap-1">
                      <span>📍</span> Click to view on map
                    </p>
                  )}

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 md:h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-b-xl md:rounded-b-2xl group-hover:w-full transition-all duration-500"></div>
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* Trust Badges - 2x2 grid on mobile */}
        <div className="mt-8 md:mt-16 pt-6 md:pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-4 md:gap-10 text-gray-400">
            <div className="flex items-center gap-2 md:gap-3">
              <FaGem className="text-amber-400 text-base md:text-xl" />
              <span className="text-xs md:text-base">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <FaShieldAlt className="text-amber-400 text-base md:text-xl" />
              <span className="text-xs md:text-base">Secure Packaging</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <FaTruck className="text-amber-400 text-base md:text-xl" />
              <span className="text-xs md:text-base">Insured Delivery</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <FaHeadset className="text-amber-400 text-base md:text-xl" />
              <span className="text-xs md:text-base">24/7 Support</span>
            </div>
          </div>
          
          {/* Partnership Badges */}
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
            {/* KP Developers Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-[10px] md:text-xs text-gray-400">Part of</span>
              <span className="text-xs md:text-sm text-white font-semibold">KP Developers</span>
            </div>
            
            {/* Kisna Jewellers Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-full border border-amber-400/30">
              <span className="text-[10px] md:text-xs text-gray-400">Backed by</span>
              <span className="text-xs md:text-sm text-amber-400 font-semibold">Kisna Jewellers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuyFromUs;
