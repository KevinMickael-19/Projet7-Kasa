import "./Collapse.css";
import { useState } from "react";
import arrow from "../../assets/images/arrow.svg"

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
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
}

export default Collapse
