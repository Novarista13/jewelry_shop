import { useRef } from "react";
import "../App.css";

import { useInView } from "react-intersection-observer";

export default function Animation({ children }) {
  const { ref, inView, entry } = useInView();
  const aniRef = useRef(null);

  if (inView && aniRef.current) {
    aniRef.current.querySelectorAll("div").forEach((el) => {
      el.classList.add("slide-in");
    });
  } else if (aniRef.current) {
    aniRef.current.querySelectorAll("div").forEach((el) => {
      el.classList.remove("slide-in");
    });
  }

  return (
    <div ref={ref}>
      <div ref={aniRef}>{children}</div>
    </div>
  );
}
