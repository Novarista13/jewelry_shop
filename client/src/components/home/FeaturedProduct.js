import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { featuredTempData } from "../../data/tempData";
import SingleProduct from "./SingleProduct";
import Animation from "../../reusable/Animation";

export default function FeaturedProduct() {
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
            {featuredTempData.map((p, id) => (
              <SingleProduct p={p} id={id} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
