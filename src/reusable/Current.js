import { useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import Container from "react-bootstrap/Container";

export default function Current() {
  const location = useLocation();
  // console.log(location.pathname);
  // location.pathname !== "/home" && location.pathname !== "/"
  //   ? console.log("it's work")
  //   : console.log("It does not work!");

  return location.pathname !== "/home" && location.pathname !== "/" ? (
    <div className="current-path-section mx-auto">
      <Container className="current-path-container" style={{ maxWidth: 820 }}>
        <AiOutlineHome style={{ height: 23, width: 23 }} />
        <span className="px-3">/</span>
        <span style={{ color: "#f3839b" }}>
          {location.pathname === "/shop"
            ? "Products"
            : location.pathname === "/about"
            ? "About Us"
            : location.pathname === "/contact"
            ? "Contact Us"
            : null}
        </span>
      </Container>
    </div>
  ) : null;
}
