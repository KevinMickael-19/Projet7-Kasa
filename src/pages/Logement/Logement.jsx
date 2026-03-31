import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import './Logement.css'

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <Navigate to="/404" />;
  }
  return (
    <section className="logement">
      <div className="logement__slideshow">
        <img
          className="logement__slideshow--img"
          src={logement.cover}
          alt={logement.title}
        />
      </div>
    </section>
  );
}

export default Logement;
