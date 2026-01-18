// Smart defaults for product catalog
// Only override in CSV when values differ from these defaults

export const DEFAULTS = {
  // GST percentage applied to all products
  gstPercent: 3,

  // Default purity by material type
  purity: {
    gold: "22K",
    silver: "925",
    platinum: "950",
  },

  // Making charges per gram by material type (in INR)
  makingChargePerGram: {
    gold: 500,
    silver: 50,
    platinum: 800,
  },

  // Default stone charge (0 if no stones)
  stoneCharge: 0,

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
