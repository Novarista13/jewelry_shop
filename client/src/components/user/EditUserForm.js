import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function EditUserForm({ handleSubmit, data, setData }) {
  return (
    <Form onSubmit={handleSubmit} className="modal-col mx-auto mb-5">
      <div className="mb-4">
        <Row>
          <Col sm={6} className="mt-3">
            <Form.Label style={{ fontSize: "15px" }}>Name: </Form.Label>
            <Form.Control
              size="sm"
              name="name"
              defaultValue={data.username}
              type="text"
              placeholder="Name*"
              onChange={(e) =>
                setData({
                  ...data,
                  username: e.target.value,
                })
              }
            />
          </Col>
          <Col sm={6} className="mt-3">
            <Form.Label style={{ fontSize: "15px" }}>Email: </Form.Label>
            <Form.Control
              size="sm"
              defaultValue={data.email}
              name="email"
              type="email"
              placeholder="Email*"
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
            />
          </Col>
          <Col sm={6} className="mt-3">
            <Form.Label style={{ fontSize: "15px" }}>Password: </Form.Label>
            <Form.Control
              size="sm"
              defaultValue={data.password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
            />
          </Col>
        </Row>
      </div>
      <button className="mx-auto" type="submit">
        Submit
      </button>
    </Form>
  );
}
