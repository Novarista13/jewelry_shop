import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function EditUserForm({ handleSubmit, data, setData }) {
  return (
    <Form onSubmit={handleSubmit} className="modal-col mx-auto mb-5">
      <div className="mb-4">
        <Row>
          <Col>
            <Form.Control
              size="sm"
              name="name"
              required
              defaultValue={data.username}
              type="text"
              placeholder="Name*"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              size="sm"
              required
              defaultValue={data.email}
              name="email"
              type="email"
              placeholder="Email*"
              onChange={(e) => setData({ ...data, email: e.target.value })}
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
