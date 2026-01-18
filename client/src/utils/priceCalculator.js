/**
 * Calculate product price based on weight, material rates, and charges
 * Formula: (weight × metalRate) + (weight × makingCharge) + stoneCharge + GST
 */
export function calculatePrice({
  weight,
  purity,
  material,
  makingChargePerGram,
  stoneCharge,
  gstPercent,
  rates,
}) {
  // Get metal rate for the material and purity
  const metalRate = rates[material]?.[purity] || 0;

  // Calculate components
  const metalPrice = weight * metalRate;
  const makingCharge = weight * makingChargePerGram;
  const subtotal = metalPrice + makingCharge + stoneCharge;
  const gst = subtotal * (gstPercent / 100);
  const total = subtotal + gst;

  return {
    metalPrice: Math.round(metalPrice),
    makingCharge: Math.round(makingCharge),
    stoneCharge: Math.round(stoneCharge),
    gst: Math.round(gst),
    subtotal: Math.round(subtotal),
    total: Math.round(total),
  };
}

/**
 * Format price in Indian Rupee format
 */
export function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Get price range for products with multiple variants
 */
export function getPriceRange(variants) {
  if (!variants || variants.length === 0) return null;

  const prices = variants.map((v) => v.price?.total || 0);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  if (min === max) {
    return { min, max, display: formatPrice(min) };
  }

  return {
    min,
    max,
    display: `${formatPrice(min)} - ${formatPrice(max)}`,
  };
}
