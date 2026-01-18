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
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-amber-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-amber-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-amber-400/50 rounded-full"></div>
      </div>

      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full mb-4 border border-amber-500/30">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            The KP <span className="text-amber-400">Promise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Three decades of trust, craftsmanship, and customer satisfaction. Here's why thousands choose us.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-500 h-full">
                {/* Icon Container */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg ${feature.shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <feature.icon className="text-white text-2xl md:text-3xl" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-b-2xl group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-gray-400">
            <div className="flex items-center gap-3">
              <FaGem className="text-amber-400 text-xl" />
              <span className="text-sm md:text-base">Premium Quality</span>
            </div>
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-amber-400 text-xl" />
              <span className="text-sm md:text-base">Secure Packaging</span>
            </div>
            <div className="flex items-center gap-3">
              <FaTruck className="text-amber-400 text-xl" />
              <span className="text-sm md:text-base">Insured Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <FaHeadset className="text-amber-400 text-xl" />
              <span className="text-sm md:text-base">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuyFromUs;
