// Navigation items for header
export const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "All Jewellery",
    href: "/shop",
  },
  {
    label: "Gold",
    href: "/shop?material=gold",
    children: [
      { label: "Gold Rings", href: "/shop?material=gold&category=rings" },
      { label: "Gold Earrings", href: "/shop?material=gold&category=earrings" },
      { label: "Gold Pendants", href: "/shop?material=gold&category=pendants" },
      { label: "Gold Bangles", href: "/shop?material=gold&category=bangles" },
      { label: "Gold Bracelets", href: "/shop?material=gold&category=bracelets" },
      { label: "Gold Nose Pins", href: "/shop?material=gold&category=nose-pins" },
    ],
  },
  {
    label: "Silver",
    href: "/shop?material=silver",
    children: [
      { label: "Silver Rings", href: "/shop?material=silver&category=rings" },
      { label: "Silver Earrings", href: "/shop?material=silver&category=earrings" },
      { label: "Silver Bracelets", href: "/shop?material=silver&category=bracelets" },
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
  {
    label: "Platinum",
    href: "/shop?material=platinum",
    children: [
      { label: "Platinum Rings", href: "/shop?material=platinum&category=rings" },
      { label: "Platinum Pendants", href: "/shop?material=platinum&category=pendants" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
];

// Categories for display on homepage
export const categories = [
  {
    name: "Rings",
    slug: "rings",
    img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Earrings",
    slug: "earrings",
    img: "https://images.pexels.com/photos/1457984/pexels-photo-1457984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Pendants",
    slug: "pendants",
    img: "https://images.pexels.com/photos/1457985/pexels-photo-1457985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Bangles",
    slug: "bangles",
    img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Bracelets",
    slug: "bracelets",
    img: "https://images.pexels.com/photos/1457984/pexels-photo-1457984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Nose Pins",
    slug: "nose-pins",
    img: "https://images.pexels.com/photos/1457985/pexels-photo-1457985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
  {
    name: "Coins",
    slug: "coins",
    img: "https://images.pexels.com/photos/1457991/pexels-photo-1457991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
  },
];

// Hero section slider data
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
    description: "Shop Now Before It's Gone",
  },
];

// About Us page data - Update this with actual information
export const aboutUsData = {
  shopName: "KP Jewellers",
  tagline: "Trusted Jewellers Since Generations",
  established: "1985",
  ownerName: "Mr. Krishna Patel",
  ownerTitle: "Founder & Master Craftsman",
  ownerImage: "https://via.placeholder.com/300x300?text=Owner+Photo",
  ownerMessage: `Welcome to KP Jewellers! For over three decades, we have been crafting exquisite jewellery pieces that celebrate life's precious moments. Our commitment to quality, authenticity, and customer satisfaction has made us a trusted name in the jewellery industry.

Every piece at KP Jewellers is crafted with love, precision, and the finest materials. We believe that jewellery is not just an accessory – it's an emotion, a memory, and a legacy that passes through generations.`,
  
  features: [
    {
      title: "100% Certified",
      description: "All our jewellery comes with BIS Hallmark certification ensuring purity and authenticity.",
    },
    {
      title: "Lifetime Exchange",
      description: "We offer lifetime exchange on all gold and diamond jewellery at current market rates.",
    },
    {
      title: "Custom Designs",
      description: "Get your dream jewellery custom-made by our expert craftsmen.",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden charges. Clear breakdown of gold rate, making charges, and taxes.",
    },
  ],

  contact: {
    address: "123, Main Market, City Name, State - 123456",
    phone: "+91 XXXXX XXXXX",
    whatsapp: "+91 XXXXX XXXXX",
    email: "info@kpjewellers.com",
    timing: "10:00 AM - 9:00 PM (All Days)",
  },

  socialLinks: {
    facebook: "https://facebook.com/kpjewellers",
    instagram: "https://instagram.com/kpjewellers",
    twitter: "https://twitter.com/kpjewellers",
  },
};
