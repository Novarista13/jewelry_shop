import PictureCarousel from "./PictureCarousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "./LoginForm";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { userAuth } from "../../api/loginApi";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({});
  const [userData, setUserData] = useState();
  let navigate = useNavigate();

  let url = "http://localhost:3001/api/auth/register";
  const handleSubmit = (e) => {
    e.preventDefault();
    userAuth(url, data, setUserData);

    setTimeout(() => {
      if (userData.length > 0) {
        alert("Registeration Success");
        navigate("/login");
      } else {
        alert("Registeration Failed");
      }
    }, 3000);
  };
  return (
    <div className="admin-section px-3">
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
