import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { services } from "../../data/services";


export default function Service() {

  return (
    <div className="home-service-section">
      <Container className="home-service-container" style={{ maxWidth: 850 }}>
        <Row className="home-service-rows">
          {services.map((s, id) => (
            <Col md={3} sm={6}>
            <Row>
              <Col xs={2}>
                <s.svg
                  style={{ height: 30, width: 30, color: "#f3839b" }}
                />
              </Col>
              <Col>
                <div>{s.title}</div>
                <span>{s.text}</span>
              </Col>
            </Row>
          </Col>
          ))}
          
        </Row>
      </Container>
    </div>
  );
}
