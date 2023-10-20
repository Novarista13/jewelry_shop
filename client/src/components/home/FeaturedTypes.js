import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { featuredType } from "../../data/homeProductType";
import { Link } from "react-router-dom";

export default function FeaturedTypes() {
  return (
    <div className="home-featured-type-section">
      <Row className="home-featured-type-row">
        {featuredType.map((p, id) => (
          <Col
            md={6}
            xs={12}
            key={id}
            className="featured-type-col mx-1"
            style={{
              backgroundImage: `url(${p.image})`,
              height: 215,
              width: 450,
            }}
          >
            <div className="featured-type-text my-sm-4 my-2 mx-4">
              <p style={{fontSize: 13}}>{p.prefix}</p>
            <h3 className="mb-4" style={{fontWeight: 700,  whiteSpace: "pre-line"}}>{p.type}</h3>
            <Link>Shop Now</Link>
            </div>
            
          </Col>
        ))}
      </Row>
    </div>
  );
}
