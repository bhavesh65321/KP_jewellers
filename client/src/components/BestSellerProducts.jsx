import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { bestSellerProducts } from "../constants/data";
import SectionHeading from "./SectionHeading";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSellerProducts = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // change as needed
    speed: 1000, // smooth transition speed
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false, // hide arrows if not needed
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
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-amber-100 py-10">
      <SectionHeading title="Best Sellers" />

      <div className="md:px-16">
        <Slider {...settings}>
          {bestSellerProducts.map((product) => (
            <div key={product.id} className="px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSellerProducts;
