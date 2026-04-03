import backgroundImage from "../assets/firemanfirefighter-training-firefighters-using-water-260nw-2505564303 (1).webp";
import nozzleImage from "../assets/nozzle.webp";
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
          to develop a predictive model for firehose kickback force and establish 
          a standardized method for collecting and reporting hoseline data.
        </p>
      </div>

      <div className="home-page-content-question">
        <img src={nozzleImage} alt="Firehose nozzle"></img>
        <div className="home-page-content-question-text">
          <h1>Research Questions</h1>
          <p>
            How can kickback force be  predicted under non-ideal conditions?
          </p>
          <p>
            How can current methods of collecting hoseline data be 
            standardized across departments?
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default HomePage;
