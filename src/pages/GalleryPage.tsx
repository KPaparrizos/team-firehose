import "../App.css";
import "../pages-css/GalleryPage.css";
import Footer from "../components/Footer";
import infographic from "../assets/1.png";

function GalleryPage() {
  return (
    <div className="gallery-page-container">
      <div className="gallery-page-content">
        <div className="gallery-page-title">
          <h1>Gallery</h1>
        </div>
        <div className="gallery-page-infographic">
          <img src={infographic} alt="Team FIREHOSE infographic" />
          <p>Team FIREHOSE infographic</p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default GalleryPage;
