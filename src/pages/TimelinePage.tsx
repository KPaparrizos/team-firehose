import "../App.css";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

function TimelinePage() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        width: "100%",
        color: "white",
        display: "flex",
        flexFlow: "column",
        minHeight: "88vh",
        flexGrow: "1",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ top: "10%" }}>
            <h1 style={{ fontSize: "3vw", marginBottom: "1vw" }}>Timeline</h1>
          </div>
          <p
            style={{
              fontFamily: "inter",
              fontSize: "1.75vw",
              fontWeight: "700",
              width: "55%",
              margin: 0
            }}
          >
            Below is a rough timeline of our research during the Gemstone program. As 
            we refine our research plan the timeline will be expanded.
          </p>
          <Timeline></Timeline>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default TimelinePage;
