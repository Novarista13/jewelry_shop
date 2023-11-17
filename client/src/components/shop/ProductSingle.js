import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaCircle } from "react-icons/fa6";
import product from "../../images/home/product.png";
import sold from "../../images/sold.svg";
import ProductModal from "./ProductModal";
import addBtn from "../../images/add-btn.svg";
import AddProductModal from "./AddProduct";
import { useContext } from "react";
import { UserIdContext } from "../../contexts/UserContext";

export default function ProductSingle({ data }) {
  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const { userId } = useContext(UserIdContext);

  return (
    <Row className="mx-0">
      {data.map((p, id) => (
        <Col
          lg={4}
          sm={6}
          key={id}
          className={!p.is_instock ? "sold p-0 my-3" : "p-0 my-3"}
        >
          <div
            className={!p.is_instock ? "sold-img product-image" : null}
            style={{
              backgroundImage: !p.is_instock
                ? `url(${
                    p.image.includes("https://")
                      ? p.image
                      : p.image
                      ? "http://localhost:3001/images/" + p.image
                      : product
                  })`
                : null,
            }}
          >
            {p.is_instock ? (
              <ProductModal productData={p}>
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
          {/* <div className="my-2">{p.type ? capitalizeWords(p.type) : null}</div> */}
          {/* {p.color.map((c, id) => ( */}
          <FaCircle
            key={id}
            className="color-circle"
            style={{
              color: !p.is_instock
                ? "gainsboro"
                : p.color.toLowerCase() === "rose"
                ? "#c12e35"
                : p.color.toLowerCase() === "diamond"
                ? "#99A0B3"
                : p.color,
            }}
          />
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
      ))}
      {userId === "6548c2c31ae876ce6a019fc2" ? (
        <Col lg={4} sm={6}>
          <AddProductModal>
            <img
              width={200}
              className="add-image mx-auto"
              src={addBtn}
              alt="add button"
            />
          </AddProductModal>
        </Col>
      ) : null}
    </Row>
  );
}
