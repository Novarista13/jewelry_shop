import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useApiFetch, apiEdit } from "../../api/productApi";
import ProductForm from "./ProductForm";
import { NotificationManager } from "react-notifications";

export default function EditProductModal({ initialData, setModalShow }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(initialData);
  const [category, setCategory] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const refresh = () => window.location.reload(true);

  const url = "http://localhost:3001/api/categories";
  useApiFetch(url, setCategory);
  let singleCategory = category.filter(
    (c) => c._id === initialData.category_id
  );

  function compareObjs(obj1, obj2) {
    return JSON.stringify(obj1) !== JSON.stringify(obj2);
  }

  const api = "http://localhost:3001/api/jewelleries";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (compareObjs(data, initialData)) {
      apiEdit(api, data).then((value) => {
        if (value) {
          NotificationManager.success(
            "Item Edited Successfully",
            "Success",
            3000,
            setTimeout(() => {
              refresh();
            }, 1000)
          );
        }
      });

      setShow(false);
      setModalShow(false);
    } else {
      NotificationManager.error(
        "You can't edit without changing any value!",
        "Item Edit Failed",
        3000
      );
    }
  };

  return (
    <>
      <button className="me-2" onClick={handleShow}>
        Edit Item
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          <h5 style={{ fontWeight: 600 }} className="mb-3 text-center">
            Edit Product Info
          </h5>
          <ProductForm
            category={category}
            category_name={
              singleCategory.length > 0 ? singleCategory[0].name : null
            }
            handleSubmit={handleSubmit}
            data={data}
            setData={setData}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
