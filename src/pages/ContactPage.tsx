import "../App.css";
import Footer from "../components/Footer";
import instagramLogo from "../assets/Instagram_icon.png";
import gmailLogo from "../assets/google-gmail-512.webp";

function ContactPage() {
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
            flexDirection: "column"
          }}
        >
          <div style={{ top: "10%" }}>
            <h1 style={{ fontSize: "3vw", marginBottom: "2vw" }}>Contact Us</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1vw",
              }}
            >
              <a href="mailto:teamfirehose2028@gmail.com">
                <img
                  src={gmailLogo}
                  alt="Gmail logo"
                  style={{ width: "2vw", height: "2vw" }}
                ></img>
              </a>
              <h2
                style={{
                  fontSize: "1.75vw",
                  fontFamily: "inter",
                  marginTop: "0",
                  marginBottom: "0",
                  textAlign: "left",
                }}
              >
                teamfirehose2028@gmail.com
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1vw",
              }}
            >
              <a href="https://www.instagram.com/team_firehose/">
                <img
                  src={instagramLogo}
                  alt="Instagram logo"
                  style={{ width: "2vw", height: "2vw" }}
                ></img>
              </a>
              <h2
                style={{
                  fontSize: "1.75vw",
                  fontFamily: "inter",
                  marginTop: "0",
                  marginBottom: "0",
                  textAlign: "left",
                }}
              >
                team_firehose
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default ContactPage;
