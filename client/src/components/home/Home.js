import AvailableProduct from "./AvailableProduct";
import FeaturedProduct from "./FeaturedProduct";
import FeaturedTypes from "./FeaturedTypes";
import Hero from "./Hero";
import Product from "./Product";
import ProductType from "./ProductType";
import Service from "./Service";
import Testimonial from "../../reusable/Testimonial";

export default function Home() {
  return (
    <div className="home-section">
      <Hero />
      <Service />
      <Product />
      <ProductType />
      <FeaturedTypes />
      <FeaturedProduct />
      <Testimonial />
      <AvailableProduct />
    </div>
  );
}
