import { useState } from "react";
import "./Slideshow.css";
import arrow from "../../assets/images/arrow-slide.svg";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slideshow">
      {hasMultipleImages && (
        <button
          className="slideshow__arrow slideshow__arrow--left"
          onClick={prevImage}
        >
          <img src={arrow} alt="précédent" />
        </button>
      )}
      <img src={images[currentIndex]} alt="" className="slideshow__img" />
      {hasMultipleImages && (
        <button
          className="slideshow__arrow slideshow__arrow--right"
          onClick={nextImage}
        >
          <img src={arrow} alt="suivant" />
        </button>
      )}

      {hasMultipleImages && (
        <span className="slideshow__counter">
          {currentIndex + 1}/{images.length}
        </span>
      )}
    </div>
  );
}

export default Slideshow;
