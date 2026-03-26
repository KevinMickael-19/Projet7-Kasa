import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import bannerImage from "../../assets/images/homeBanner.png";
import logements from "../../data/logements.json";
import './Home.css'

function Home() {
  return (
    <section className="home">
      <div className="home__container">
        <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
        <div className="home__cards">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
