import "../App.css";
import Footer from "../components/Footer";
import infographic from "../assets/1.png";

function ResearchPage() {
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
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: "4vw"
        }}
      >
        <div style={{top: "10%" }}>
          <h1 style={{ fontSize: "3vw", marginBottom: "2vw" }}>Research</h1>
        </div>
        <div
          style={{
            width: "60%",
            paddingLeft: "2%",
            paddingRight: "2%",
            paddingTop: "2%",
            paddingBottom: "1vw",
            backgroundColor: "#222222",
            border: "3px solid grey",
            boxSizing: "border-box",
            margin: "0 auto",
          }}
        >
          <img
            style={{
              width: "100%",
              display: "block",
            }}
            src={infographic}
            alt="Team FIREHOSE infographic"
          />
          <p
            style={{
              fontSize: "1vw", // Adjust size as needed
              fontFamily: "inter",
              color: "grey", // Slightly dimmer color for caption
            }}
          >
            Team FIREHOSE infographic 
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default ResearchPage;
