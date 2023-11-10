import { Link } from "react-router-dom";

export default function AdminProfile({ data }) {
  const refresh = () => window.location.reload(true);
  return (
    <div className="login-form p-md-0 p-sm-3">
      <h4 style={{ fontWeight: 600 }} className="mb-3">
        Welcome back to <span style={{ color: "#f3839b" }}>Jewelry</span>
      </h4>
      <h2 style={{ fontWeight: 700, fontSize: 40 }} className="mb-4">
        @{data.username}
      </h2>
      <h5 style={{ fontWeight: 600 }} className="mb-3">
        Name: <span style={{ color: "#f3839b" }}>{data.username}</span>
      </h5>
      <h5 style={{ fontWeight: 600 }} className="mb-3">
        Gmail: <span style={{ color: "#f3839b" }}>{data.email}</span>
      </h5>
      <Link
        className="admin-section-link"
        to="/login"
        onClick={() => {
          localStorage.clear();
          refresh();
        }}
      >
        <button className="login-form-button mt-4 ">Logout</button>
      </Link>
    </div>
  );
}
