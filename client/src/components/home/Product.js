import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { tempData } from "../../data/tempData";
import SingleProduct from "./SingleProduct";
import Animation from "../../reusable/Animation";

export default function Product() {
  return (
    <div className="home-product-section">
      <Container
        className="home-product-container"
        style={{ maxWidth: 850, marginTop: "3.7em" }}
      >
        <Animation>
          <div className="animate-service">
            <div>
              <h2 style={{ color: "black" }}>Our Products</h2>
              <p>Add our products to weekly lineup</p>
            </div>
            <div className="home-product-categories d-flex justify-content-around">
              <span>Gold</span>
              <span>Diamond</span>
              <span>Bronze</span>
              <span>Silver</span>
            </div>
          </div>
        </Animation>
        <div className="home-products">
          <Row className="home-products-row my-5">
            {tempData.map((p, id) => (
              <SingleProduct key={id} p={p} id={id} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
