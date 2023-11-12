import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { userDelete } from "../../api/loginApi";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function DeleteUser({ initialData }) {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const refresh = () => window.location.reload(true);

  const handleClick = () => {
    userDelete(initialData._id).then((value) => {
      NotificationManager.success(
        value,
        "Success",
        3000,
        setTimeout(() => {
          refresh();
        }, 2000)
      );
      navigate("/login");
    });
    setShow(false);
    localStorage.clear();
  };

  return (
    <>
      <button onClick={handleShow}>Delete User</button>

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
