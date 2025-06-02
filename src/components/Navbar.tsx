import "@fontsource/league-spartan";
import { useState } from "react";
import "../App.css";

function Navbar() {
  const main = { color: "white", textDecoration: "none" };
  let hover = { color: "grey", textDecoration: "none" };

  const [titleColor, setTitleColor] = useState(main);
  const [firstColor, setFirstColor] = useState(main);
  const [secondColor, setSecondColor] = useState(main);
  const [thirdColor, setThirdColor] = useState(main);
  const [fourthColor, setFourthColor] = useState(main);
  const [fifthColor, setFifthColor] = useState(main);

  return (
    <nav
      style={{
        backgroundColor: "#4b0c0f",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "6rem",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        fontFamily: "League Spartan",
        fontWeight: "bold",
        zIndex: "1",
      }}
    >
      <h1 style={{ textAlign: "left", fontSize: "2.25vw" }}>
        <a
          onMouseEnter={() => setTitleColor(hover)}
          onMouseLeave={() => setTitleColor(main)}
          style={titleColor}
          href="/"
        >
          Team FIREHOSE
        </a>
      </h1>
      <ul
        style={{
          padding: "0",
          margin: "0",
          listStyle: "none",
          display: "flex",
          fontSize: "1.75vw",
          gap: "2vw",
        }}
      >
        <li>
          <a
            onMouseEnter={() => setFirstColor(hover)}
            onMouseLeave={() => setFirstColor(main)}
            style={firstColor}
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => setSecondColor(hover)}
            onMouseLeave={() => setSecondColor(main)}
            style={secondColor}
            href="/gallery"
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => setThirdColor(hover)}
            onMouseLeave={() => setThirdColor(main)}
            style={thirdColor}
            href="/meet-the-team"
          >
            Meet the Team
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => setFourthColor(hover)}
            onMouseLeave={() => setFourthColor(main)}
            style={fourthColor}
            href="/timeline"
          >
            Timeline
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => setFifthColor(hover)}
            onMouseLeave={() => setFifthColor(main)}
            style={fifthColor}
            href="/contact-us"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
