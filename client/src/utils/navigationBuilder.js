import { prettifySlug } from "./parseProduct";

/**
 * Fixed parent materials - these never change
 */
const PARENT_MATERIALS = ["gold", "silver", "platinum"];

/**
 * Material display names
 */
const MATERIAL_NAMES = {
  gold: "Gold",
  silver: "Silver",
  platinum: "Platinum",
};

/**
 * Build dynamic navigation items from products
 * Parent materials are fixed (Gold, Silver, Platinum, Coins)
 * Sub-categories are dynamically generated from products
 * 
 * @param {Array} products - Array of product objects
 * @returns {Array} Navigation items for the header
 */
export function buildNavigation(products) {
  // Start with Home
  const navItems = [
    { label: "Home", href: "/" },
    { label: "All Jewellery", href: "/shop" },
  ];

  // Group products by material and category
  const materialCategoryMap = new Map();
  const coinCategories = new Set();

  products.forEach((product) => {
    const { material, category } = product;
    
    // Handle coins separately (can be gold coins, silver coins, etc.)
    if (category === "coins") {
      coinCategories.add(material);
      return;
    }

    // Group by material
    if (!materialCategoryMap.has(material)) {
      materialCategoryMap.set(material, new Set());
    }
    materialCategoryMap.get(material).add(category);
  });

  // Add fixed parent materials with dynamic children
  PARENT_MATERIALS.forEach((material) => {
    const categories = materialCategoryMap.get(material);
    
    // Only add if there are products for this material
    if (categories && categories.size > 0) {
      const children = Array.from(categories)
        .sort() // Sort alphabetically
        .map((category) => ({
          label: `${MATERIAL_NAMES[material]} ${prettifySlug(category)}`,
          href: `/shop?material=${material}&category=${category}`,
        }));

      navItems.push({
        label: MATERIAL_NAMES[material],
        href: `/shop?material=${material}`,
        children,
      });
    }
  });

  // Add Coins section if there are coin products
  if (coinCategories.size > 0) {
    const coinChildren = Array.from(coinCategories)
      .filter((material) => PARENT_MATERIALS.includes(material))
      .sort()
      .map((material) => ({
        label: `${MATERIAL_NAMES[material]} Coins`,
        href: `/shop?material=${material}&category=coins`,
      }));

    if (coinChildren.length > 0) {
      navItems.push({
        label: "Coins",
        href: "/shop?category=coins",
        children: coinChildren,
      });
    }
  }

  // Add any OTHER materials that are not in the fixed list (dynamic new materials)
  materialCategoryMap.forEach((categories, material) => {
    if (!PARENT_MATERIALS.includes(material) && categories.size > 0) {
      const materialName = prettifySlug(material);
      const children = Array.from(categories)
        .sort()
        .map((category) => ({
          label: `${materialName} ${prettifySlug(category)}`,
          href: `/shop?material=${material}&category=${category}`,
        }));

      navItems.push({
        label: materialName,
        href: `/shop?material=${material}`,
        children,
      });
    }
  });

  // Add About Us at the end
  navItems.push({ label: "About Us", href: "/about" });

  return navItems;
}

/**
 * Get static navigation items (fallback when products are not loaded)
 */
export function getStaticNavigation() {
  return [
    { label: "Home", href: "/" },
    { label: "All Jewellery", href: "/shop" },
    {
      label: "Gold",
      href: "/shop?material=gold",
      children: [
        { label: "Gold Rings", href: "/shop?material=gold&category=rings" },
        { label: "Gold Earrings", href: "/shop?material=gold&category=earrings" },
        { label: "Gold Pendants", href: "/shop?material=gold&category=pendants" },
        { label: "Gold Bangles", href: "/shop?material=gold&category=bangles" },
      ],
    },
    {
      label: "Silver",
      href: "/shop?material=silver",
      children: [
        { label: "Silver Rings", href: "/shop?material=silver&category=rings" },
        { label: "Silver Earrings", href: "/shop?material=silver&category=earrings" },
      ],
    },
    {
      label: "Platinum",
      href: "/shop?material=platinum",
      children: [
        { label: "Platinum Rings", href: "/shop?material=platinum&category=rings" },
      ],
    },
    {
      label: "Coins",
      href: "/shop?category=coins",
      children: [
        { label: "Gold Coins", href: "/shop?material=gold&category=coins" },
        { label: "Silver Coins", href: "/shop?material=silver&category=coins" },
      ],
    },
    { label: "About Us", href: "/about" },
  ];
}
