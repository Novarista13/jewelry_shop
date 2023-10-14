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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
