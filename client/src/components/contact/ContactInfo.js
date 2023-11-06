export default function ContactInfo() {
  return (
    <div
      className="contact-info-section"
      style={{ textAlign: "left", margin: "50px auto" }}
    >
      <h5 style={{ fontWeight: 600, color: "black" }} className="mb-3">
        Contact Us
      </h5>
      <p className="mb-4">
        Our commitment to quality, craftsmanship, and outstanding customer
        service has made us your trusted destination for timeless treasures.
        Discover your perfect piece and let it become a part of your unique
        story today.
      </p>
      <p>Address : Elegance County Jewelhaven, JWL 12345</p>
      <p>Email : info@jewelhavenluxury.com</p>
      <p>Phone : (555) 123-4567</p>
      <p>
        <span
          style={{
            display: "block",
            color: "black",
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          Working Hours
        </span>
        Monday - Saturday :08AM-22PM
      </p>
    </div>
  );
}
