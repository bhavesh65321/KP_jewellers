import { DEFAULTS } from "../config/defaults";
import { calculatePrice } from "./priceCalculator";

/**
 * Prettify a slug to display name
 * "nose-pins" → "Nose Pins", "gold" → "Gold"
 */
export function prettifySlug(slug) {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Parse product ID to extract material, category, and name
 * Format: {material}-{category}-{name-parts}
 * Example: gold-rings-royal-diamond → { material: "gold", category: "rings", name: "Royal Diamond" }
 */
export function parseProductId(id) {
  const parts = id.split("-");

  if (parts.length < 3) {
    console.warn(`Invalid product ID format: ${id}`);
    return null;
  }

  const material = parts[0].toLowerCase();
  const category = parts[1].toLowerCase();
  const nameParts = parts.slice(2);

  // Prettify name: "royal-diamond" → "Royal Diamond"
  const name = nameParts
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return { material, category, name };
}

/**
 * Parse a single CSV entry into a full product object
 */
export function parseProduct(entry, rates) {
  const parsed = parseProductId(entry.id);
  if (!parsed) return null;

  const { material, category, name } = parsed;

  // Get purity with fallback to default
  const purity = entry.purity || DEFAULTS.purity[material] || "22K";

  // Get making charge for material
  const makingChargePerGram =
    DEFAULTS.makingChargePerGram[material] || DEFAULTS.makingChargePerGram.gold;

  // Get stone charge with fallback to default
  const stoneCharge =
    entry.stoneCharge != null ? entry.stoneCharge : DEFAULTS.stoneCharge;

  // Determine image URL:
  // 1. Use image from CSV if provided (can be Google Drive URL)
  // 2. Fall back to local path based on ID
  const image = entry.image || `/images/products/${entry.id}.jpg`;

  // Build product object
  const product = {
    id: entry.id,
    sku: entry.sku || entry.id,
    material,
    category,
    name,
    weight: entry.weight,
    size: entry.size,
    purity,
    stoneCharge,
    makingChargePerGram,
    gstPercent: DEFAULTS.gstPercent,
    image,
    // Display names for UI - use defaults or prettify the slug
    materialDisplay: DEFAULTS.materialNames[material] || prettifySlug(material),
    categoryDisplay: DEFAULTS.categoryNames[category] || prettifySlug(category),
  };

  // Calculate price
  product.price = calculatePrice({
    weight: product.weight,
    purity: product.purity,
    material: product.material,
    makingChargePerGram: product.makingChargePerGram,
    stoneCharge: product.stoneCharge,
    gstPercent: product.gstPercent,
    rates,
  });

  return product;
}

/**
 * Parse all CSV entries and group by product ID
 * Products with same ID but different weights are variants
 */
export function parseAllProducts(entries, rates) {
  const productsMap = new Map();

  entries.forEach((entry) => {
    const product = parseProduct(entry, rates);
    if (!product) return;

    // Use base ID (without variant-specific parts) for grouping
    const baseId = product.id;

    if (!productsMap.has(baseId)) {
      // First variant - create product entry
      productsMap.set(baseId, {
        id: baseId,
        name: product.name,
        material: product.material,
        category: product.category,
        materialDisplay: product.materialDisplay,
        categoryDisplay: product.categoryDisplay,
        image: product.image,
        variants: [],
      });
    }

    // Add as variant
    productsMap.get(baseId).variants.push({
      sku: product.sku,
      weight: product.weight,
      size: product.size,
      purity: product.purity,
      price: product.price,
    });
  });

  // Convert map to array
  return Array.from(productsMap.values());
}

/**
 * Filter products by material, category, and/or search query
 */
export function filterProducts(products, { material, category, search }) {
  return products.filter((product) => {
    // Filter by material
    if (material && product.material !== material.toLowerCase()) {
      return false;
    }
    // Filter by category
    if (category && product.category !== category.toLowerCase()) {
      return false;
    }
    // Filter by search query
    if (search) {
      const searchLower = search.toLowerCase();
      const searchableText = [
        product.name,
        product.material,
        product.category,
        product.materialDisplay,
        product.categoryDisplay,
        product.id,
      ]
        .join(" ")
        .toLowerCase();
      
      // Check if any search word matches
      const searchWords = searchLower.split(" ").filter(Boolean);
      const matches = searchWords.every((word) => searchableText.includes(word));
      if (!matches) {
        return false;
      }
    }
    return true;
  });
}

/**
 * Get unique materials from products
 */
export function getUniqueMaterials(products) {
  const materials = new Set(products.map((p) => p.material));
  return Array.from(materials);
}

/**
 * Get unique categories from products
 */
export function getUniqueCategories(products) {
  const categories = new Set(products.map((p) => p.category));
  return Array.from(categories);
}
