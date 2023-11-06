import testiEllipse from "../../images/home/testi-ellipse.svg";
import fiveStar from "../../images/home/five-star.svg";

export default function Testimonial() {
  return (
    <div className="home-testi-section py-4">
      <div className="home-testi-text">
        <h5
          style={{ color: "black", fontWeight: 700, fontSize: 30, margin: 0 }}
        >
          Testimonials
        </h5>
        <p>What they say</p>
        <div className="my-3">
          <img
            width={50}
            className="testi-image d-inline"
            src={testiEllipse}
            alt="footer-logo"
          />
          <img
            width={80}
            className="testi-image d-inline mx-2"
            src={testiEllipse}
            alt="footer-logo"
          />
          <img
            width={50}
            className="testi-image d-inline"
            src={testiEllipse}
            alt="footer-logo"
          />
        </div>
        <p>
          I've never received so many compliments on a piece of jewelry before;
          [Your Shop Name] truly brings out the best in every design.
        </p>
        <img
          width={50}
          className="testi-image d-inline"
          src={fiveStar}
          alt="footer-logo"
        />
        <p>David K.</p>
      </div>
    </div>
  );
}
