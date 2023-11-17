import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import available from "../../images/home/available.png";
import Animation from "../../reusable/Animation";
import AvailableSmallProduct from "./AviailableSmallProduct";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

export default function AvailableProduct() {
  const { products } = useContext(ProductContext);
  const featuredProducts = products.filter((p) => p.featured);

  const bestSeller = featuredProducts.slice(0, 4);
  const onSale = featuredProducts.slice(4, 8);

  return (
    <div className="home-available-product-section">
      <Container style={{ maxWidth: 720 }}>
        <Animation>
          <Row className="home-available-product-row animate-type">
            <Col
              md={6}
              xs={12}
              className="available-product-col p-0 mx-auto"
              style={{
                backgroundImage: `url(${available})`,
              }}
            ></Col>
            <Col className="p-0" md={6} xs={12} style={{ textAlign: "Center" }}>
              <Row className="available-right-row m-0">
                <AvailableSmallProduct
                  title={"Best seller product"}
                  data={bestSeller}
                />
                <AvailableSmallProduct
                  title={"On Sale product"}
                  data={onSale}
                />
              </Row>
            </Col>
          </Row>
        </Animation>
      </Container>
    </div>
  );
}
