import ProductCard from "./ProductCard";
import { bestSellerProducts } from "../constants/data";
import SectionHeading from "./SectionHeading";

const BestSellerProducts = () => {
  return (
    <div className="bg-amber-100 py-10">
      <SectionHeading title="Best Sellers" />

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-6 md:px-16">
        {bestSellerProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellerProducts;
