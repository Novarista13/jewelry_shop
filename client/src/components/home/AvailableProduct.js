import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import available from "../../images/home/available.png";
import code from "../../images/home/code.svg";
import { tempData } from "../../data/tempData";
import Animation from "../../reusable/Animation";

export default function AvailableProduct() {
  return (
    <div className="home-available-product-section">
      <Container style={{ maxWidth: 720 }}>
        <Animation>
          <Row className="home-available-product-row animate-type">
            <Col
              md={6}
              xs={12}
              className="available-product-col p-0 mx-auto"
              style={{
                backgroundImage: `url(${available})`,
              }}
            ></Col>
            <Col className="p-0" md={6} xs={12} style={{ textAlign: "Center" }}>
              <Row className="available-right-row m-0">
                <Col sm={6} xs={12} className="available-right-col">
                  <Row className="p-0">
                    <p>
                      Best seller product{" "}
                      <img
                        width={20}
                        className=" d-inline"
                        src={code}
                        alt="footer-logo"
                      />
                    </p>
                    {tempData.map((p, id) => (
                      <Col sm="auto" xs={6} className="me-auto" key={id}>
                        <Row>
                          <Col xs={4}>
                            <img
                              width={50}
                              className="d-inline"
                              src={p.image}
                              alt="footer-logo"
                            />
                          </Col>
                          <Col xs={8}>
                            <p>
                              {p.name}{" "}
                              <span
                                style={{ display: "block", color: "#f3839b" }}
                              >
                                ${p.price}
                              </span>
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col sm={6} xs={12} className="available-right-col">
                  <Row className="p-0">
                    <p>
                      On Sale product{" "}
                      <img
                        width={20}
                        className="d-inline"
                        src={code}
                        alt="footer-logo"
                      />
                    </p>
                    {tempData.map((p, id) => (
                      <Col sm="auto" xs={6} className="me-auto" key={id}>
                        <Row>
                          <Col xs={4}>
                            <img
                              width={50}
                              className="d-inline"
                              src={p.image}
                              alt="footer-logo"
                            />
                          </Col>
                          <Col xs={8}>
                            <p>
                              {p.name}{" "}
                              <span
                                style={{ display: "block", color: "#f3839b" }}
                              >
                                ${p.price}
                              </span>
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Animation>
      </Container>
    </div>
  );
}
