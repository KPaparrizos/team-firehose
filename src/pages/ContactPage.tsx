import "../App.css";
import Footer from "../components/Footer";

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
        <h1>Contact!</h1>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default ContactPage;
