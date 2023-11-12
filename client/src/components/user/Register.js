import PictureCarousel from "./PictureCarousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "./LoginForm";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { userAuth } from "../../api/loginApi";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function Register() {
  const [data, setData] = useState({});
  let navigate = useNavigate();

  let url = "http://localhost:3001/api/auth/register";
  const handleSubmit = (e) => {
    e.preventDefault();
    userAuth(url, data).then((value) => {
      setTimeout(() => {
        if (value._id) {
          NotificationManager.success(
            "Successfully Registered",
            "Success",
            3000
          );
          navigate("/login");
        } else {
          NotificationManager.error("Try Again!", "Registeration Failed", 3000);
        }
      }, 3000);
    });
  };

  return (
    <div className="user-section px-3">
      <Card style={{ margin: "50px auto", maxWidth: 900 }}>
        <Row>
          <Col sm={6} xs={12}>
            <LoginForm
              register={true}
              h4="Welcome to"
              h2="Register"
              button="Register"
              p1="Already"
              p2="Login"
              link="/login"
              destainedLink="/login"
              data={data}
              setData={setData}
              handleSubmit={handleSubmit}
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
