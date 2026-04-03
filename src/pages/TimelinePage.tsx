import "../App.css";
import "../pages-css/TimelinePage.css";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

function TimelinePage() {
  return (
    <div className="timeline-page-container">
      <div className="timeline-page-content">
        <div className="timeline-page-title">
          <h1>Timeline</h1>
        </div>
        <p>
          Below is a timeline of our research during the Gemstone Program.
          As our work progresses, certain aspects may change.
        </p>
      </div>
      <Timeline></Timeline>
      <div className="timeline-page-footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default TimelinePage;
