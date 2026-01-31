import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProduct } from "../hooks/useProducts";
import { formatPrice, getPriceRangeDisplay } from "../utils/priceCalculator";
import { DEFAULTS } from "../config/defaults";
import { FaWhatsapp, FaArrowLeft, FaCheck } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";

const ProductPage = () => {
  const { productId } = useParams();
  const { product, rates, loading, error } = useProduct(productId);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  if (loading) {
    return (
      <main className="bg-white min-h-screen pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="bg-white min-h-screen pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
          >
            <FaArrowLeft /> Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const selectedVariant = product.variants[selectedVariantIndex];
  const hasMultipleVariants = product.variants.length > 1;

  // Generate WhatsApp message
  const priceRangeText = getPriceRangeDisplay(selectedVariant.price.total).display;
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in ${product.name} (${selectedVariant.weight}g, ${selectedVariant.purity}). Price Range: ${priceRangeText}. Please share more details.`
  );

  return (
    <main className="bg-gradient-to-b from-amber-50 to-white min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-amber-600">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/shop" className="text-gray-500 hover:text-amber-600">
            Shop
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="text-gray-500 hover:text-amber-600"
          >
            {product.categoryDisplay}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-amber-600">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = DEFAULTS.placeholderImage;
                }}
              />
            </div>
            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-bold text-amber-700 shadow-md capitalize">
                {product.materialDisplay}
              </span>
              <span className="px-4 py-2 bg-amber-500/95 backdrop-blur-sm rounded-full text-sm font-bold text-white shadow-md">
                {selectedVariant.purity}
              </span>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-gray-500 mb-6">
              {product.materialDisplay} {product.categoryDisplay}
            </p>

            {/* Price Display (2% less - current) */}
            <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-xl p-6 mb-6">
              <p className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                {getPriceRangeDisplay(selectedVariant.price.total).display}
              </p>
              <p className="text-sm text-gray-600">
                {selectedVariant.weight}g • {selectedVariant.purity}
                {selectedVariant.size && ` • Size ${selectedVariant.size}`}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                *Price may vary based on market rates
              </p>
            </div>

            {/* Variant Selector */}
            {hasMultipleVariants && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Select Weight / Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVariantIndex(index)}
                      className={`px-4 py-3 rounded-xl border-2 transition-all ${
                        selectedVariantIndex === index
                          ? "border-amber-500 bg-amber-50 text-amber-700"
                          : "border-gray-200 bg-white text-gray-700 hover:border-amber-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {selectedVariantIndex === index && (
                          <FaCheck className="text-amber-500" />
                        )}
                        <span className="font-semibold">{variant.weight}g</span>
                        {variant.size && (
                          <span className="text-sm text-gray-500">
                            • Size {variant.size}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-amber-600 font-medium mt-1">
                        {getPriceRangeDisplay(variant.price.total).display}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price Breakdown */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Price Breakdown
              </h3>
              <div className="space-y-3">
                {/* Metal Price */}
                <div className="flex justify-between text-gray-600">
                  <span>
                    {product.materialDisplay} ({selectedVariant.purity}) × {selectedVariant.weight}g
                  </span>
                  <span className="font-medium">
                    {formatPrice(selectedVariant.price.metalPrice)}
                  </span>
                </div>

                {/* Making Charges */}
                {selectedVariant.price.makingCharge > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Making Charges</span>
                    <span className="font-medium">
                      {formatPrice(selectedVariant.price.makingCharge)}
                    </span>
                  </div>
                )}

                {/* Other Charges (stone, design, etc.) */}
                {selectedVariant.price.otherCharge > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Other Charges</span>
                    <span className="font-medium">
                      {formatPrice(selectedVariant.price.otherCharge)}
                    </span>
                  </div>
                )}

                {/* Subtotal */}
                <div className="border-t pt-3 flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    {formatPrice(selectedVariant.price.subtotal)}
                  </span>
                </div>

                {/* GST (only show if > 0) */}
                {selectedVariant.price.gst > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>GST ({product.gstPercent || 3}%)</span>
                    <span className="font-medium">
                      {formatPrice(selectedVariant.price.gst)}
                    </span>
                  </div>
                )}

                {/* Discount (only show if > 0) */}
                {selectedVariant.price.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">
                      - {formatPrice(selectedVariant.price.discount)}
                    </span>
                  </div>
                )}

                {/* Total */}
                <div className="border-t pt-3 flex justify-between text-lg font-bold text-amber-600">
                  <span>Total</span>
                  <span>{formatPrice(selectedVariant.price.total)}</span>
                </div>
              </div>
            </div>

            {/* Rate Info */}
            <p className="text-xs text-gray-500 mb-6">
              * Prices based on {product.materialDisplay} rate as of{" "}
              {rates.lastUpdated || "today"}. Actual price may vary.
            </p>

            {/* WhatsApp Buy Button */}
            <a
              href={`https://wa.me/918426808544?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl text-lg font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="text-2xl" />
              Enquire on WhatsApp
            </a>

            {/* Back to Shop */}
            <Link
              to="/shop"
              className="flex items-center justify-center gap-2 mt-4 text-gray-600 hover:text-amber-600 transition"
            >
              <FaArrowLeft />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
