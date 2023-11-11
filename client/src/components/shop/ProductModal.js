import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCircle } from "react-icons/fa6";
import product from "../../images/home/product.png";
import EditProductModal from "./EditProduct";
import { useContext } from "react";
import { UserIdContext } from "../../contexts/UserContext";
import DeleteProduct from "./DeleteProduct";

export default function ProductModal({ productData, children }) {
  const [show, setShow] = useState(false);
  const [apiStatus, setApiStatus] = useState();

  const { userId } = useContext(UserIdContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
      <div>
        <button className="work-modal-button" onClick={handleShow}>
          {children}
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          <Row className="align-items-center mx-auto mb-5">
            <Col sm={6} xs={12} className="modal-col">
              <img
                width={300}
                className="modal-image mx-auto"
                src={product}
                alt={product}
              />
            </Col>
            <Col className="modal-col">
              <h4
                style={{ fontWeight: 700 }}
                className="p-3 mt-4 pt-0 text-sm-left text-xs-center"
              >
                {productData.name}
              </h4>
              <ul className="mx-3" style={{ listStyle: "none", fontSize: 16 }}>
                <li>type : {productData.type}</li>
                <li>brand : {productData.brand}</li>
                <li>price : $ {productData.price}</li>
                <li>
                  color :{" "}
                  <FaCircle
                    key={productData.color}
                    className="color-circle"
                    style={{
                      color: !productData.is_instock
                        ? "gainsboro"
                        : productData.color.toLowerCase() === "rose"
                        ? "#c12e35"
                        : productData.color.toLowerCase() === "gold with white"
                        ? "#e8b65a"
                        : productData.color.toLowerCase() === "diamond"
                        ? "#99A0B3"
                        : productData.color.toLowerCase() ===
                          "blue sapphire with white"
                        ? "#7BB1E1"
                        : productData.color,
                    }}
                  />
                </li>
                <li>size : {productData.size}</li>
                <li>metal : {productData.metal}</li>
              </ul>
              {userId === "6548c2c31ae876ce6a019fc2" ? (
                <div className="mx-auto">
                  <EditProductModal initialData={productData} />
                  <DeleteProduct id={productData._id} />
                </div>
              ) : null}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
