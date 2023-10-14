import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FilterPrice() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body style={{ color: "#555555", fontSize: 14 }}>
          <button className="selected-value mb-3">0 selected</button>
          <div>
            <Form className="form-inline mb-3">
              <Row>
                <Col>
                  <Form.Label>From $</Form.Label>
                  <Form.Control size="sm" type="number" />
                </Col>
                <Col>
                  <Form.Label>To $</Form.Label>
                  <Form.Control size="sm" type="number" />
                </Col>
              </Row>
            </Form>
          </div>
          <button>Filter</button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
