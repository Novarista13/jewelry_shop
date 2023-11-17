import Hero from "./Hero";
import Testimonial from "../../reusable/Testimonial";
import Advantage from "./Advantage";
import { animateScroll as scroll } from "react-scroll";

export default function About() {
  return (
    <div className="about-section">
      {scroll.scrollToTop()}
      <Hero />
      <Advantage />
      <Testimonial />
    </div>
  );
}
