import { Link } from "react-router-dom";
import "./NotFound.css"

function NotFound() {
  return (
    <section className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__message">
        Oups ! La page que vous demandez n'existe pas.
      </p>
    <Link className="notfound__link"  to ="/"> Retourner sur la page d'Accueil</Link>
    </section>
  );
}

export default NotFound;
