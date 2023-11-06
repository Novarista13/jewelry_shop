import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "../../images/about/about.png";

export default function Hero() {
  return (
    <div className="about-hero-section">
      <Container
        className="about-hero-container"
        style={{ maxWidth: 850, textAlign: "left" }}
      >
        <Row>
          <Col sm={6} xs={12}>
            <img
              width="100%"
              height="100%"
              className="about-hero-image"
              src={about}
              alt="footer-logo"
            />
          </Col>
          <Col className="my-auto">
            <h1 className="my-4" style={{ color: "#f3839b", fontWeight: 600 }}>
              About Us
            </h1>
            <p style={{ color: "black", fontSize: 15 }}>
              We are dedicated to providing our customers with exquisite,
              handcrafted pieces that capture the essence of elegance and
              beauty. Our journey began with a passion for artistry.
            </p>
            <p>
              We source the finest materials, from ethically mined gemstones to
              high-quality metals, ensuring that each creation is not only
              stunning but also built to last. Our artisans blend traditional
              techniques with modern design to create a wide range of jewelry.
            </p>
            <p>
              Our customers are at the heart of everything we do. We understand
              that choosing the perfect piece of jewelry can be a deeply
              personal and meaningful experience. That's why we are committed to
              providing customization options, and a comfortable shopping
              environment.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
