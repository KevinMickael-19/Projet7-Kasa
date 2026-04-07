import "./Rating.css";
import starActive from "../../assets/images/star-active.svg";
import starInactive from "../../assets/images/star-inactive.svg";

function Rating({ note }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {stars.map((star) => (
        <img
          key={star}
          src={star <= Number(note) ? starActive : starInactive}
          alt="star"
          className="rating__star"
        />
      ))}
    </div>
  );
}

export default Rating;
