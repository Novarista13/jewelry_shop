import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { apiDelete } from "../../api/productApi";

export default function DeleteProduct({ id }) {
  const [show, setShow] = useState(false);
  const [apiStatus, setApiStatus] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const refresh = () => window.location.reload(true);

  const url = "http://localhost:3001/api/jewelleries";
  const handleClick = (e) => {
    e.preventDefault();
    apiDelete(url, id, setApiStatus);
    setShow(false);
    setTimeout(() => {
      refresh();
    }, 1000);
  };

  return (
    <>
      <button onClick={handleShow}>Delete Item</button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          <h5 style={{ fontWeight: 600 }} className="mb-3 text-center">
            Are You Sure you want to delete?
          </h5>
          <div className="mx-auto my-3 d-flex justify-content-center">
            <button className="mx-3" onClick={handleClick}>
              Yes
            </button>
            <button onClick={() => setShow(false)}>Cancel</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
