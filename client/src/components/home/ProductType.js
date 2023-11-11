import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { productType } from "../../data/homeProductType";
import Animation from "../../reusable/Animation";

export default function ProductType() {
  return (
    <div className="home-product-type-section">
      <Animation>
        <Row className="home-product-type-row animate-type mx-auto">
          {productType.map((p, id) => (
            <Col
              xl={3}
              sm={6}
              xs={12}
              key={id}
              className="product-type-col mx-xl-auto m-sm-1"
              style={{
                backgroundImage: `url(${p.image})`,
                height: 380,
                width: 315,
              }}
            >
              <p>{p.type}</p>
            </Col>
          ))}
        </Row>
      </Animation>
    </div>
  );
}
