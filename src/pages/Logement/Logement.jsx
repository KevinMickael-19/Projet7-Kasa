import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import "./Logement.css";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";
import Rating from "../../components/Rating/Rating";
import Tag from "../../components/Tag/Tag";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <Navigate to="/404" />;
  }
  return (
    <section className="logement">
      <Slideshow images={logement.images} />
      <div className="logement__info">
        <div className="logement__info-left">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tagName) => (
              <Tag key={tagName}>{tagName}</Tag>
            ))}
          </div>
        </div>
        <div className="logement__info-right">
          <div className="logement__host">
            <span className="logement__host-name">{logement.hôte.nom}</span>
            <img
              className="logement__host-img"
              src={logement.hôte.image}
              alt={logement.hôte.nom}
            />
          </div>
          <Rating note={logement.note} />
        </div>
      </div>
      <div className="logement__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Equipements"
          content={
            <ul className="logement__equipements-list">
              {logement.équipements.map((equip) => (
                <li className="logement__equipement-item" key={equip}>
                  {equip}
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  );
}

export default Logement;
