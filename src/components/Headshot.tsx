import "../App.css";
import "../components-css/Headshot.css";

function Headshot ({ image, alt, name, caption }) {
  return (
    <div className="headshot-container">
        <figure>
            <img src={image} alt={alt}></img>
            <figcaption>
                <h3>{name}</h3>
                <p>{caption}</p>
            </figcaption>
        </figure>
    </div>
  );
}

export default Headshot;
