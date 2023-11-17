import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import SingleProduct from "./SingleProduct";
import Animation from "../../reusable/Animation";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

export default function FeaturedProduct() {
  const { products } = useContext(ProductContext);
  const featuredProducts = products.filter((p) => p.featured);
  const productTypes = featuredProducts.slice(4, 12);

  return (
    <div className="home-featured-product-section my-5">
      <Container className="home-product-container" style={{ maxWidth: 850 }}>
        <Animation>
          <div className="animate-service">
            <div>
              <h2 style={{ color: "black" }}>Featured Collection</h2>
              <p>Add featured products to weekly lineup</p>
            </div>
          </div>
        </Animation>
        <div className="home-products">
          <Row className="home-products-row my-5">
            {productTypes.map((p, id) => (
              <SingleProduct key={id} p={p} id={id} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
