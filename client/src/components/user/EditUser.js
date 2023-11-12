import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import EditUserForm from "./EditUserForm";
import { userEdit } from "../../api/loginApi";
import { NotificationManager } from "react-notifications";

export default function EditUser({ initialData }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(initialData);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const refresh = () => window.location.reload(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.username !== initialData.username ||
      data.email !== initialData.email ||
      data.password
    ) {
      userEdit(data).then((value) => {
        if (value) {
          NotificationManager.success(
            "User Edited Successfully",
            "Success",
            3000,
            setTimeout(() => {
              refresh();
            }, 2000)
          );
        }
      });
      setShow(false);
    } else {
      NotificationManager.error(
        "You can't edit without changing any value!",
        "User Edit Failed",
        3000
      );
    }
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
            data={data}
            setData={setData}
            handleSubmit={handleSubmit}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
