import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../images/admin/carousel1.jpg";
import carousel2 from "../../images/admin/carousel2.jpg";
import carousel3 from "../../images/admin/carousel3.jpg";

export default function PictureCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          width="100%"
          height={600}
          className="modal-image mx-auto"
          src={carousel1}
          alt="carousel1"
        />
        <Carousel.Caption>
          <h3>Moonlit Serenade Swirl</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          height={600}
          className="modal-image mx-auto"
          src={carousel2}
          alt="carousel1"
        />
        <Carousel.Caption>
          <h3>Starry Night Embrace</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          height={600}
          className="modal-image mx-auto"
          src={carousel3}
          alt="carousel1"
        />
        <Carousel.Caption>
          <h3>Enchanted Ivy Infinity</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
