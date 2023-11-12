import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { apiCreate, useApiFetch } from "../../api/productApi";
import ProductForm from "./ProductForm";
import { NotificationManager } from "react-notifications";

export default function AddProductModal({ children }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [category, setCategory] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const refresh = () => window.location.reload(true);

  const url = "http://localhost:3001/api/categories";
  useApiFetch(url, setCategory);

  const api = "http://localhost:3001/api/jewelleries";
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    apiCreate(api, data).then((value) => {
      if (value) {
        NotificationManager.success(
          "Item Created Successfully",
          "Success",
          3000,
          setTimeout(() => {
            refresh();
          }, 2000)
        );
      }
    });
  };

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
          <h5 style={{ fontWeight: 600 }} className="mb-3 text-center">
            Add New Product
          </h5>
          <ProductForm
            category={category}
            handleSubmit={handleSubmit}
            data={data}
            setData={setData}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
