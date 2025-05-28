import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <HomePage></HomePage>
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
