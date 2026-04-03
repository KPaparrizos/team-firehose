import gemstoneLogo from "../assets/g_honors_college.webp";
import honorsLogo from "../assets/honors_logo.webp";
import "../App.css";
import "../components-css/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <a href="https://gemstone.umd.edu/">
        <img src={gemstoneLogo} alt="Gemstone logo"></img>
      </a>
      <div className="footer-center">
        <div className="footer-center-link">
          <a href="mailto:teamfirehose2028@gmail.com">
            <p>teamfirehose2028@gmail.com</p>
          </a>
        </div>
        <p>Made with ❤️ at UMD</p>
      </div>
      <a style={{ marginTop: "1.25vw" }} href="http://www.honors.umd.edu">
        <img src={honorsLogo} alt="Honors logo"></img>
      </a>
    </div>
  );
}

export default Footer;
