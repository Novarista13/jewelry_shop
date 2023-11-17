import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import code from "../../images/home/code.svg";
import product from "../../images/home/product.png";

export default function AvailableSmallProduct({ data, title }) {
  return (
    <Col sm={6} xs={12} className="available-right-col">
      <Row className="p-0">
        <p>
          {title + " "}
          <img width={20} className="d-inline" src={code} alt="footer-logo" />
        </p>
        {data.map((p, id) => (
          <Col sm="auto" xs={6} className="me-auto" key={id}>
            <Row>
              <Col xs={4}>
                <img
                  width={50}
                  className="d-inline"
                  src={
                    p.image.includes("https://")
                      ? p.image
                      : p.image
                      ? "http://localhost:3001/images/" + p.image
                      : product
                  }
                  alt="footer-logo"
                />
              </Col>
              <Col
                xs={8}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p >
                  {/* {p.name}{" "} */}
                  <span style={{ display: "block", color: "#f3839b" }}>
                    ${p.price}
                  </span>
                </p>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Col>
  );
}
