import Col from "react-bootstrap/Col";
import { FaCircle } from "react-icons/fa6";
import product from "../../images/home/product.png";
import sold from "../../images/sold.svg";
import ProductModal from "./ProductModal";

export default function ProductSingle({ data }) {
  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  console.log(data);
  return data.map((p, id) => (
    <Col md={4} sm={6} key={id} className={!p.is_instock ? "sold p-0" : "p-0"}>
      <div
        className={!p.is_instock ? "sold-img product-image" : null}
        style={{ backgroundImage: !p.is_instock ? `url(${product})` : null }}
      >
        {p.is_instock ? (
          <ProductModal productData={p}>
            <img
              width={200}
              className="product-image"
              style={{
                display: !p.is_instock ? "none" : "block",
                cursor: "pointer",
              }}
              src={product}
              alt="footer-logo"
            />
          </ProductModal>
        ) : null}

        <img
          width={100}
          className="sold-svg-image"
          style={{ display: !p.is_instock ? "block" : "none" }}
          src={sold}
          alt="footer-logo"
        />
      </div>
      <div className="my-2">{p.type ? capitalizeWords(p.type) : null}</div>
      {/* {p.color.map((c, id) => ( */}
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
      {/* ))} */}
      <p>
        {capitalizeWords(p.name)}{" "}
        <span
          style={{
            display: "block",
            color: !p.is_instock ? "gainsboro" : "#f3839b",
          }}
        >
          ${p.price}
        </span>
      </p>
    </Col>
  ));
}
