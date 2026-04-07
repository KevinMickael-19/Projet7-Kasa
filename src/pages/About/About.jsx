import "./About.css";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutBanner from "../../assets/images/aboutBanner.png";
import collapses from "../../data/About.json";

function About() {
  return (
    <section className="about">
      <Banner image={aboutBanner} />
      <div className="about__collapses">
        {collapses.map(({title, content}) => (
          <Collapse
            key={title}
            title={title}
            content={content}
          />
        ))}
      </div>
    </section>
  );
}

export default About;
