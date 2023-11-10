import PictureCarousel from "./PictureCarousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "./LoginForm";
import Card from "react-bootstrap/Card";
import { useContext, useState } from "react";
import { userAuth } from "../../api/loginApi";
import { useNavigate } from "react-router-dom";
import { UserIdContext } from "../../contexts/UserContext";

export default function Login() {
  const [data, setData] = useState({});
  const [userData, setUserData] = useState({});
  const { setUserId } = useContext(UserIdContext);
  let navigate = useNavigate();

  const url = "http://localhost:3001/api/auth/login";
  const handleSubmit = (e) => {
    e.preventDefault();
    userAuth(url, data, setUserData);

    setTimeout(() => {
      if (userData._id) {
        setUserId(userData._id);
        console.log(userData._id);
        localStorage.setItem("userId", userData._id);
        navigate("/admin");
      } else {
        alert("Failed Login");
      }
    }, 3000);
  };

  return (
    <div className="admin-section px-3">
      <Card style={{ margin: "50px auto", maxWidth: 900 }}>
        <Row>
          <Col sm={6} xs={12}>
            <LoginForm
              h4="Welcome back to"
              h2="Login"
              button="Login"
              p1="Don't"
              p2="Get Started"
              link="/register"
              data={data}
              setData={setData}
              destainedLink="/admin"
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
