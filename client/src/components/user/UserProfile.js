import { Link } from "react-router-dom";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import { NotificationManager } from "react-notifications";

export default function UserProfile({ data }) {
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
      <div className="mx-auto mt-5  d-flex justify-content-center">
        <EditUser initialData={data} />
        <DeleteUser initialData={data} />
      </div>

      <Link
        className="user-section-link d-inline"
        to="/login"
        onClick={() => {
          localStorage.clear();
          NotificationManager.success(
            "Successfully Log out",
            "Success",
            3000,
            setTimeout(() => {
              refresh();
            }, 2000)
          );
        }}
      >
        <button className="login-form-button mt-4 ">Logout</button>
      </Link>
    </div>
  );
}
