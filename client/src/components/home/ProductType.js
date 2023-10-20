import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { productType } from "../../data/homeProductType";

export default function ProductType() {
  return (
    <div className="home-product-type-section">
      <Row className="home-product-type-row">
        {productType.map((p, id) => (
          <Col
            xl={3}
            sm={6}
            xs={12}
            key={id}
            className="product-type-col mx-auto"
            style={{ backgroundImage: `url(${p.image})`, height: 380, width: 315 }}
          >
            <p>{p.type}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}
