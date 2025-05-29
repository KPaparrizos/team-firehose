import './App.css'
import Navbar from './components/Navbar'
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import TeamPage from './pages/TeamPage';
import TimelinePage from './pages/TimelinePage';


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <HomePage></HomePage>
      break;
    case "/research":
      component = <ResearchPage></ResearchPage>
      break;
    case "/meet-the-team":
      component = <TeamPage></TeamPage>
      break;
    case "/timeline":
      component = <TimelinePage></TimelinePage>
      break;
    case "/contact-us":
      component = <ContactPage></ContactPage>
      break;

  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}
    >
      <Navbar></Navbar>
      <div style={{
        paddingTop: "6rem",  
        width: "100%"       
      }}>
        {component}
      </div>
    </div>
  )
}

export default App
