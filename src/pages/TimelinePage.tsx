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
          Below is a rough timeline of our research during the Gemstone program.
          As we refine our research plan the timeline will be expanded.
        </p>
      </div>
      <Timeline></Timeline>
      <Footer></Footer>
    </div>
  );
}

export default TimelinePage;
