
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { bestSellerProducts } from "../constants/data";
import SectionHeading from "./SectionHeading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// SVG Arrow Components (same as homepage)
const ArrowLeft = (props) => (
  <button
    {...props}
    className="absolute z-10 left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
    style={{ ...props.style }}
    aria-label="Previous"
  >
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" stroke="#a78bfa" fill="#fff" />
      <path d="M14 8l-4 4 4 4" stroke="#a78bfa" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const ArrowRight = (props) => (
  <button
    {...props}
    className="absolute z-10 right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
    style={{ ...props.style }}
    aria-label="Next"
  >
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" stroke="#a78bfa" fill="#fff" />
      <path d="M10 8l4 4-4 4" stroke="#a78bfa" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const BestSellerProducts = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
  <section className="w-full bg-white py-12">
      <h2 className="text-center text-3xl font-serif font-bold mb-8 text-gray-800">
        Best Sellers
      </h2>
      <div className="px-6 relative">
        <Slider {...settings}>
          {bestSellerProducts.map((product) => (
            <div key={product.id} className="!px-0">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BestSellerProducts;
