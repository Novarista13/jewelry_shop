import { FaCircle } from "react-icons/fa6";
import Col from "react-bootstrap/Col";

export default function SingleProduct({p, id}) {
  return (
    <Col md={3} sm={6} className="p-0 product-container" key={id}>
      <img
        width={200}
        height={200}
        className="product-image"
        src={p.image}
        alt="footer-logo"
      />
      <div className="product-caption">
        <div className="my-2">{p.category}</div>
        {p.color.map((c, id) => (
          <FaCircle key={id} className="color-circle" style={{ color: c }} />
        ))}
        <p>
          {p.name}{" "}
          <span style={{ display: "block", color: "#f3839b" }}>${p.price}</span>
        </p>
      </div>
    </Col>
  );
}