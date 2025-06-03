import "../App.css";
import "../components-css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav>
        <h1>
          <a href="/">Team FIREHOSE</a>
        </h1>
        <ul>
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
