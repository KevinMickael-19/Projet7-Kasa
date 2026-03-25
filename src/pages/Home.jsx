import Banner from "../components/Banner/Banner";
import bannerImage from '../assets/images/homeBanner.png'

function Home() {
  return (
    <div>
      <Banner image= {bannerImage} text="Chez vous, partout et ailleurs" />
    </div>
  );
}

export default Home;
