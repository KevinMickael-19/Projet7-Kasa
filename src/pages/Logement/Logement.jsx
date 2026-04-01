import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import "./Logement.css";
import starActive from "../../assets/images/star-active.svg";
import starInactive from "../../assets/images/star-inactive.svg";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <Navigate to="/404" />;
  }
  const stars = [1, 2, 3, 4, 5];
  return (
    <section className="logement">
      <Slideshow images= {logement.images} />
      <div className="logement__info">
        <div className="logement__info-left">
          <h1 className="logement__title"> {logement.title} </h1>
          <p className="logement__location"> {logement.location} </p>
          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="logement__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="logement__info-right">
          <div className="logement__host">
            <span className="logement__host-name">{logement.hôte.nom}</span>
            <img className="logement__host-img" src={logement.hôte.image} />
          </div>
          <div className="logement__rating">
            {stars.map((star) => (
              <img
                key={star}
                src={star <= Number(logement.note) ? starActive : starInactive}
                alt="star"
                className="logement__star"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="logement__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Equipements"
          content={
            <ul className="logement__equipements-list">
              {logement.équipements.map((equip) => (
                <li key={equip}>{equip}</li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  );
}

export default Logement;
