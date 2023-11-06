import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shopLogo from "../images/shop-logo.svg";

export default function Footer() {
  return (
    <div className="footer-section">
      <Container>
        <Row className="footer-rows">
          <Col lg={4}>
            <img
              width={80}
              className="footer-logo d-block mx-5"
              src={shopLogo}
              alt="footer-logo"
            />
            Our commitment to quality, craftsmanship, and outstanding customer
            service has made us your trusted destination for timeless treasures.
            Discover your perfect piece and let it become a part of your unique
            story today.
          </Col>
          <Col lg={4} className="my-3" style={{ lineHeight: "2" }}>
            <p style={{ fontWeight: 600 }}>Contact Us</p>
            "Elevate Your Elegance: Adorn Your Story"
            <br />
            info@jewelhavenluxury.com <br />
            (555) 123-4567
          </Col>
          <Col
            lg={4}
            className="footer-information my-3"
            style={{ lineHeight: "2" }}
          >
            <p style={{ fontWeight: 600 }}>Information</p>
            <Row>
              <Col sm={6} xs={12}>
                Terms of Service
                <br />
                Privacy Policy
                <br />
                Refund Policy
              </Col>
              <Col>
                Faqs
                <br />
                Size Chart
                <br />
                Shipping Policy
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
