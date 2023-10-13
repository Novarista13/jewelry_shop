
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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type.
      </p>
      <p>Address : Lorem ipsum is a dummy text 402</p>
      <p>Email : Info@loremipsum.com</p>
      <p>Phone : +88012345678</p>
      <p>
        <div style={{ color: "black", fontWeight: 600, fontSize: 16 }}>
          Working Hours
        </div>
        Monday - Saturday :08AM-22PM
      </p>
    </div>
  );
}
