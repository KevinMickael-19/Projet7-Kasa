import "./Collapse.css";
import { useState } from "react";
import arrow from "../../assets/images/arrow.svg";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <span className="collapse__title">{title}</span>
        <img
          className={
            isOpen ? "collapse__arrow collapse__arrow--open" : "collapse__arrow"
          }
          src={arrow}
          alt=""
        />
      </div>
      <div
        className={
          isOpen
            ? "collapse__content collapse__content--open"
            : "collapse__content"
        }
      >
        <div className="collapse__content--inner">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
