import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Animation from "../../reusable/Animation";

export default function ContactUs() {
  return (
    <div className="contact-us-section">
      <Container style={{ maxWidth: 850 }}>
        <Animation>
          <Row className="mx-auto justify-content-center animate-type">
            <Col sm={6} xs={12}>
              <ContactForm />
            </Col>
            <Col sm={6} xs={12}>
              <ContactInfo />
            </Col>
          </Row>
        </Animation>
      </Container>
    </div>
  );
}
