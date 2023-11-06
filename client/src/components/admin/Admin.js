import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import carousel1 from "../../images/admin/carousel1.jpg";
import Card from "react-bootstrap/Card";
import AdminProfile from "./AdminProfile";

export default function Admin() {
  return (
    <div className="admin-section px-3">
      <Card
        style={{margin: "50px auto", maxWidth: 900 }}
      >
        <Row>
          <Col sm={6} xs={12}>
            <AdminProfile />
          </Col>
          <Col>
            <img
              width="100%"
              height={600}
              className="modal-image mx-auto"
              src={carousel1}
              alt="carousel1"
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
