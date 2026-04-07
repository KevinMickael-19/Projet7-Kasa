import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import bannerImage from "../../assets/images/homeBanner.png";
import logements from "../../data/logements.json";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home__container">
        <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
        <div className="home__gallery">
          {logements.map(({ id, title, cover }) => (
            <Card key={id} id={id} title={title} cover={cover} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
