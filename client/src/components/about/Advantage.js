import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { advantages } from "../../data/advantages";
import Animation from "../../reusable/Animation";

export default function Advantage() {
  return (
    <div className="about-advantage-section">
      <Container
        className="about-advantage-container"
        style={{ maxWidth: 800 }}
      >
        <Animation>
          <div className="my-5 animate-service">
            <div>
              <h5 style={{ color: "black", fontWeight: 600 }}>Why Choose Us</h5>
              <p>
                we combine the allure of finely crafted jewelry with a
                commitment to exceptional service, ensuring your every moment is
                adorned with elegance.
              </p>
            </div>
          </div>
        </Animation>
        <Animation>
          <Row className="home-advantage-rows animate-service">
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
        </Animation>
      </Container>
    </div>
  );
}
