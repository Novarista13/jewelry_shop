import ContactUs from "./ContactUs";
import Map from "./Map";
import { animateScroll as scroll } from "react-scroll";

export default function Contact() {
  return (
    <div className="contact-section">
      {scroll.scrollToTop()}
      <Map />
      <ContactUs />
    </div>
  );
}
