import "./App.css";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import TeamPage from "./pages/TeamPage";
import TimelinePage from "./pages/TimelinePage";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <HomePage></HomePage>;
      break;
    case "/gallery":
      component = <GalleryPage></GalleryPage>;
      break;
    case "/team":
      component = <TeamPage></TeamPage>;
      break;
    case "/timeline":
      component = <TimelinePage></TimelinePage>;
      break;
    case "/contact-us":
      component = <ContactPage></ContactPage>;
      break;
  }

  return (
    <div className="app-container">
      <Navbar></Navbar>
      <div className="app-page">{component}</div>
    </div>
  );
}

export default App;
