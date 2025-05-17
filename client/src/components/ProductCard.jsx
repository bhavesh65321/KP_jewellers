const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="relative group bg-white p-4 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition w-64 hover:cursor-pointer"
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Animated Overlay */}
      <div
        className="absolute inset-0 bg-amber-50/90
        transform -translate-x-full group-hover:translate-x-0
        transition-all duration-500 ease-in-out
        flex flex-col justify-center items-center text-sm px-4 rounded-lg m-4"
      >
        <h3 className="text-yellow-600 text-lg font-semibold mb-2">
          {product.name}
        </h3>
        <ul className="text-left space-y-1 w-full">
          {Object.entries(product.description).map(([key, value]) => (
            <li key={key} className="flex justify-between text-amber-500">
              <span className="font-light">{key}</span>
              <span className="font-medium">{value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Name & Price below */}
      <div className="mt-4 text-center">
        <h3 className="text-amber-600 text-lg font-semibold">{product.name}</h3>
        <p className="text-amber-500 mt-1">₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
