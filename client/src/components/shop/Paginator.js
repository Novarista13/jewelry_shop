import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useContext, useMemo } from "react";
import Row from "react-bootstrap/Row";
import ProductSingle from "./ProductSingle";
import { ProductContext } from "../../contexts/ProductContext";

export default function Paginator() {
  const { checkResultProduct } = useContext(ProductContext);
  const [state, setState] = useState({
    data: [],
    limit: 8,
    offset: 0,
    page: 3,
    activePage: 1,
  });

  // let paginationData = checkResultProduct.length > 0 ? checkResultProduct : [];

  const paginationData = useMemo(
    () => (checkResultProduct.length > 0 ? checkResultProduct : []),
    [checkResultProduct]
  );

  useEffect(() => {
    let pageNum = paginationData.length / state.limit;
    if (pageNum % 1 !== 0) {
      pageNum++;
    }
    setState((prev) => ({
      ...prev,
      page: Math.floor(pageNum),
      data: paginationData.slice(state.offset, state.limit),
    }));
  }, [state.offset, state.limit, paginationData]);

  let pageCount = [1, 2, 3];
  pageCount = Array(state.page).fill(1);

  const handlePageChange = (pageNumber) => {
    let offset = state.offset + state.limit * (pageNumber - 1);
    let limit = state.limit + state.limit * (pageNumber - 1);

    setState((prev) => ({
      ...prev,
      activePage: pageNumber,
    }));

    setState((prev) => ({
      ...prev,
      data: paginationData.slice(offset, limit),
    }));
  };

  return (
    <div className="shop-paginator-section">
      <Row className="mx-0">
        <ProductSingle data={state.data} />
      </Row>
      <div className="pagination-links-container">
        <Pagination className="px-4 pagination-links">
          <Pagination.Prev
            className={state.activePage === 1 ? "disabled" : ""}
            onClick={() => handlePageChange(state.activePage - 1)}
          />
          {pageCount.map((_, index) => {
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
            className={state.activePage === pageCount.length ? "disabled" : ""}
            onClick={() => handlePageChange(state.activePage + 1)}
          />
        </Pagination>
      </div>
    </div>
  );
}
