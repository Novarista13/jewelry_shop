import PictureCarousel from "./PictureCarousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "./LoginForm";
import Card from "react-bootstrap/Card";

export default function Login() {
  return (
    <div className="admin-section px-3">
      <Card
        style={{margin: "50px auto", maxWidth: 900 }}>
        <Row>
          <Col sm={6} xs={12}>
            <LoginForm
              h4="Welcome back to"
              h2="Login"
              button="Login"
              p1="Don't"
              p2="Get Started"
              link="/register"
            />
          </Col>
          <Col>
            <PictureCarousel />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
