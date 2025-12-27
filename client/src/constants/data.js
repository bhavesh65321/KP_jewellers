export const products = [
  {
    id: 1,
    name: "Gold Necklace",
    price: "$1,299",
    image:
      "https://bindhani.in/cdn/shop/files/SHJWST00488White_AMain.jpg?v=1745644763",
  },
  {
    id: 2,
    name: "Diamond Ring",
    price: "$899",
    image:
      "https://www.orra.co.in/media/catalog/product/cache/8706a87b250cd4797f5bf599698c5c7a/o/n/ons23036.jpg",
  },
  {
    id: 3,
    name: "Pearl Earrings",
    price: "$499",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/7/329719120/JS/DB/AG/159007652/artificial-jewellery-1000x1000.jpg",
  },
  {
    id: 4,
    name: "Silver Bracelet",
    price: "$299",
    image:
      "https://www.pateljewellers.com/pub/media/catalog/category/10_Aug_63_-_n2n.jpg",
  },
  {
    id: 5,
    name: "Platinum Pendant",
    price: "$1,599",
    image:
      "https://example.com/platinum-pendant.jpg",
  },
  {
    id: 6,
    name: "Ruby Necklace",
    price: "$2,099",
    image:
      "https://example.com/ruby-necklace.jpg",
  },
  {
    id: 7,
    name: "Emerald Ring",
    price: "$1,299",
    image:
      "https://example.com/emerald-ring.jpg",
  },
  {
    id: 8,
    name: "Sapphire Earrings",
    price: "$999",
    image:
      "https://example.com/sapphire-earrings.jpg",
  },
  {
    id: 9,
    name: "Gold Bracelet",
    price: "$799",
    image:
      "https://example.com/gold-bracelet.jpg",
  },
  {
    id: 10,
    name: "Diamond Pendant",
    price: "$1,199",
    image:
      "https://example.com/diamond-pendant.jpg",
  },
];

export const categories = [
  {
    name: "Rings",
    img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Earrings",
    img: "https://images.pexels.com/photos/1457984/pexels-photo-1457984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Pendants",
    img: "https://images.pexels.com/photos/1457985/pexels-photo-1457985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Bangles",
    img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Bracelets",
    img: "https://images.pexels.com/photos/1457984/pexels-photo-1457984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Earrings",
    img: "https://images.pexels.com/photos/1457985/pexels-photo-1457985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Pendants",
    img: "https://images.pexels.com/photos/1457991/pexels-photo-1457991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Bangles",
    img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Bracelets",
    img: "https://images.pexels.com/photos/1457991/pexels-photo-1457991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
];

export const navItems = [
  {
    label: "Rings",
    href: "/products/rings",
    children: [
      { label: "Gold Rings", href: "/products/rings?material=Gold" },
      { label: "Diamond Rings", href: "/products/rings?material=Diamond" },
      { label: "Silver Rings", href: "/products/rings?material=Silver" },
    ],
  },
  {
    label: "Earrings",
    href: "/products/earrings",
    children: [
      { label: "Gold Earrings", href: "/products/earrings?material=Gold" },
      { label: "Diamond Earrings", href: "/products/earrings?material=Diamond" },
      { label: "Silver Earrings", href: "/products/earrings?material=Silver" },
    ],
  },
  {
    label: "Pendants",
    href: "/products/pendants",
    children: [
      { label: "Gold Pendants", href: "/products/pendants?material=Gold" },
      { label: "Diamond Pendants", href: "/products/pendants?material=Diamond" },
      { label: "Silver Pendants", href: "/products/pendants?material=Silver" },
    ],
  },
  {
    label: "All Jewellery",
    href: "#",
  },
];

export const heroSectionData = [
  {
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/7/329719120/JS/DB/AG/159007652/artificial-jewellery-1000x1000.jpg",
    title: "Elegance Everyday",
    subtitle: "Upto 100% Off",
    description: "On Diamond Jewellery Making Charges",
  },
  {
    image:
      "https://bindhani.in/cdn/shop/files/SHJWST00488White_AMain.jpg?v=1745644763",
    title: "Timeless Craft",
    subtitle: "Flat 50% Off",
    description: "Gold Necklaces & Earrings",
  },
  {
    image:
      "https://www.orra.co.in/media/catalog/product/cache/8706a87b250cd4797f5bf599698c5c7a/o/n/ons23036.jpg",
    title: "Luxury Redefined",
    subtitle: "New Arrivals",
    description: "Shop Now Before It’s Gone",
  },
];

export const bestSellerProducts = [
  {
    id: 1,
    name: "Gold Necklace",
    price: "1,299",
    image:
      "https://bindhani.in/cdn/shop/files/SHJWST00488White_AMain.jpg?v=1745644763",
    description: {
      "Base Material": "Gold",
      Stone: "Cubic Zirconia",
      Weight: "10 grams",
      Finish: "Polished",
    },
  },
  {
    id: 2,
    name: "Diamond Ring",
    price: "899",
    image:
      "https://www.orra.co.in/media/catalog/product/cache/8706a87b250cd4797f5bf599698c5c7a/o/n/ons23036.jpg",
    description: {
      "Base Material": "Gold",
      Stone: "Cubic Zirconia",
      Weight: "10 grams",
      Finish: "Polished",
    },
  },
  {
    id: 3,
    name: "Pearl Earrings",
    price: "499",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/7/329719120/JS/DB/AG/159007652/artificial-jewellery-1000x1000.jpg",
    description: {
      "Base Material": "Gold",
      Stone: "Cubic Zirconia",
      Weight: "10 grams",
      Finish: "Polished",
    },
  },
  {
    id: 4,
    name: "Silver Bracelet",
    price: "299",
    image:
      "https://www.pateljewellers.com/pub/media/catalog/category/10_Aug_63_-_n2n.jpg",
    description: {
      "Base Material": "Silver",
      Stone: "Cubic Zirconia",
      Weight: "10 grams",
      Finish: "Polished",
    },
  },
  {
    id: 5,
    name: "Gold Bracelet",
    price: "399",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/7/329719120/JS/DB/AG/159007652/artificial-jewellery-1000x1000.jpg",
    description: {
      "Base Material": "Gold",
      Stone: "Cubic Zirconia",
      Weight: "10 grams",
      Finish: "Polished",
    },
  },
  {
    id: 5,
    name: "Gold Bracelet",
    price: "399",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/7/329719120/JS/DB/AG/159007652/artificial-jewellery-1000x1000.jpg",
    description: {
      "Base Material": "Gold",
      Stone: "Cubic Zirconia",
      Weight: "10 grams",
      Finish: "Polished",
    },
  },
  {
    id: 5,
    name: "Gold Bracelet",
    price: "399",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/7/329719120/JS/DB/AG/159007652/artificial-jewellery-1000x1000.jpg",
    description: {
      "Base Material": "Gold",
      Stone: "Cubic Zirconia",
      Weight: "10 grams",
      Finish: "Polished",
    },
  },
  {
    id: 5,
    name: "Gold Bracelet",
    price: "399",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/7/329719120/JS/DB/AG/159007652/artificial-jewellery-1000x1000.jpg",
    description: {
      "Base Material": "Gold",
      Stone: "Cubic Zirconia",
      Weight: "10 grams",
      Finish: "Polished",
    },
  },
];
