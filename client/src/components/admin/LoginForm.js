import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function LoginForm({ h4, h2, button, p1, p2, link }) {
  return (
    <div className="login-form p-md-0 p-sm-3">
      <h4 style={{ fontWeight: 600 }} className="mb-3">
        {h4} <span style={{ color: "#f3839b" }}>Jewelry</span>
      </h4>
      <h2 style={{ fontWeight: 700, fontSize: 40 }} className="mb-4">
        {h2}
      </h2>
      <Form>
        <div className="my-3">
          <Form.Control size="md" type="email" placeholder="Email" />
        </div>
        <div className="mb-3">
          <Form.Control size="md" type="password" placeholder="Password" />
        </div>
        <Link className="admin-section-link" to="/admin">
          <button className="login-form-button">{button}</button>
        </Link>
      </Form>
      <p className="my-4">
        {p1} have an account?{" "}
        <Link className="admin-section-link" to={link}>
          {p2}
        </Link>
      </p>
    </div>
  );
}
