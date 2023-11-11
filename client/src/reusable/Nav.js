import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FiChevronDown } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { PiUserCircleBold, PiHeart } from "react-icons/pi";
import shopLogo from "../images/shop-logo-nav.svg";
import { useContext } from "react";
import { UserIdContext } from "../contexts/UserContext";

function NavBar() {
  const { userId } = useContext(UserIdContext);
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-section">
      <Container>
        <Navbar.Brand href="#home">
          <img
            width={50}
            className="footer-logo"
            src={shopLogo}
            alt="footer-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Item>
              <Nav.Link href="#">
                <Link className="nav-links" to="/home">
                  Home
                  <FiChevronDown />
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <Link className="nav-links" to="/shop">
                  Shop
                  <FiChevronDown />
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <Link className="nav-links" to="/about">
                  About Us
                  <FiChevronDown />
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <Link className="nav-links" to="/contact">
                  Contact Us
                  <FiChevronDown />
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline="true" className="nav-search-form">
            <InputGroup style={{ borderRadius: 25 }}>
              <button type="submit" className="nav-search-bottom">
                <BsSearch style={{ height: 40, width: 20 }} />
              </button>
              <Form.Control
                className="nav-search-input"
                placeholder="Search our store"
                aria-label="Search our store"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
          <Nav>
            <Nav.Link href="#">
              <Link className="nav-links" to={userId ? "/user" : "/login"}>
                <PiUserCircleBold style={{ height: 50, width: 25 }} />
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              {/* <Link className="nav-links" to="/contact"> */}
              <PiHeart style={{ height: 50, width: 25 }} />
              {/* </Link> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
