import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRef } from "react";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

export default function FilterPrice() {
  const { price, setPrice } = useContext(ProductContext);

  const startPriceRef = useRef();
  const endPriceRef = useRef();

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body style={{ color: "#555555", fontSize: 14 }}>
          <button
            className="selected-value mb-3"
            onClick={() => {
              startPriceRef.current.value = 0;
              endPriceRef.current.value = 200;
              setPrice({
                startPrice: 0,
                endPrice: 200,
              });
              localStorage.setItem("price", JSON.stringify(price));
            }}
          >
            Reset
          </button>
          <div>
            <Form className="form-inline mb-3">
              <Row>
                <Col>
                  <Form.Label>From $ 0</Form.Label>
                  <Form.Control
                    size="sm"
                    min={5}
                    max={100}
                    maxLength={3}
                    defaultValue={price.startPrice}
                    type="number"
                    ref={startPriceRef}
                  />
                </Col>
                <Col>
                  <Form.Label>To $ 200</Form.Label>
                  <Form.Control
                    size="sm"
                    min={101}
                    maxLength={3}
                    max={200}
                    defaultValue={price.endPrice}
                    type="number"
                    ref={endPriceRef}
                  />
                </Col>
              </Row>
            </Form>
          </div>
          <button
            onClick={() => {
              setPrice({
                startPrice: parseInt(startPriceRef.current.value),
                endPrice: parseInt(endPriceRef.current.value),
              });
              localStorage.setItem("price", JSON.stringify(price));
            }}
          >
            Filter
          </button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
