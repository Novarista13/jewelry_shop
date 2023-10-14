import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { pageData } from "../../data/pageData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCircle } from "react-icons/fa6";

export default function Paginator() {
  const [state, setState] = useState({
    data: [],
    page: [1, 2, 3],
    limit: 10,
    activePage: 1,
  });

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      data: pageData(1),
    }));
  }, [state.limit]);

  const handlePageChange = (pageNumber) => {
    setState((prev) => ({ ...prev, activePage: pageNumber }));
    setState((prev) => ({
      ...prev,
      data: pageData(pageNumber),
    }));
  };

  return (
    <div className="shop-paginator-section">
      <Row className="mx-0 my-5">
        {state.data.map((p, id) => (
          <Col md={3} sm={6} className="p-0" key={id}>
            <img
              width={200}
              className="product-image"
              src={p.image}
              alt="footer-logo"
            />
            <div className="my-2">{p.category}</div>
            {p.color.map((c, id) => (
              <FaCircle
                key={id}
                className="color-circle"
                style={{ color: c }}
              />
            ))}
            <p>
              {p.name}{" "}
              <span style={{ display: "block", color: "#f3839b" }}>
                ${p.price}
              </span>
            </p>
          </Col>
        ))}
      </Row>
      <div className="pagination-links-container">
        <Pagination className="px-4 pagination-links">
          <Pagination.Prev
            className={state.activePage === 1 ? "disabled" : ""}
            onClick={() => handlePageChange(state.activePage - 1)}
          />
          {state.page.map((_, index) => {
            return (
              <Pagination.Item
                onClick={() => {
                  handlePageChange(index + 1);
                }}
                key={index + 1}
                active={index + 1 === state.activePage}
              >
                {index + 1}
              </Pagination.Item>
            );
          })}
          <Pagination.Next
            className={state.activePage === 3 ? "disabled" : ""}
            onClick={() => handlePageChange(state.activePage + 1)}
          />
        </Pagination>
      </div>
    </div>
  );
}
