import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function ProductForm({
  category,
  category_name,
  handleSubmit,
  data,
  setData,
}) {
  return (
    <Form onSubmit={handleSubmit} className="modal-col mx-auto mb-5">
      <div className="mb-4">
        <Row>
          <Col>
            <Form.Control
              size="sm"
              name="name"
              required
              defaultValue={data.name}
              type="text"
              placeholder="Name*"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              size="sm"
              required
              defaultValue={data.price}
              name="price"
              type="number"
              placeholder="Price*"
              onChange={(e) => setData({ ...data, price: e.target.value })}
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
              defaultValue={data.color}
              name="color"
              type="text"
              placeholder="Color*"
              onChange={(e) => setData({ ...data, color: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Select
              size="sm"
              required
              defaultValue={category_name ? category_name : data.category_name}
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
              defaultValue={data.type}
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
              defaultValue={data.brand}
              name="brand"
              type="text"
              placeholder="Brand*"
              onChange={(e) => setData({ ...data, brand: e.target.value })}
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
              defaultValue={data.size}
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
              defaultValue={data.metal}
              name="metal"
              type="text"
              placeholder="Metal*"
              onChange={(e) => setData({ ...data, metal: e.target.value })}
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
              defaultChecked={data.featured}
              className="raw-mateirals"
              onChange={(e) => setData({ ...data, featured: e.target.checked })}
            />
          </Col>
          <Col sm={3} xs={6}>
            <Form.Check
              inline
              label="Instock*"
              name="is_instock"
              defaultChecked={data.is_instock}
              className="raw-mateirals"
              onChange={(e) =>
                setData({ ...data, is_instock: e.target.checked })
              }
            />
          </Col>
          <Col>
            <Form.Control
              size="sm"
              defaultValue={data.file}
              name="image"
              type="file"
              onChange={(e) =>
                setData({
                  ...data,
                  file: e.target.files[0],
                  image: Date.now() + e.target.files[0].name,
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
