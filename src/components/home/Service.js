import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PiAirplaneTiltBold } from "react-icons/pi";
import { Tb24Hours } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";import { AiOutlineSecurityScan } from "react-icons/ai";

export default function Service() {
  return (
    <div className="home-service-section">
      <Container className="home-service-container">
        <Row className="home-service-rows">
          <Col md={3} sm={6}>
            <Row>
              <Col xs={2}>
                <PiAirplaneTiltBold
                  style={{ height: 30, width: 30, color: "#f3839b" }}
                />
              </Col>
              <Col>
                <div>Free Shipping</div>
                <span>Free shipping all order</span>
              </Col>
            </Row>
          </Col>
          <Col md={3} sm={6}>
            <Row>
              <Col xs={2}>
                <Tb24Hours
                  style={{ height: 30, width: 30, color: "#f3839b" }}
                />
              </Col>
              <Col>
                <div>Support 24/7</div>
                <span>Support 24 hours a day</span>
              </Col>
            </Row>
          </Col>
          <Col md={3} sm={6}>
            <Row>
              <Col xs={2}>
                <GiReceiveMoney
                  style={{ height: 30, width: 30, color: "#f3839b" }}
                />
              </Col>
              <Col>
                <div>Money Return</div>
                <span>30 days for free return</span>
              </Col>
            </Row>
          </Col>
          <Col md={3} sm={6}>
            <Row>
              <Col xs={2}>
                <AiOutlineSecurityScan
                  style={{ height: 30, width: 30, color: "#f3839b" }}
                />
              </Col>
              <Col>
                <div>100% Payment Secure</div>
                <span>We ensure secure payment</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
