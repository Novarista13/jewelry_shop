import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ContactForm() {
  return (
    <div className="contact-form-section" style={{ textAlign: "left", margin: "50px auto" }}>
      <h5 style={{ fontWeight: 600 }} className="mb-3">
        Tell Us Your Project
      </h5>
      <Form>
        <div className="mb-4">
          <Row>
            <Col>
              <Form.Control size="sm" type="email" placeholder="Name*" />
            </Col>
            <Col>
              <Form.Control size="sm" type="email" placeholder="Email*" />
            </Col>
          </Row>
        </div>
        <div className="mb-4">
          <Row>
            <Col>
              <Form.Control size="sm" type="email" placeholder="Phone" />
            </Col>
            <Col>
              <Form.Control size="sm" type="email" placeholder="Subject" />
            </Col>
          </Row>
        </div>
        <div className="mb-4">
          <Form.Control
            size="sm"
            as="textarea"
            rows={5}
            placeholder="Message"
          />
        </div>
        <button>Send Message</button>
      </Form>
    </div>
  );
}
