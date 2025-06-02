import { useState } from "react";
import gemstoneLogo from "../assets/g_honors_college.png";
import honorsLogo from "../assets/honors_logo.png";
import "../App.css";

function Footer() {
  const main = {
    color: "grey",
    fontSize: "1vw",
    marginTop: "6vw",
    marginBottom: "0.5vw",
    textDecoration: "underline",
  };
  let hover = {
    color: "#3b3b3b",
    fontSize: "1vw",
    marginTop: "6vw",
    marginBottom: "0.5vw",
    textDecoration: "underline",
  };

  const [linkColor, setLinkColor] = useState(main);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingBottom: "1rem",
        bottom: 0,
      }}
    >
      <a href="https://gemstone.umd.edu/">
        <img
          style={{ width: "7vw", height: "auto" }}
          src={gemstoneLogo}
          alt="Gemstone logo"
        ></img>
      </a>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <a href="mailto:teamfirehose2028@gmail.com">
          <p
            onMouseEnter={() => setLinkColor(hover)}
            onMouseLeave={() => setLinkColor(main)}
            style={linkColor}
          >
            teamfirehose2028@gmail.com
          </p>
        </a>
        <p style={{ color: "gray", fontSize: "1vw", marginTop: "0" }}>
          Made with ❤️ at UMD
        </p>
      </div>
      <a style={{ marginTop: "1.25vw" }} href="http://www.honors.umd.edu">
        <img
          style={{ width: "7vw", height: "auto" }}
          src={honorsLogo}
          alt="Honors logo"
        ></img>
      </a>
    </div>
  );
}

export default Footer;
