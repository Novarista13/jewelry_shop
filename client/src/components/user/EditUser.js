import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import EditUserForm from "./EditUserForm";
import { userEdit } from "../../api/loginApi";

export default function EditUser({ initialData }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(initialData);
  const [apiStatus, setApiStatus] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const refresh = () => window.location.reload(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    userEdit(data, data._id, setApiStatus);
    console.log(data);
    setShow(false);
    setTimeout(() => {
      refresh();
    }, 1000);
  };

  return (
    <>
      <button className="me-2" onClick={handleShow}>
        Edit User
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
            Edit User Info
          </h5>
          <EditUserForm
            data={initialData}
            setData={setData}
            handleSubmit={handleSubmit}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
