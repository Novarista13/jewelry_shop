import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactUs() {
  return (
    <div className="contact-us-section">
      <Container style={{ maxWidth: 850 }}>
        <Row className="mx-auto justify-content-center">
          <Col sm={6} xs={12}>
            <ContactForm />
          </Col>
          <Col sm={6} xs={12}>
            <ContactInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
