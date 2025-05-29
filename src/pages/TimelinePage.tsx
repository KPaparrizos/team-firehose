import "../App.css";
import Footer from "../components/Footer";

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
          }}
        >
          <div style={{ position: "absolute", top: "10%" }}>
            <h1 style={{ fontSize: "3vw", marginBottom: "1rem" }}>Timeline</h1>
            <h2 style={{ fontSize: "1.75vw", marginTop: "0" }}>
              Coming soon...
            </h2>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default TimelinePage;
