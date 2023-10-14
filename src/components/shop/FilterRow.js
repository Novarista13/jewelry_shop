import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

export default function FilterRow({ title, data }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body style={{ color: "#555555", fontSize: 14 }}>
          <button className="selected-value mb-3">0 selected</button>
          <Row>
            {data.map((item, id) => (
              <Col sm={12} xs={6}>
                <Form.Check
                  inline
                  label={item}
                  name={item}
                  className="raw-mateirals"
                  type={"checkbox"}
                  id={item}
                />
              </Col>
            ))}
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
