export default function Map() {
  return (
    <div className="location-map my-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d488798.9981100162!2d96.18157300000001!3d16.839142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x56fbd271f8080bb4!2sYangon%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2ssg!4v1696320377285!5m2!1sen!2ssg"
        width="100%"
        height="350"
        title="yangon"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
