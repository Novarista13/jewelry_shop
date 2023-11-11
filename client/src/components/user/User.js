import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import carousel1 from "../../images/user/carousel1.jpg";
import Card from "react-bootstrap/Card";
import UserProfile from "./UserProfile";
import { useContext, useState } from "react";
import { useUserFetch } from "../../api/loginApi";
import { UserIdContext } from "../../contexts/UserContext";

export default function User() {
  const [userData, setUserData] = useState({});
  const { userId } = useContext(UserIdContext);
  useUserFetch(userId, setUserData);

  return (
    <div className="user-section px-3">
      <Card style={{ margin: "50px auto", maxWidth: 900 }}>
        <Row>
          <Col sm={6} xs={12}>
            <UserProfile data={userData} />
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