import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { services } from "../../data/services";
import Animation from "../../reusable/Animation";

export default function Service() {

  return (
    <div className="home-service-section">
      <Container className="home-service-container" style={{ maxWidth: 850 }}>
        <Animation>
          <Row className="home-service-rows animate-service">
            {services.map((s, id) => (
              <Col md={3} key={id} sm={6}>
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
        </Animation>
      </Container>
    </div>
  );
}
