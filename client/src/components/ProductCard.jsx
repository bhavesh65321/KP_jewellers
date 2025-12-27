const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="relative group bg-white p-0 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition hover:cursor-pointer border border-gray-200"
      style={{ minWidth: 260, maxWidth: 320 }}
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-t-xl"
      />

      {/* Hover Overlay - Slide in from left to right */}
      <div
        className="absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-start px-6 py-8 rounded-xl
        translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400"
        style={{ transitionProperty: 'transform, opacity' }}
      >
        <h3 className="text-yellow-300 text-xl font-bold mb-2">{product.name}</h3>
        <ul className="mb-4 text-base">
          {Object.entries(product.description).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <span>{key}</span>
              <span className="font-semibold">{value}</span>
            </li>
          ))}
        </ul>
        <a
          href={`https://wa.me/?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-white/10 border border-white text-white px-5 py-2 rounded-lg flex items-center gap-2 text-lg font-semibold hover:bg-white/20 transition"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.59 1.38 5.09L2 22l5.09-1.38A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18c-1.64 0-3.22-.44-4.59-1.27l-.33-.2-3.02.82.81-3.01-.21-.33A7.96 7.96 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8Zm4.13-5.47c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.97-.36-1.85-1.13-.68-.6-1.14-1.34-1.27-1.57-.13-.23-.01-.35.1-.47.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.41-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39-.13-.01-.29-.01-.45-.01-.16 0-.41.06-.62.29-.21.23-.8.78-.8 1.9s.82 2.21.93 2.37c.11.15 1.62 2.48 3.93 3.38.55.19.98.3 1.31.39.55.14 1.05.12 1.45.07.44-.05 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.16-.44-.28Z"/></svg>
          Buy Now
        </a>
      </div>

      {/* Name below */}
      <div className="py-4 px-4 text-center">
        <h3 className="text-gray-800 text-xl font-semibold mb-2">{product.name}</h3>
        <button className="w-full border border-yellow-400 text-gray-700 rounded-lg py-2 font-medium mt-2 hover:bg-yellow-50 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
