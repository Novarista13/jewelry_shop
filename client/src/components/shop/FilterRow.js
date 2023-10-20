import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

export default function FilterRow({ title, data }) {
  const { checkValue, setCheckValue } = useContext(ProductContext);
  
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body style={{ color: "#555555", fontSize: 14 }}>
          <button
            onClick={() => {
              setCheckValue(checkValue.filter((i) => i.type !== title));
              localStorage.setItem("checkValue", JSON.stringify(checkValue));
            }}
            className="selected-value mb-3"
          >
            Reset
          </button>
          <Row>
            {data.map((item, id) => (
              <Col sm={12} key={id} xs={6}>
                <Form.Check
                  inline
                  label={item}
                  name={item}
                  className="raw-mateirals"
                  checked={checkValue.some((v) => v.item === item)}
                  type={"checkbox"}
                  onChange={(e) => {
                    e.target.checked
                      ? setCheckValue([
                          ...checkValue,
                          { item: item, type: title },
                        ])
                      : setCheckValue(
                          checkValue.filter((i) => i.item !== item)
                        );
                    localStorage.setItem(
                      "checkValue",
                      JSON.stringify(checkValue)
                    );
                  }}
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
