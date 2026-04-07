import "./Host.css";

function Host({ image, nom }) {
  return (
    <div className="host">
      <span className="host__name">{nom}</span>
      <img src={image} alt={nom} className="host__img" />
    </div>
  );
}

export default Host