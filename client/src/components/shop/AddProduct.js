import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AddProductModal({ children }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [category, setCategory] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const url = "http://localhost:3001/api/categories";

  const fetchInfo = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return setCategory(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const api = "http://localhost:3001/api/jewelleries";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(api, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
      <div>
        <button className="work-modal-button" onClick={handleShow}>
          {children}
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          <h5 style={{ fontWeight: 600 }} className="mb-3 text-center">
            Add New Product
          </h5>
          <Form onSubmit={handleSubmit} className="modal-col mx-auto mb-5">
            <div className="mb-4">
              <Row>
                <Col>
                  <Form.Control
                    size="sm"
                    name="name"
                    required
                    type="text"
                    placeholder="Name*"
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </Col>
                <Col>
                  <Form.Control
                    size="sm"
                    required
                    name="price"
                    type="number"
                    placeholder="Price*"
                    onChange={(e) =>
                      setData({ ...data, price: e.target.value })
                    }
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-4">
              <Row>
                <Col>
                  <Form.Control
                    size="sm"
                    required
                    name="color"
                    type="text"
                    placeholder="Color*"
                    onChange={(e) =>
                      setData({ ...data, color: e.target.value })
                    }
                  />
                </Col>
                <Col>
                  <Form.Select
                    size="sm"
                    required
                    onClick={(e) => {
                      e.target.value !== "Choose Category" &&
                        setData({ ...data, category_name: e.target.value });
                    }}
                  >
                    <option>Choose Category</option>
                    {category.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>
            </div>
            <div className="mb-4">
              <Row>
                <Col>
                  <Form.Control
                    size="sm"
                    required
                    name="type"
                    type="text"
                    placeholder="Type*"
                    onChange={(e) => setData({ ...data, type: e.target.value })}
                  />
                </Col>
                <Col>
                  <Form.Control
                    size="sm"
                    required
                    name="brand"
                    type="text"
                    placeholder="Brand*"
                    onChange={(e) =>
                      setData({ ...data, brand: e.target.value })
                    }
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-4">
              <Row>
                <Col>
                  <Form.Control
                    size="sm"
                    required
                    name="size"
                    type="number"
                    placeholder="Size*"
                    onChange={(e) => setData({ ...data, size: e.target.value })}
                  />
                </Col>
                <Col>
                  <Form.Control
                    size="sm"
                    required
                    name="metal"
                    type="text"
                    placeholder="Metal*"
                    onChange={(e) =>
                      setData({ ...data, metal: e.target.value })
                    }
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-4">
              <Row>
                <Col sm={3} xs={6}>
                  <Form.Check
                    inline
                    label="Featured*"
                    name="featured"
                    className="raw-mateirals"
                    onChange={(e) =>
                      setData({ ...data, featured: e.target.checked })
                    }
                  />
                </Col>
                <Col sm={3} xs={6}>
                  <Form.Check
                    inline
                    label="Instock*"
                    name="is_instock"
                    className="raw-mateirals"
                    onChange={(e) =>
                      setData({ ...data, is_instock: e.target.checked })
                    }
                  />
                </Col>
              </Row>
            </div>
            <button className="mx-auto" type="submit">
              Send Message
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
