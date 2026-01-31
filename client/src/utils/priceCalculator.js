/**
 * Calculate product price based on weight, material rates, and charges
 * 
 * Formula: (weight × rate) + makingCharge + otherCharge + GST - discount
 * 
 * Rate Units:
 * - Gold: per gram
 * - Platinum: per gram
 * - Silver: per KG (converted to per gram internally)
 * 
 * All charges (makingCharge, otherCharge, discount) are flat amounts from CSV
 * GST is a percentage from CSV (optional, defaults to 0)
 */
export function calculatePrice({
  weight,
  purity,
  material,
  makingCharge = 0,      // Flat amount from CSV
  otherCharge = 0,       // Flat amount from CSV
  gstPercent = 0,        // Percentage from CSV (optional)
  discount = 0,          // Flat amount from CSV
  rates,
}) {
  // Get metal rate for the material and purity
  let metalRate = rates[material]?.[purity] || 0;

  // Silver rate is per KG, convert to per gram
  if (material === "silver") {
    metalRate = metalRate / 1000;
  }

  // Calculate components
  const metalPrice = weight * metalRate;
  const subtotal = metalPrice + makingCharge + otherCharge;
  const gst = gstPercent > 0 ? subtotal * (gstPercent / 100) : 0;
  const total = subtotal + gst - discount;

  return {
    metalPrice: Math.round(metalPrice),
    makingCharge: Math.round(makingCharge),
    otherCharge: Math.round(otherCharge),
    gst: Math.round(gst),
    discount: Math.round(discount),
    subtotal: Math.round(subtotal),
    total: Math.round(Math.max(0, total)), // Ensure total is never negative
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
 * Get price range (2% less to current price)
 * @param {number} price - Current price
 * @returns {object} - { min, max, display }
 */
export function getPriceRangeDisplay(price) {
  const max = Math.round(price);
  const min = Math.round(price * 0.98); // 2% less
  
  return {
    min,
    max,
    display: `${formatPrice(min)} - ${formatPrice(max)}`,
  };
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
