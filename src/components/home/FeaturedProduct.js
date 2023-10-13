import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCircle } from "react-icons/fa6";
import { featuredTempData } from "../../data/tempData";

export default function FeaturedProduct() {
  return (
    <div className="home-featured-product-section my-5">
      <Container className="home-product-container" style={{ maxWidth: 850 }}>
        <h2 style={{ color: "black" }}>Featured Collection</h2>
        <p>Add featured products to weekly lineup</p>
        <div className="home-products">
          <Row className="home-products-row">
            {featuredTempData.map((p, id) => (
              <Col md={3} sm={6} className="p-0" key={id}>
                <img
                  width={200}
                  className="product-image"
                  src={p.image}
                  alt="footer-logo"
                />
                <div className="my-2">{p.category}</div>
                {p.color.map((c, id) => (
                  <FaCircle
                    key={id}
                    className="color-circle"
                    style={{ color: c }}
                  />
                ))}
                <p>
                  {p.name}{" "}
                  <span style={{ display: "block", color: "#f3839b" }}>
                    ${p.price}
                  </span>
                </p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
