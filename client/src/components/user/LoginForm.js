import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function LoginForm({
  register,
  h4,
  h2,
  button,
  p1,
  p2,
  link,
  data,
  setData,
  handleSubmit,
}) {
  return (
    <div className="login-form p-md-0 p-sm-3">
      <h4 style={{ fontWeight: 600 }} className="mb-3">
        {h4} <span style={{ color: "#f3839b" }}>Jewelry</span>
      </h4>
      <h2 style={{ fontWeight: 700, fontSize: 40 }} className="mb-4">
        {h2}
      </h2>
      <Form onSubmit={handleSubmit}>
        {register ? (
          <div className="my-3">
            <Form.Control
              size="md"
              autoComplete="off"
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>
        ) : null}
        <div className="my-3">
          <Form.Control
            size="md"
            autoComplete="off"
            type="email"
            name="email"
            defaultValue=""
            placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <Form.Control
            size="md"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <button type="submit" className="login-form-button">
          {button}
        </button>
      </Form>
      <p className="my-4">
        {p1} have an account?{" "}
        <Link className="user-section-link" to={link}>
          {p2}
        </Link>
      </p>
    </div>
  );
}
