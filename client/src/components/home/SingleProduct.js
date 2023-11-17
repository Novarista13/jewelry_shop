import { FaCircle } from "react-icons/fa6";
import Col from "react-bootstrap/Col";
import product from "../../images/home/product.png";
// import { Link } from "react-router-dom";

export default function SingleProduct({ p, id }) {
  return (
    <Col md={3} sm={6} className="p-0 product-container" key={id}>
      <img
        width={200}
        height={200}
        className="product-image"
        style={{
          display: !p.is_instock ? "none" : "block",
        }}
        src={
          p.image.includes("https://")
            ? p.image
            : p.image
            ? "http://localhost:3001/images/" + p.image
            : product
        }
        alt="footer-logo"
      />
      <div className="product-caption mt-2">
        {/* <div className="my-2">{p.category}</div> */}
        {/* <Link
          className="d-block text-decoration-none"
          style={{ color: "#f3839b" }}
          to="/shop"
        >
          // See Details
        </Link> */}
        <FaCircle
          key={id}
          className="color-circle"
          style={{
            color: !p.is_instock
              ? "gainsboro"
              : p.color.toLowerCase() === "rose"
              ? "#c12e35"
              : p.color.toLowerCase() === "gold with white"
              ? "#e8b65a"
              : p.color.toLowerCase() === "diamond"
              ? "#99A0B3"
              : p.color.toLowerCase() === "blue sapphire with white"
              ? "#7BB1E1"
              : p.color,
          }}
        />
        <p>
          {p.name}{" "}
          <span style={{ display: "block", color: "#f3839b" }}>${p.price}</span>
        </p>
      </div>
    </Col>
  );
}
