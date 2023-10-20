import Hero from "./Hero";
import Testimonial from "../home/Testimonial";
import Advantage from "./Advantage";

export default function About() {
  return (
    <div className="about-section">
      <Hero />
      <Advantage />
      <Testimonial />
    </div>
  );
}
