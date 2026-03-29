import './About.css'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import aboutBanner from '../../assets/images/aboutBanner.png'

const collapses = [
  { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale." },
  { title: "Respect", content: "Nous veillons à ce que chaque interaction soit respectueuse." },
  { title: "Service", content: "Nos équipes sont disponibles pour vous aider à tout moment." },
  { title: "Sécurité", content: "La sécurité est notre priorité absolue." }
]

function About() {
  return (
    <section className="about">
      <Banner image={aboutBanner} />
      <div className="about__collapses">
        {collapses.map((collapse) => (
          <Collapse
            key={collapse.title}
            title={collapse.title}
            content={collapse.content}
          />
        ))}
      </div>
    </section>
  )
}

export default About