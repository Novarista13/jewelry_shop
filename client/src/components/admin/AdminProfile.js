import { Link } from "react-router-dom";

export default function AdminProfile() {
  return (
    <div
      className="login-form p-md-0 p-sm-3"
    >
      <h4 style={{ fontWeight: 600 }} className="mb-3">
        Welcome back to <span style={{ color: "#f3839b" }}>Jewelry</span>
      </h4>
      <h2 style={{ fontWeight: 700, fontSize: 40 }} className="mb-4">
        cryst@l
      </h2>
      <h5 style={{ fontWeight: 600 }} className="mb-3">
        Name: <span style={{ color: "#f3839b" }}>Crystalia</span>
      </h5>
      <h5 style={{ fontWeight: 600 }} className="mb-3">
        Role: <span style={{ color: "#f3839b" }}>Admin</span>
      </h5>
      <h5 style={{ fontWeight: 600 }} className="mb-3">
        Gmail: <span style={{ color: "#f3839b" }}>crystal@gmail.com</span>
      </h5>
      <h5 style={{ fontWeight: 600 }} className="mb-3">
        Phone: <span style={{ color: "#f3839b" }}>(555) 123-4567</span>
      </h5>
      <Link className="admin-section-link" to="/login">
        <button className="login-form-button mt-4 ">Logout</button>
      </Link>
    </div>
  );
}
