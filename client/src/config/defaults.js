// Smart defaults for product catalog
// Only override in CSV when values differ from these defaults

export const DEFAULTS = {
  // Default purity by material type
  purity: {
    gold: "22K",
    silver: "925",
    platinum: "950",
  },

  // Category display names for UI
  categoryNames: {
    rings: "Rings",
    bracelets: "Bracelets",
    "nose-pins": "Nose Pins",
    earrings: "Earrings",
    pendants: "Pendants",
    bangles: "Bangles",
    coins: "Coins",
    necklaces: "Necklaces",
  },

  // Material display names for UI
  materialNames: {
    gold: "Gold",
    silver: "Silver",
    platinum: "Platinum",
  },

  // Placeholder image when product image is not found
  placeholderImage: "https://via.placeholder.com/300x300?text=No+Image",
};
