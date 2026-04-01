import { useState } from "react";
import "./Slideshow.css";
import arrow from "../../assets/images/arrow-slide.svg";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      {images.length > 1 && (
        <button
          className="slideshow__arrow slideshow__arrow--left"
          onClick={prevImage}
        >
          <img src={arrow} alt="précédent" />
        </button>
      )}
      <img src={images[currentIndex]} alt="" className="slideshow__img" />
      {images.length > 1 && (
        <button
          className="slideshow__arrow slideshow__arrow--right"
          onClick={nextImage}
        >
          <img src={arrow} alt="suivant" />
        </button>
      )}

      {images.length > 1 && (
        <span className="slideshow__counter">
          {currentIndex + 1}/{images.length}
        </span>
      )}
    </div>
  );
}

export default Slideshow;
