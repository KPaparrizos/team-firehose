import { useState } from "react";
import "../App.css";
import "../components-css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      <nav className={menuOpen ? "open" : ""}>
        <h1>
          <a href="/">Team FIREHOSE</a>
        </h1>
        <div className="navbar-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/meet-the-team">Meet the Team</a>
          </li>
          <li>
            <a href="/timeline">Timeline</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
