import Col from "react-bootstrap/Col";
import { FaCircle } from "react-icons/fa6";

export default function ProductSingle({ data }) {
  return data.map((p, id) => (
    <Col md={4} sm={6} className="p-0" key={id}>
      <img
        width={200}
        className="product-image"
        src={p.image}
        alt="footer-logo"
      />
      <div className="my-2">{p.category}</div>
      {p.color.map((c, id) => (
        <FaCircle key={id} className="color-circle" style={{ color: c }} />
      ))}
      <p>
        {p.name}{" "}
        <span style={{ display: "block", color: "#f3839b" }}>${p.price}</span>
      </p>
    </Col>
  ));
}
