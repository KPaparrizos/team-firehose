import "../App.css";
import "../pages-css/GalleryPage.css";
import Footer from "../components/Footer";
import infographic from "../assets/1.webp";
import teamPhoto from "../assets/_DSC2416.webp";

function GalleryPage() {
  return (
    <div className="gallery-page-container">
      <div className="gallery-page-content">
        <div className="gallery-page-title">
          <h1>Gallery</h1>
        </div>
        <div className="gallery-page-infographic">
          <img src={infographic} alt="Team FIREHOSE Infographic" />
          <p>Team FIREHOSE Infographic</p>
        </div>
        <div className="gallery-page-infographic">
          <img src={teamPhoto} alt="Team FIREHOSE Team Photo" />
          <p>Team FIREHOSE Team Photo</p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default GalleryPage;

