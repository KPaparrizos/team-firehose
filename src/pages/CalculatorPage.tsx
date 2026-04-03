import "../App.css";
import "../pages-css/CalculatorPage.css";
import Footer from "../components/Footer";
import Calculator from "../components/Calculator";

function CalculatorPage() {
  return (
    <div className="calculator-page-container">
      <div className="contact-page-content">
        <div className="contact-page-center">
          <h1>Calculator</h1>
          <Calculator />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default CalculatorPage;