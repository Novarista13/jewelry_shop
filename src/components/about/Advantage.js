import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { advantages } from "../../data/advantages";

export default function Advantage() {
  return (
    <div className="about-advantage-section">
      <Container
        className="about-advantage-container"
        style={{ maxWidth: 800 }}
      >
        <div className="my-5">
        <h5 style={{ color: "black", fontWeight: 600 }}>Why Choose Us</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>

        </div>
        <Row className="home-advantage-rows">
          {advantages.map((a, id) => (
            <Col md={4} key={id} className="mx-auto" sm={6}>
              <img
                width={40}
                className="about-advantage-image"
                src={a.svg}
                alt="advantages"
              />
              <div className="my-2" style={{ color: "black" }}>
                {a.title}
              </div>
              <span className="px-3">{a.text}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
