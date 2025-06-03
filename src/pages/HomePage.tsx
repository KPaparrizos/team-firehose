import backgroundImage from "../assets/firemanfirefighter-training-firefighters-using-water-260nw-2505564303.png";
import nozzleImage from "../assets/nozzle.png";
import "../App.css";
import "../pages-css/HomePage.css";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page-title">
        <img
          src={backgroundImage}
          alt="Firefighters putting out a fire using firehoses"
        ></img>
        <div className="home-page-title-text">
          <h1>Team FIREHOSE</h1>
          <h2>Gemstone Class of 2028</h2>
        </div>
      </div>

      <div className="home-page-content-summary">
        <p>
          Team FIREHOSE is a Class of 2028 undergraduate research team in the
          Gemstone Honors Program at the University of Maryland. FIREHOSE aims
          to design a new firehose nozzle that minimizes reaction forces and
          reduces harm to firefighters.
        </p>
      </div>

      <div className="home-page-content-question">
        <img src={nozzleImage} alt="Firehose nozzle"></img>
        <div className="home-page-content-question-text">
          <h1>Research Question</h1>
          <p>
            How can we improve firefighting hose-nozzle systems to effectively
            reduce the associated kickback forces?
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default HomePage;
